import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RouterModule} from'@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{HttpModule} from '@angular/http';

import {
  MatToolbarModule, 
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
} from "@angular/material";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent} from './components/registration/registration.component';
import { AuthService} from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { DayService} from './services/day.service';
import { OutfitService} from './services/outfit.service';
import { GoalService} from './services/goal.service';
import { DayIndexComponent } from './components/day/day-index/day-index.component';
import { DayCreateComponent } from './components/day/day-create/day-create.component';
import { OutfitCreateComponent } from './components/outfit/outfit-create/outfit-create.component';
import { GoalCreateComponent } from './components/goal/goal-create/goal-create.component';
import { DayDetailComponent } from './components/day/day-detail/day-detail.component';
import { DayEditComponent } from './components/day/day-edit/day-edit.component';
import { OutfitEditComponent } from './components/outfit/outfit-edit/outfit-edit.component';
import { GoalEditComponent } from './components/goal/goal-edit/goal-edit.component';
import { DayDeleteComponent } from './components/day/day-delete/day-delete.component';
import { OutfitDeleteComponent } from './components/outfit/outfit-delete/outfit-delete.component';
import { GoalDeleteComponent } from './components/goal/goal-delete/goal-delete.component';
import { AuthGuard } from './guards/auth.guard';

const routes = [
  {path: 'register', component: RegistrationComponent },
  {path: 'login', component: LoginComponent},
  {
  path: 'days', canActivate: [AuthGuard], children: [
     {path: 'days', component: DayIndexComponent},
     {path: 'create', component: DayCreateComponent},
     {path: 'detail/:id', component: DayDetailComponent},
     {path: 'edit/:id', component: DayEditComponent},
     {path: 'delete/:id', component: DayDeleteComponent},
    ]
  },
  {
  path: 'outfits', canActivate: [AuthGuard], children: [

    {path: 'create', component: OutfitCreateComponent},
    {path: 'edit/:id', component: OutfitEditComponent},
    {path: 'delete/:id', component: OutfitDeleteComponent},
  ]
},
 {
  path: 'goals', canActivate: [AuthGuard], children: [
    {path: 'create', component: GoalCreateComponent},
    {path: 'edit/:id', component: GoalEditComponent},
    {path: 'delete/:id', component: GoalDeleteComponent},
]
},
  {path: '***', component: RegistrationComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    DayIndexComponent,
    DayCreateComponent,
    OutfitCreateComponent,
    GoalCreateComponent,
    DayDetailComponent,
    DayEditComponent,
    OutfitEditComponent,
    GoalEditComponent,
    DayDeleteComponent,
    OutfitDeleteComponent,
    GoalDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,  
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    DayService,
    OutfitService,
    GoalService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
