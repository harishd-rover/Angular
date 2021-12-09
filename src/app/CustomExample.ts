import { Component } from "@angular/core";
@Component(
    {
        selector:"cust-ex",
        template:
        `
        <div>
        <h1 [color] = "'yellow'">Welcome</h1>
        <h1>This is done by Custom Directive Component</h1>
        <hr>
        </div>
        `,
        
    }
)
export class CustomExample
{
   
}