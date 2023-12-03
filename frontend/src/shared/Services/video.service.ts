import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private videoSource$: BehaviorSubject<string> = new BehaviorSubject<string>("");

  public setVideoSource(videoUrl: string): void {
    this.videoSource$.next(videoUrl);
  }

  public getVideoSource(): Observable<string> {
    return this.videoSource$.asObservable();
  }
  constructor() { }
}
