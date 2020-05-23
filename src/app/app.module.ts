import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { RouterModule } from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactAovComponent } from './pages/contact-aov/contact-aov.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { FaqComponent } from './pages/faq/faq.component';
import { CaseStudiesComponent } from './pages/case-studies/case-studies.component';
import { TestimonialsComponent } from './sub-pages/testimonials/testimonials.component';
import { LocationsComponent } from './sub-pages/locations/locations.component';
import { TrainingDepartmentComponent } from './pages/training-department/training-department.component';
import { DashboardComponent } from './admin-pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './templates/footer/footer.component';
import { MainNavComponent } from './templates/main-nav/main-nav.component';
import { TopNavComponent } from './templates/top-nav/top-nav.component';

import { AngularStickyThingsModule} from '@w11k/angular-sticky-things';
import { FooterCtaComponent } from './sub-pages/footer-cta/footer-cta.component';
import { BillingComponent } from './pages/billing/billing.component';
import { NewsletterSubscriptionComponent } from './sub-pages/newsletter-subscription/newsletter-subscription.component';
import { FaqDetailComponent } from './pages/faq/faq-detail/faq-detail.component';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

// Import all Foundation Modules
import {
  AccordionModule,
  AlertModule,        // Foundation Callouts
  ButtonsModule,
  CarouselModule,     // Foundation Orbit
  CollapseModule,
  BsDatepickerModule,
  BsDropdownModule,   // Foundation Dropdown Menus and Dropdown Panes
  ModalModule,        // Foundation Reveal
  OffcanvasModule,
  PaginationModule,
  ProgressbarModule,
  RatingModule,
  SortableModule,
  TabsModule,
  TimepickerModule,
  TooltipModule,
  TypeaheadModule,
} from 'ngx-foundation';

@NgModule({
  declarations: [
    AppComponent,
    SolutionsComponent,
    PricingComponent,
    ResourcesComponent,
    AboutUsComponent,
    ContactAovComponent,
    BlogsComponent,
    FaqComponent,
    CaseStudiesComponent,
    TestimonialsComponent,
    LocationsComponent,
    TrainingDepartmentComponent,
    DashboardComponent,
    HomeComponent,
    FooterComponent,
    MainNavComponent,
    TopNavComponent,
    FooterCtaComponent,
    BillingComponent,
    NewsletterSubscriptionComponent,
    FaqDetailComponent,
    MessagesComponent,
    PageNotFoundComponent
  ],
  imports: [
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    AlertModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    AngularStickyThingsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ScrollToModule.forRoot(),
    // RouterModule.forRoot([
    //   // { path: '', redirectTo: '/home', pathMatch: 'full' }, //Default Home Page
    //   // { path: 'home', component: HomeComponent, data: { animation: 'HomePage' }  },
    //   // { path: 'solutions', component: SolutionsComponent, data: { animation: 'SolutionsPage' }  },
    //   // { path: 'pricing', component: PricingComponent, data: { animation: 'pricing' }  },
    //   // { path: 'resources', component: ResourcesComponent, data: { animation: 'resources' }  },
    //   // { path: 'about-us', component: AboutUsComponent, data: { animation: 'about-us' }  },
    //   // { path: 'contact-aov', component: ContactAovComponent, data: { animation: 'contact-aov' }  },
    //   // { path: 'blogs', component: BlogsComponent, data: { animation: 'blog' }  },
    //   // { path: 'faq', component: FaqComponent , data: { animation: 'faq' }  },
    //   // { path: 'case-studies', component: CaseStudiesComponent, data: { animation: 'case-studies' }  },
    //   // { path: 'training-department', component: TrainingDepartmentComponent, data: { animation: 'training-department' }  },
    //   // { path: 'admin-pages/dashboard', component: DashboardComponent, data: { animation: 'admin-pages/dashboard' }  },
    // ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
