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

//import { AlertService } from './alert.service';
//import { AuthenticationService } from './authentication.service';
//import { UserService  } from './user.service';

//import { customHttpProvider } from './helpers/custom-http';

//import { AuthGuard } from './auth.guard';

//import { AlertComponent } from './alert/alert.component';
//import { LoginComponent } from './login/login.component';
//import { RegisterComponent } from './register/register.component';

const ROUTES = [
  { path: '', redirectTo: 'series', pathMatch: 'full' },
  { path: 'series', component: SerieComponent }
];

const appRoutes: Routes = [
  { path: '', redirectTo: 'series', pathMatch: 'full' },
  { path: 'series', component: SerieComponent},
  //{ path: 'login', component: LoginComponent },
  //{ path: 'register', component: RegisterComponent },
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
    //AlertComponent,
    //LoginComponent,
    //RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    //customHttpProvider,
    //AuthGuard,
    //AlertService,
    //AuthenticationService,
    //UserService,
    SerieService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
