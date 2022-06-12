
import React from 'react';

let name: string = "jay"
let ag: number = 5
let isStudent: boolean = true 
let hobbies: string[] = ["basketball"]
let role:[number,string] = [5, "jay"]//tuple 

// let person: Object 
type Person = {
  name: string;
  age?: number; // optional field 
}
let person:Person = {
  name: "jay",
  age: 22
}

let lotsOfPeople: Person[] = [person]

let mixType: number | string  = 4; 

function printName(name: string){
  console.log(name)
}

let printName1: Function ;
let printName2 : (name:string)=> number

let unkownType: unknown; 


interface PersonInterface {
  name: string;
  age?: number
}

type X = {
  a:string;
  b:number
}
type Y = X & {
  c: string ;
  d: number; 
}

let y: Y = {
  a: "a",
  b: 1,
  c:"c",
  d:1 
}


interface Guy extends PersonInterface{
  profession: string 
}
