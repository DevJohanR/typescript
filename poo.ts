class Sale{
   protected amount: number;


    constructor(amount: number){
        this.amount = amount;
    }

    getTotal(): number{
        return this.amount;
    }

}

class SaleWithTax extends Sale{
    private tax: number;

    constructor(amount: number, tax: number){
        super(amount);
        this.tax = tax;
    }
   

      override  getTotal(): number{
            return this.tax + super.getTotal();
        }

}


let sale = new Sale(19);
const res = sale.getTotal();
console.log(res)


let saleWithTax = new SaleWithTax(10, 100);
const res2= saleWithTax.getTotal();
console.log(res2)




