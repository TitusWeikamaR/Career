import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { NavigationComponent } from './navigation/navigation.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PricingComponent } from './pricing/pricing.component';
import { AboutComponent } from './about/about.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { QuestionsComponent } from './questions/questions.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { SpeakersComponent } from './speakers/speakers.component';


const routes: Routes = [
  { path: '',   redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HeaderComponent},
  { path: 'About', component: AboutComponent },
  { path: 'Schedules', component: ScheduleComponent},
  { path: 'Speakers', component: SpeakersComponent},
  { path: 'Gallery', component: GalleryComponent },
  { path: 'Faq', component: QuestionsComponent },
  { path: 'Blog', component: BlogComponent  },
  { path: 'Pricing', component: PricingComponent  },
  { path: 'Contact', component: ContactComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
