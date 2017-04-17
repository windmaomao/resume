import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RestangularModule } from 'ng2-restangular';
import { MdModule } from 'ng2-md';

// import { AppComponent } from './app.component';
import { ResumeService } from './app.service';
import {
  AppComponent,
  HeaderComponent, FooterComponent,
  ResumeComponent, SectionComponent
} from './app.component';

export function restProvider(RestangularProvider) {
  RestangularProvider.setBaseUrl('https://windmaomao.cloudant.com');
  RestangularProvider.setDefaultHeaders({
    'Content-Type': 'application/json'
  });
  RestangularProvider.setDefaultHeaders({
    'Authorization': 'Basic d2luZG1hb21hbzp6amYyNzNqZmpm'
  });
  // RestangularProvider.setDefaultHttpFields({ withCredentials: true });
  RestangularProvider.setDefaultHttpFields({ withCredentials: true });
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, FooterComponent,
    ResumeComponent, SectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RestangularModule.forRoot(restProvider),
    MdModule,
  ],
  providers: [
    ResumeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
