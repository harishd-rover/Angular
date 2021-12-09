import { Component, Injectable, OnInit } from '@angular/core';
import { MyService } from './MyService';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css'],
  providers:[MyService]
})
export class DependencyInjectionComponent implements OnInit {

  text!:string
  constructor(private service:MyService) {
      this.text = service.getName()
   }

  ngOnInit(): void {
  }

}
