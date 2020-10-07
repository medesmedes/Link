import { Component, AfterViewInit, ElementRef, ViewChild } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { NgForm } from "@angular/forms";
import { environment } from 'src/environments/environment';
import { MatSnackBar } from "@angular/material";
import { CommentDialogComponent } from "src/app/comment-dialog/comment-dialog.component";


@Component({
  selector: "link-adder",
  templateUrl: "./link-adder.component.html",
  styleUrls: ["./link-adder.component.scss"]
})
export class LinkAdderComponent implements AfterViewInit {
  duration = 1500;
  dbRef: any;
  model: any = {};
  prodPath: string = "users/Re047I84rQfCzxRjeRWZ7PMs2wL2/links";
  demoPath: string = "users/demobruger/links";
  @ViewChild("linkForm", { static: true }) linkForm: NgForm;

  ngAfterViewInit(): void {}

  constructor(db: AngularFireDatabase, private _snackBar: MatSnackBar) {
    if (environment.isDemo) {
      this.dbRef = db.list(this.demoPath);    
    } else {
      this.dbRef = db.list(this.prodPath);
    }
  }

  onSubmit() {
    if (this.model.comment != null) {
      this.addLink(this.model.link, this.model.comment);
      this.linkForm.resetForm();
      this.openSnackBar();
    } else {
      this.addLink(this.model.link, "");
      this.linkForm.resetForm();
      this.openSnackBar();
    }
  }

  addLink(linkURL: string, comment: string) {
    this.dbRef.push({
      'comment': comment,
      'favorite': false,
      'link': linkURL,
      'timestamp': this.getTimeStamp(),
      'type': this.getURLType(linkURL)
  })
  }

  getURLType(url: string) {
    var base64Regex = new RegExp(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);
    var vidRegex = new RegExp("^(https?://)?(www.youtube.com|youtu.?be)/.+$");
    var linkRegex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
    if (url.match(/\.(jpeg|jpg|gif|png)$/) || url.match(base64Regex)) {
      return "image";
    } else if (url.match(vidRegex) && url.includes("playlist") === false) {
      return "video";
    } else if (url.match(linkRegex)) {
      return "link";
    } else {
      return "text";
    }
  }

  getTimeStamp(){
    return new Date().getTime();
  }
  
  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarLinkComponent, {
      duration: this.duration
    });
  }
}

@Component({
  selector: "snack-bar-link",
  templateUrl: "/snack-bar-link/snack-bar-link.html"
})
export class SnackBarLinkComponent {}

