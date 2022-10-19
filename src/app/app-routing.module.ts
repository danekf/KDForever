import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MenuComponent } from './menu/menu.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DirectionsComponent } from './directions/directions.component';

const routes: Routes = [
  // the main paths
  {path:'home', component: WelcomePageComponent},
  {path:'contact-us', component: ContactUsComponent},
  {path:'directions', component: DirectionsComponent},

  //testing component path, change component and whenever you go to /test that page will render. Makes things a bit easier if testing single component
  {path:'test', component: MenuComponent},

  //Redirects and wildcard catches
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'**', redirectTo: '/home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
