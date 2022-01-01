import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotebookComponent } from './components/notebook/notebook.component';
import { IndexComponent } from './components/index/index.component';
import { WeatherReportComponent } from './components/weather-report/weather-report.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SoilFertilityMapsComponent } from './components/soil-fertility-maps/soil-fertility-maps.component';
import { GovtInfoComponent } from './components/govt-info/govt-info.component';
import { CropInfoComponent } from './components/crop-info/crop-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CropSuggestionComponent } from './components/crop-suggestion/crop-suggestion.component';
import { SoilFertilityMapsDisplayComponent } from './components/soil-fertility-maps-display/soil-fertility-maps-display.component';

export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    AboutusComponent,
    LoginComponent,
    RegisterComponent,
    NotebookComponent,
    IndexComponent,
    WeatherReportComponent,
    ProfileComponent,
    SoilFertilityMapsComponent,
    GovtInfoComponent,
    CropInfoComponent,
    CropSuggestionComponent,
    SoilFertilityMapsDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
