import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetFeedResposeInterface } from '../types/getFeedResponse.interface';

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) {}

  getFeed(url: string): Observable<GetFeedResposeInterface> {
    const fullUrl = `${environment.apiUrl}${url}`;
    return this.http.get<GetFeedResposeInterface>(fullUrl).pipe(delay(400));
  }
}
