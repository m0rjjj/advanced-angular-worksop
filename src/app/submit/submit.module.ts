import { RouterModule } from '@angular/router';
import { SubmitComponent } from './submit.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', component: SubmitComponent},
    ])
  ],
  declarations: [SubmitComponent]
})
export class SubmitModule { }
