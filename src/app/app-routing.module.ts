import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmissionComponent } from './submission/submission.component';
import { MiddleComponent } from './middle/middle.component';

const routes: Routes = [
  {path:"Submission", component: SubmissionComponent},
  {path:"middle",component: MiddleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
