import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { SetupComponent } from './setup/setup.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard', component: MenuComponent,
    children: [{
      path: '', component: HomeComponent
    },
    {
      path: 'settings', component: SettingsComponent
    },
    { path: 'project', component: ProjectDashboardComponent }
    ]
  },
  { path: 'setup', component: SetupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
