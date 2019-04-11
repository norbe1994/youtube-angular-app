import { Component, OnInit } from '@angular/core'
import { YoutubeService } from 'src/app/services/youtube.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  constructor(public _yts: YoutubeService) {
    this._yts.getVideos().subscribe()
  }

  ngOnInit() {}
}
