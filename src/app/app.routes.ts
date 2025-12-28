import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { AuthGuard } from './services/auth-guard.service';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { FaqComponent } from './pages/faq/faq.component';
import { AboutComponent } from './pages/about/about.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import {HistoryComponent} from './pages/history/history.component';
export const routes: Routes = [
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
        path: 'faq',
        component: FaqComponent 
    },
    {
        path: 'about',
        component: AboutComponent 
    },
    {
        path: 'consulta',
        component: ConsultaComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'report', 
        component: HistoryComponent ,
        canActivate: [AuthGuard]
    }

];