import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  form:any
  name!:string

  constructor() { }

  ngOnInit() {
   this.form = new FormGroup(
     {
       firstname : new FormControl(
         "", Validators.compose([Validators.required, Validators.minLength(3)])
       ),
       lastname : new FormControl(""),
       language : new FormControl("")
     }
   )}
     onSubmit(user:any)
     {
       console.log(user)
       this.name = user.firstname
     }
}
