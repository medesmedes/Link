import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-card-body",
  templateUrl: "./card-body.component.html",
  styleUrls: ["./card-body.component.scss"]
})
export class CardBodyComponent implements OnInit {
  @Input() link: any;

  constructor() {
  }

  ngOnInit(): void {
    
  }

  YouTubeGetID(url: any) {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    const embedUrl = 'https://www.youtube.com/embed/';
    url = embedUrl + url[2];
    return url;
  }
}
