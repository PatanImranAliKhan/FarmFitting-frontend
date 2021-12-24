import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

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
    CropSuggestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
