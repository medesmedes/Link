import { Component, OnInit, Input } from "@angular/core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-card-header",
  templateUrl: "./card-header.component.html",
  styleUrls: ["./card-header.component.scss"]
})
export class CardHeaderComponent implements OnInit {
  @Input() link: any;
  @Input() dbRef: any;
  cross = faTimes;
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
