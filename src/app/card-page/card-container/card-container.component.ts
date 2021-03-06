import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {
  links: any[];
  dbRef: any;
  prodPath = 'users/Re047I84rQfCzxRjeRWZ7PMs2wL2/links';
  demoPath = 'users/demobruger/links';
  constructor(db: AngularFireDatabase) {
    if (environment.isDemo) {
      this.dbRef = db.list(this.demoPath);
      db.list(this.demoPath)
        .snapshotChanges()
        .subscribe((links) => {
          this.links = links;
          console.log(this.links);
          this.links.sort(
            (a, b) =>
              b.payload.val().favorite - a.payload.val().favorite ||
              b.payload.val().timestamp - a.payload.val().timestamp
          );
        });
    } else {
      this.dbRef = db.list(this.prodPath);
      db.list(this.prodPath)
        .snapshotChanges()
        .subscribe(links => {
          this.links = links;
          // tslint:disable-next-line:max-line-length
          this.links.sort((a, b) => b.payload.val().favorite - a.payload.val().favorite || b.payload.val().timestamp - a.payload.val().timestamp);
        });
    }
  }

  ngOnInit(): void {}

  trackBySource(index: number, link: any): string {
    return link.payload.val().link;
  }
}
