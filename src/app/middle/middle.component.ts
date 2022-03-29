import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubmissionComponent } from '../submission/submission.component';
@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css'],
})
export class MiddleComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  Submission(): void {
    this.router.navigate(['/Submission']);
  }
}
