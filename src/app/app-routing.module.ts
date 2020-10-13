import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PartyComponent } from './party/party.component';
import { CreateComponent } from './game/create/create.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent, canActivate: [ MsalGuard ]},
  { path: 'party', component: PartyComponent, canActivate: [ MsalGuard ]},
  { path: 'game/create', component: CreateComponent, canActivate: [ MsalGuard ]},
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
