import { ReasonsComponent } from './components/reasons/reasons.component';
import { MemoriesComponent } from './components/memories/memories.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'memories', component: MemoriesComponent, canActivate: [AuthGuard]},
  { path: 'reasons', component: ReasonsComponent, canActivate: [AuthGuard] }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
