import { SamplesComponent } from './samples/samples.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { ServicesComponent } from './services/services.component';
import { LandingSectionComponent } from './landing-section/landing-section.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:"",component:LandingSectionComponent},{path:"services",component:ServicesComponent},
{path:"testimony",component:TestimonyComponent},{path:"contactus",component:ContactUsComponent},{path:"about",component:AboutComponent},{path:"samples",component:SamplesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
