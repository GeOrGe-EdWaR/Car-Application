import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RentaldealsComponent } from './rentaldeals/rentaldeals.component';
import { WhychooseusComponent } from './whychooseus/whychooseus.component';
import { ErrorComponent } from './error/error.component';
import { HowitworkComponent } from './howitwork/howitwork.component';
import { SingleitemComponent } from './singleitem/singleitem.component';
import { AllcarsComponent } from './allcars/allcars.component';

const routes: Routes = [
  { path: 'becomearental', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'howitwork', component: HowitworkComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'rentaldeals', component: RentaldealsComponent },
  { path: 'whychooseus', component: WhychooseusComponent },
  { path: 'item/:id', component: SingleitemComponent },
  { path: 'allcars', component: AllcarsComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
