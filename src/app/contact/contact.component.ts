import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      subject: new FormControl(null),
      message: new FormControl(null),
    });
  }

  onSubmit() {
    alert('Your form has been submitted successfully');
    location.reload();
  }
}
