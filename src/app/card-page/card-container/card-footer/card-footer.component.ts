import { Component, OnInit, Input } from "@angular/core";
import { MatDialog, MatSnackBar } from "@angular/material";
import { CommentDialogComponent } from "src/app/comment-dialog/comment-dialog.component";

@Component({
  selector: "app-card-footer",
  templateUrl: "./card-footer.component.html",
  styleUrls: ["./card-footer.component.scss"]
})
export class CardFooterComponent implements OnInit {
  @Input() link: any;
  @Input() dbRef: any;
  duration = 1500;
  constructor(private dialog: MatDialog, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  favorite(key: string, linkFav: boolean) {
    linkFav
      ? this.dbRef.update(key, { favorite: false })
      : this.dbRef.update(key, { favorite: true });
  }

  openComment(key: string, commentText: string): void {
    const dialogRef = this.dialog.open(CommentDialogComponent, {
      data: { text: commentText }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (key !== null && result !== undefined) {
        this.dbRef.update(key, { comment: result });
        this.openSnackBar();
      }
    });
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarCommentComponent, {
      duration: this.duration
    });
  }
}

@Component({
  selector: "snack-bar-component",
  templateUrl: "/snack-bar-comment/snack-bar-comment.html"
})
export class SnackBarCommentComponent {}
