import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule,
  NbMenuModule, NbIconModule,  NbInputModule, NbCardModule, NbActionsModule,
  NbListModule, NbAccordionModule, NbStepperModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { SetupComponent } from './setup/setup.component';
import { MenuComponent } from './menu/menu.component';
@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    HomeComponent,
    ProjectDashboardComponent,
    SetupComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbLayoutModule, NbSidebarModule.forRoot(), NbButtonModule, NbMenuModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
    NbStepperModule,
    NbActionsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NbInputModule,
    NbCardModule,
    NbAccordionModule,
    NbThemeModule,
    NbListModule,
    NbThemeModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
