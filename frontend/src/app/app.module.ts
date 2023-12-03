import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { Router, RouterModule } from '@angular/router'; 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ThemePalette} from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatTable } from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';

import { CommonModule } from '@angular/common';
import {VgApiService, VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';

import { SurveyModule } from 'survey-angular-ui';

import { NgxStarsModule } from 'ngx-stars';

import { NgChartsModule } from 'ng2-charts';

import { SharedModule } from 'src/shared/shared.module';
import { MaterialModule } from 'src/material/material.module';
import { ChatComponent } from '../shared/Container/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent
   
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    SharedModule,
    MaterialModule,
    BrowserAnimationsModule, 
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
