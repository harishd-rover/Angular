export class Product{

 
    ProdId : number
    ProdName: string  
    ProdPrice : number

    constructor(id: number, name: string, price:number) {
       this.ProdId = id
       this.ProdName = name
       this.ProdPrice = price
        
    }

}