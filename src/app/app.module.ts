import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HowitworkComponent } from './howitwork/howitwork.component';
import { WhychooseusComponent } from './whychooseus/whychooseus.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { RentaldealsComponent } from './rentaldeals/rentaldeals.component';
import { SingleitemComponent } from './singleitem/singleitem.component';
import { AllcarsComponent } from './allcars/allcars.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    HowitworkComponent,
    WhychooseusComponent,
    ErrorComponent,
    RentaldealsComponent,
    SingleitemComponent,
    AllcarsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
