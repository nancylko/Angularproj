import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CommonServiceService } from './common-service.service';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { SpaceprogPanelComponent } from './spaceprog-panel/spaceprog-panel.component'

@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent,
    SpaceprogPanelComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [CommonServiceService],
  bootstrap: [AppComponent],
  entryComponents:[]
})
export class AppModule { }
