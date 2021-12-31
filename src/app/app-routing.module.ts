import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { CropInfoComponent } from './components/crop-info/crop-info.component';
import { GovtInfoComponent } from './components/govt-info/govt-info.component';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { NotebookComponent } from './components/notebook/notebook.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { SoilFertilityMapsDisplayComponent } from './components/soil-fertility-maps-display/soil-fertility-maps-display.component';
import { SoilFertilityMapsComponent } from './components/soil-fertility-maps/soil-fertility-maps.component';
import { WeatherReportComponent } from './components/weather-report/weather-report.component';

const routes: Routes = [
  {path: '',component:IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home',component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'contactus', component: ContactComponent},
  {path: 'notebook', component: NotebookComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'weatherreport', component: WeatherReportComponent},
  {path: 'govtinfo', component: GovtInfoComponent},
  {path: 'cropinfo', component: CropInfoComponent},
  {path: 'soil-fertility-maps', component: SoilFertilityMapsComponent},
  {path: 'displaymaps/:state', component: SoilFertilityMapsDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
