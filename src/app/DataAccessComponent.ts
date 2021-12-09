import { Component } from "@angular/core";
@Component(
    {
        selector:"my-data",
        template:
        `
        <div>
        <h1>Welcome {{name}}!!</h1>
        <h1>This is ngFor loop Component</h1>
        <ul *ngFor = "let h of array">
            <li><b>{{h}}</b></li>
        </ul>
        <hr>
        </div>
        `,
        
    }
)
export class DataAccessComponent
{
    name:string = "harish"
    array = ["harish", "Ramesh","Girish","Kiran"]
}