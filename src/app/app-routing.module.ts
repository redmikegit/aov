import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** PAGES TO IMPORT */
import { BillingComponent } from './pages/billing/billing.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactAovComponent } from './pages/contact-aov/contact-aov.component';
import { BlogsComponent } from './pages/blogs/blogs.component';

import { FaqComponent } from './pages/faq/faq.component';
import { FaqDetailComponent } from './pages/faq/faq-detail/faq-detail.component';

import { CaseStudiesComponent } from './pages/case-studies/case-studies.component';
import { TrainingDepartmentComponent } from './pages/training-department/training-department.component';
import { DashboardComponent } from './admin-pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, //Default Home Page
    { path: 'home', component: HomeComponent, data: { animation: 'home' }  },
    { path: 'billing', component: BillingComponent, data: { animation: 'billing' }  },
    { path: 'solutions', component: SolutionsComponent, data: { animation: 'solutions' }  },
    { path: 'pricing', component: PricingComponent, data: { animation: 'pricing' }  },
    { path: 'resources', component: ResourcesComponent, data: { animation: 'resources' }  },
    { path: 'about-us', component: AboutUsComponent, data: { animation: 'about-us' }  },
    { path: 'contact-aov', component: ContactAovComponent, data: { animation: 'contact-aov' }  },
    { path: 'blogs', component: BlogsComponent, data: { animation: 'blog' }  },

    { path: 'faq', component: FaqComponent , data: { animation: 'faq' }  },
    { path: 'faq/:slug', component: FaqDetailComponent , data: { animation: 'faq/:slug', }  },

    { path: 'case-studies', component: CaseStudiesComponent, data: { animation: 'case-studies' }  },
    { path: 'training-department', component: TrainingDepartmentComponent, data: { animation: 'training-department' }  },
    { path: 'admin-pages/dashboard', component: DashboardComponent, data: { animation: 'admin-pages/dashboard' }  },
    { path: '**', component: PageNotFoundComponent, data: { animation: 'page-not-found' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

