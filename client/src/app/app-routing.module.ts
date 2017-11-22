import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from "./users/users.component"
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { VoteComponent } from './vote/vote.component';

const routes: Routes = [
	{ path: '', component: UsersComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'create', component: CreateComponent },
	{path: 'vote/:id', component:VoteComponent},
	{ path: '**', redirectTo: '/'}
];
export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
