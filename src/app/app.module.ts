import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { MainComponent } from './Sites/main/main.component';
import { HistoryComponent } from './Sites/history/history.component';
import { SettingsComponent } from './Sites/settings/settings.component';
import { GameComponent } from './Sites/game/game.component';
import {ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ConfigComponent } from './Sites/config/config.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HistoryComponent,
    SettingsComponent,
    GameComponent,
    ConfigComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DropdownModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    TableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
