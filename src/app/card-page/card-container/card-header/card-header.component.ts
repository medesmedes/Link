import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card-header",
  templateUrl: "./card-header.component.html",
  styleUrls: ["./card-header.component.scss"]
})
export class CardHeaderComponent implements OnInit {
  @Input() link: any;
  @Input() dbRef: any;
  constructor() {}

  ngOnInit(): void {

  }


  delete(linkID: string) {
    if (confirm("Are you sure you want to delete this link?")) {
      this.dbRef.remove(linkID);
    } else {
      return;
    }
  }
}
