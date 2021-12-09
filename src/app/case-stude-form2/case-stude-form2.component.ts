import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-case-stude-form2',
  templateUrl: './case-stude-form2.component.html',
  styleUrls: ['./case-stude-form2.component.css']
})
export class CaseStudeForm2Component implements OnInit {
  form:any
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup(
      {
        OwnerId : new FormControl(),
        OwnerName : new FormControl(""),
        Email : new FormControl(""),        
      }
    )}
    onSubmit(user:any)
    {
      console.log(user)
      // this.name = user.firstname
    }
}
