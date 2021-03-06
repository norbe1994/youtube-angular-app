import { Injectable } from '@angular/core'
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private youtubeUrl: string = 'https://www.googleapis.com/youtube/v3'
  private apiKey: string = 'AIzaSyCaQwP-eWawlqfdIJ3fTsIXrhFkOZGvIjM'
  private playlist: string = 'PL0vfts4VzfNiMQXc5zxl8--KDjaQcWNi2'
  private nextPageToken: string = ''

  constructor(public http: HttpClient) {}

  getVideos() {
    const url = `${this.youtubeUrl}/playlistItems`
    let params = new HttpParams()
    params = params.set('part', 'snippet')
    params = params.set('maxResults', '10')
    params = params.set('playlistId', this.playlist)
    params = params.set('key', this.apiKey)

    if (this.nextPageToken) {
      params = params.set('pageToken', this.nextPageToken)
    }

    return this.http.get(url, { params }).pipe(
      map((res: any) => {
        this.nextPageToken = res.nextPageToken
        let videos: any = []
        for (let video of res.items) {
          videos.push(video.snippet)
        }
        return videos
      })
    )
  }
}
