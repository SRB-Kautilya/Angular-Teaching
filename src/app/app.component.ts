import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('f', { static: true }) signUpForm: NgForm;
  defaultValue = "teacher";
  answer = "";
  genders = ["Male", "Female"]
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   gender: "",
    //   questionAnswer: "",
    //   secret: "teacher",
    //   userData: { userame: "SugestedName", email: "" }
    // })
    this.signUpForm.form.patchValue({

      userData: { userame: "SugestedName" }
    })
  }

  // onSubmit(form:NgForm) {
  //   console.log('FORM:',form)
  // }

  //Accessing form via Viewchild

  onSubmit() {
    console.log(this.signUpForm)
  }
}
