import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {

  name = "harish"
  day = new Date()
  arr = [10,20,30,40,50,60]
  price = 500

  
  constructor() { }

  ngOnInit(): void {
  }

}
