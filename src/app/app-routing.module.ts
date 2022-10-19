import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MenuComponent } from './menu/menu.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  //testing component path, change component and whenever you go to /test that page will render. Makes things a bit easier if testing single component
  {path:'test', component: MenuComponent},
  //default router component
  {path:'', component: WelcomePageComponent},

  // the rest
  {path:'contact-us', component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
