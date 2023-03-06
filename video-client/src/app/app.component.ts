import { Component, OnInit } from '@angular/core';
import {AnicloudService} from "../services/anicloud.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'video-client';
  constructor(private anicloud: AnicloudService) {
  }

  ngOnInit(): void {
    this.anicloud.getAllCarouselAnime();
  }
}
