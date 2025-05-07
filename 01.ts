// Problem -- 01

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










// Problem -- 02


const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];


  function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating > 4);
  }


 console.log(filterByRating(books));









//  Problem -- 03


function concatenateArrays <T>(...arrays : T [][]) : T [] {
    return arrays.flat();
}

console.log(concatenateArrays(["a", "b"], ["c"]));  
console.log(concatenateArrays([1, 2], [3, 4], [5]));   








// Problem -- 04


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



// 5


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



// 6








