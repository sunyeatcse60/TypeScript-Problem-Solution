function formatString(input: string, toUpper?: boolean) : string {
    if(toUpper === false){
        return input.toLowerCase();
    }
    else{
        return input.toUpperCase();
    }

}


console.log(formatString("Hello"));       
console.log(formatString("Hello", true)); 
console.log(formatString("Hello", false));



const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];


  function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating > 4);
  }


 console.log(filterByRating(books));





function concatenateArrays <T>(...arrays : T [][]) : T [] {
    return arrays.flat();
}

console.log(concatenateArrays(["a", "b"], ["c"]));  
console.log(concatenateArrays([1, 2], [3, 4], [5]));   




class Vehical {
    private make: string;
    private year: number;

    constructor (make:string, year: number){
        this.make = make;
        this.year = year;

    }

    getInfo(){
        return `Make:${this.make}, Year:${this.year}`;
    }

}


class Car extends Vehical {
    private model : string;

    constructor (make:string, year: number, model: string){
        super(make,year);
        this.model = model;
    }

    getModel(){
        return `Model: ${this.model}`;
    }
}


const myCar = new Car("Toyota", 2020, "Corolla");

console.log(myCar.getInfo());
console.log(myCar.getModel()); 




function processValue(value: string | number): number{
    if(typeof value === "number"){
        return value * 2 ;
    }
    else{
        return value.length;
    }
}


console.log(processValue("hello")); 
console.log(processValue(10));     



interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null{
    if(products.length === 0){
        return null;
    }

    let mostExpensive = products[0]

    for(let i=1; i<products.length; i++){
        if(products[i].price> mostExpensive.price){
            mostExpensive = products[i];
        }
    }

    return mostExpensive;
  }



  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
  
  console.log(getMostExpensiveProduct(products));
  


enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
function getDayType(day: Day): string{
    if(day === Day.Sunday ){
        return "Weekend";
    }
    else{
        return "Weekday";
    }
}

getDayType(Day.Monday);  
getDayType(Day.Sunday);  





async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(new Error("Negative number not allowed"));
        } else {
          resolve(n * n);
        }
      }, 1000); 
    });
  }

  squareAsync(4).then(console.log); 
  squareAsync(-3).catch(console.error);   