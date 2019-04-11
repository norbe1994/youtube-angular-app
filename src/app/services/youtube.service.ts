import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private youtubeUrl: string = 'https://www.googleapis.com/youtube/v3'
  private apiKey: string = 'AIzaSyB7KswVhXCqIzsecWimQoknFFhQ5oht43k'
  private playlist: string = 'UU8butISFwT-Wl7EV0hUK0BQ'

  constructor(public http: HttpClient) {}

  getVideos() {
    let url = `${this.youtubeUrl}/playlistItems`
    let params = new HttpParams()
    params.set('part', 'snippet')
    params.set('maxResults', '10')
    params.set('playlistId', this.playlist)
    params.set('apiKey', this.apiKey)

    return this.http.get(url, { params }).pipe(map((res: any) => console.log(res)))
  }
}
