
import { Component } from "@angular/core";
import { Product } from "./Product";

@Component(
    {
        selector:"my-prod-list",
        template:
        `
        <div>
            <h1>List of Products: </h1>
        <ul *ngFor = "let h of objects">
            <li><b>Product Id: {{h.ProdId}}</b></li>
            <li><b>Product name: {{h.ProdName}}</b></li>
            <li><b>Product Proice: {{h.ProdPrice}}</b></li>
            <hr>
        </ul>
        <hr>
        </div>
        `,
        
    }
)
export class ProductArrayComponent {
objects =[ new Product(10,"Soup",23), new Product(10,"Shampoo",23), new Product(10,"Brush",23) , new Product(10,"Paste",23)   ] 
   
}
