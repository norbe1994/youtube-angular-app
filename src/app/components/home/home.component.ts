import { Component, OnInit } from '@angular/core'
import { YoutubeService } from 'src/app/services/youtube.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public videos: any[] = []

  constructor(public _yts: YoutubeService) {
    this._yts.getVideos().subscribe(videos => {
      console.log(videos)
      this.videos = videos
    })
  }

  ngOnInit() {}
}
