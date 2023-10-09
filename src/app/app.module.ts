import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Environments } from './environments';
import { NovenyComponent } from './part/noveny/noveny.component';
import { FormsModule } from '@angular/forms';
import { NovenyekListComponent } from './novenyek-list/novenyek-list.component';
import { RendelesekComponent } from './rendelesek/rendelesek.component';
import { NavComponent } from './nav/nav.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NovenyComponent,
    NovenyekListComponent,
    RendelesekComponent,
    NavComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(Environments.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
