import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VgApiService, VgCoreModule, VgPlayerComponent} from '@videogular/ngx-videogular/core';
import { VideoService } from '../../Services/video.service';



@Component({
  selector: 'app-videogular',
  templateUrl: './videogular.component.html',
  styleUrls: ['./videogular.component.css'],
  template: `
  <vg-player (onPlayerReady)="onPlayerReady($event)" >
    <video [vgMedia]="media" #media id="singleVideo" preload="auto">
      <source [src]="videoUrl" type="video/mp4">
    </video>
  </vg-player>
  <div>Progress: {{ completionPercentage }}%</div>
`

})
export class VideogularComponent {
  // @ViewChild(VgPlayerComponent) player: VgPlayerComponent|any;
  
  completionPercentage:number=0;
  preload :string='auto';
  api:VgApiService=new VgApiService;
  constructor(private vgApi: VgApiService) {}

  onPlayerReady(source: VgApiService) {
    this.api = source;
    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(
      // this.autoplay.bind(this);
    )
  }

  autoplay() {
    this.api.play();

  }
  
  public videoSource: string="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  
  percentage:number=0;

  
  calculateCompletionPercentage(): void {
    console.log("calculate time called");

   
  }
}


