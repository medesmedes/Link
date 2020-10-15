import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-link-saver',
  templateUrl: './link-saver.component.html',
  styleUrls: ['./link-saver.component.scss']
})
export class LinkSaverComponent implements AfterViewInit {
  duration = 1500;
  dbRef: any;
  model: any = {};
  prodPath = 'users/Re047I84rQfCzxRjeRWZ7PMs2wL2/links';
  demoPath = 'users/demobruger/links';
  @ViewChild('linkForm', { static: true }) linkForm: NgForm;

  ngAfterViewInit(): void {}

  constructor(db: AngularFireDatabase, private snackBar: MatSnackBar) {
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
      this.addLink(this.model.link, '');
      this.linkForm.resetForm();
      this.openSnackBar();
    }
  }

  addLink(linkURL: string, comment: string) {
    this.dbRef.push({
      comment,
      favorite: false,
      link: linkURL,
      timestamp: this.getTimeStamp(),
      type: this.getURLType(linkURL)
  });
  }

  getURLType(url: string) {
    const base64Regex = new RegExp(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);
    const vidRegex = new RegExp('^(https?://)?(www.youtube.com|youtu.?be)/.+$');
    // tslint:disable-next-line:max-line-length
    const linkRegex = new RegExp('^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?');
    const imageRegex = '\.(jpeg|jpg|gif|png)$';
    if (url.match(imageRegex) || url.match(base64Regex)) {
      return 'image';
    } else if (url.match(vidRegex)) {
      return 'video';
    } else if (url.match(linkRegex)) {
      return 'link';
    } else {
      return 'text';
    }
  }

  getTimeStamp() {
    return new Date().getTime();
  }

  openSnackBar() {
    this.snackBar.openFromComponent(SnackBarLinkComponent, {
      duration: this.duration
    });
  }
}

@Component({
  selector: 'app-snack-bar-link',
  templateUrl: './snack-bar-link/snack-bar-link.html',
  styleUrls: ['./snack-bar-link/snack-bar-link.scss']
})
export class SnackBarLinkComponent {}

