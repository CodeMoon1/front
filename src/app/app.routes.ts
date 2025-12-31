import { Routes } from '@angular/router';

// Importar seus componentes existentes
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { AuthGuard } from './services/auth-guard.service';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { FaqComponent } from './pages/faq/faq.component';
import { AboutComponent } from './pages/about/about.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { HistoryComponent } from './pages/history/history.component';


import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';

export const routes: Routes = [
  {
    path: "",
    component: AboutComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignUpComponent
  },
  {
    path: "privacy-policy",
    component: PrivacyPolicyComponent
  },
  {
    path: "faq",
    component: FaqComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "consulta",
    component: ConsultaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "history",
    component: HistoryComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'blog',
    component: BlogComponent  
  },
  {
    path: 'blog/:id',
    component: BlogDetailComponent  
  }
  
];
