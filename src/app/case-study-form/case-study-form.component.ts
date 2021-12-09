import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-case-study-form',
  templateUrl: './case-study-form.component.html',
  styleUrls: ['./case-study-form.component.css']
})
export class CaseStudyFormComponent implements OnInit {
  form:any
  // name!:string

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup(
      {
        MyTaskId : new FormControl(),
        TaskName : new FormControl(""),
        Description : new FormControl(""),
        TargetDate : new FormControl(Date),
        Status : new FormControl(""),
        Priority : new FormControl(""),
        Tags : new FormControl(""),
        Urgent : new FormControl(false),
        Important : new FormControl(false),
        OwnerId : new FormControl()
        
      }
    )}

  onSubmit(user:any)
  {
    console.log(user)
    // this.name = user.firstname
  }

}
