import { Component } from "@angular/core";
import { Product } from "./Product";
@Component(
    {
        selector:"my-prod",
        template:
        `
        <div>
        <h1>Product Details: </h1>
        <h2>product Id : {{prod.ProdId}}</h2>
        <h2>product Name :{{prod.ProdName}}</h2>
        <h2>product Price :{{prod.ProdPrice}}</h2>
        <hr>
        </div>
        `,
        
    }
)
export class ProductComponent{
    prod = new Product(10,"Soup",111)
}


