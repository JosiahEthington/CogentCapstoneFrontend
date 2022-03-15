import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  username: string = '';
  question: string = '';
  answer: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}
  getQuestion(): void {
    this.question = 'customerService.getQuestion()';
  }
  checkDetails(): void {
    //customerService.checkDetails();
    this.gotoList();
  }
  gotoList() {
    this.router.navigate(['/updatePassword']);
  }
}
