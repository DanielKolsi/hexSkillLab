import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SerieService } from './serie.service';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SerieComponent } from './serie/serie.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { SerieCreateComponent } from './serie-create/serie-create.component';
import { SerieEditComponent } from './serie-edit/serie-edit.component';

import { AlertService } from './alert.service';
import { AuthenticationService } from './authentication.service';
import { UserService  } from './user.service';

import { customHttpProvider } from './helpers/custom-http';

import { AuthGuard } from './auth.guard';

import {
  OktaAuthModule,
  OktaCallbackComponent,
} from '@okta/okta-angular';
import { AlertComponent } from './alert/alert.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const config = {
  issuer: 'https://dev-495722.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:3000/implicit/callback',
  clientId: '0oactmquj7IrrcM720h7'
}

const ROUTES = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'series', component: SerieComponent, canActivate: [AuthGuard] }
];

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'series', component: SerieComponent, canActivate: [AuthGuard]},
  { path: 'implicit/callback', component: OktaCallbackComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'serie-details/:id', component: SerieDetailComponent },
  { path: 'serie-create', component: SerieCreateComponent },
  { path: 'serie-edit/:id', component: SerieEditComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SerieComponent,
    SerieDetailComponent,
    SerieCreateComponent,
    SerieEditComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    OktaAuthModule.initAuth(config)
  ],
  providers: [
    customHttpProvider,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    SerieService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
