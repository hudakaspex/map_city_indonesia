import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1Ijoia2FzcGV4IiwiYSI6ImNrNmpmcmlqdDAwam0zam9icjB0bWIxNTcifQ.BB8PC38auV4HVXp7jKSBtw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
