import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListPersonaComponent } from './persona/list-persona/list-persona.component';
import { AddPersonaComponent } from './persona/add-persona/add-persona.component';
import { EditPersonaComponent } from './persona/edit-persona/edit-persona.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonaService } from './persona.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    NavbarComponent,
    ListPersonaComponent,
    AddPersonaComponent,
    EditPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
