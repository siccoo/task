let name: string;
name = "Michael"
// STRING TYPES 

let age: number;
// NUMBER TYPES

let isNeighbours: boolean;
// BOOLEAN TYPES

let cars: string[]; 
// ARRAY OF STRING TYPES

let ageBracket: number[];
// ARRAY OF NUMBER TYPES

let role: [number, string];
// TUPLE TYPES  

// THERE ARE TWO WAYS IN DEFINING AN OBJECT ON TYPESCRIPT

// FIRST WAY
type Person = {
    name: string;
    age?: number;
};

let person: Person = {
    name: "Michael"
};

// SECOND WAY
let lotsOfPeople: Person[];

function printName(name: string) {
    console.log(name);   
}

printName("Michael Chilaka");

// DECLARING A FUNCTION TYPE IS IN TWO WAYS
// FIRST WAY
let allNames: Function;

// let allName: (name: string) => void; 
let allName: (name: string) => never; 

// DIFFERENCE BETWEEN VOID AND NEVER
// VOID RETURNS UNDEFINED, WHILE NEVER DOESN'T RETURN ANYTHING


export const Types = () => {
  return <div>
      
  </div>;
};
