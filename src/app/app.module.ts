import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarkupComponent } from './markup/markup.component';
import { MainComponent } from './markup/main/main.component';
import { ContaktComponent } from './markup/contakt/contakt.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'contact', component: ContaktComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    MarkupComponent,
    MainComponent,
    ContaktComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
