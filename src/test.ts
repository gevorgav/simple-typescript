/**
 * @author Hovhannes Mirzoyan
 */
import {Dir} from "fs";
import {AModel} from "./a-model";

function f(a:number):number{
    return a;
}


function k():void{
    var a = 16;
    {
        var a = 17;

    }
    console.log(a);
}

//k();


interface Colorful {
    color: string;
}
interface Circle {
    radius: number;
}

type ColorfulCircle = Colorful & Circle;

function draw(circle: Colorful & Circle) {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
}

// okay
//draw({ color: "blue", radius: 42 });

// oops
//draw({ color: "red", radius: 56 });

interface Person {
    name: string;
    age: number;
}

interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
}

let writablePerson: Person = {
    name: "Person McPersonface",
    age: 42,
};

// works
let readonlyPerson: ReadonlyPerson;
readonlyPerson = writablePerson;

//console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
//console.log(readonlyPerson.age); // prints '43'


 abstract class FileSystemObject {
    isFile(): this is FileRep {
       return this instanceof  FileRep;
    }

    isDirectory(): this is Directory{
        return  this instanceof  Directory;
    }

    isNetworked(): this is Networked & this {
        return this.networked;
    }

    constructor(public path: string, private networked: boolean) {
    }
}


class FileRep extends FileSystemObject{
    constructor(path:string,public  content:string) {
        super(path,false);
    }
}

class Directory extends FileSystemObject{
    children: FileSystemObject [];
}

interface Networked{
    host:string;
}

const fso: FileSystemObject = new FileRep("foo/bar.txt","foo");

if(fso.isFile()){
    console.log(fso.content);
}else if(fso.isDirectory()){
    console.log(fso.children);
}else if (fso.isNetworked()) {
    console.log(fso.host);
}

abstract class A{
    content: string;
    constructor(content:string) {
        this.content = content;
    }
}

class B extends A{
    constructor(content:string) {
        super(content);
    }
}

function create(ctor:new (content: string) => A){
    const b = new ctor("H");
}

//create(B);




interface MyInterface {
    new (): Example;
}

class Example {

}

function makeObj<T>(ctor: {new():T}): T {
    return new ctor();
}

console.log(makeObj(Example))


function firstElement<T> (arr:T[]): T | undefined{
    return  arr[0];
}

const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);

console.log(s,n,u);

function longest<T extends { length: number }, U extends  {length: number}>(a: T, b: U): T | U {
    if (a.length >= b.length) {
        return a;
    } else {
        return b;
    }
}

class Obj{
    constructor(public length: number) {
        this.length = length;
    }
}

const ex = new Obj(16);

console.log(longest(ex,"145477777777777777777777777777777777777777777777"));





function add(a:string, b:string):string;

function add(a:number, b:number): number;


function add(a: any, b:any): any {
    return a + b;
}

add("Hello ", "Steve"); // returns "Hello Steve"
add(10, 20); // returns 30

function fn(x: string | number) {
    if (typeof x === "string") {
        // do something
    } else if (typeof x === "number") {
        // do something else
    } else {
        x; // has type 'never'!
    }
}

function identity<T>(arg:T): T[]{
    let x: Array<T> = [];
    x[0] = arg;
    return x;
}

let output = identity(new AModel("Synergy"));
console.log(output);

interface GenericIdentityFn<Type> {
    x: Type;
    (arg: Type): Type;
}

function identity1<Type>(arg: Type): Type {
    return arg;
}

let x: unknown = 8;

console.log((x as string).length);

let m = [0, 1,"",null];


class BasicCalculator {
    public constructor(protected value: number = 0) {}
    public currentValue(): number {
        return this.value;
    }
    public add(operand: number): this {
        this.value += operand;
        return this;
    }
    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }
    // ... other operations go here ...
}

let v = new BasicCalculator(2).multiply(5).add(1).currentValue();

interface Car {
    manufacturer: string;
    model: string;
    year: number;
}

let carProp: keyof Car;

interface Dictionary<T> {
    [key: string]: T | string;
}
// @ts-ignore
let f5: Record<{}, number>

type Di<T> = T | string;

let dirctionary: Dictionary<number> = {Name: 10};

let a = 5;

let keys: keyof Dictionary<number>;

let value: Dictionary<number>["foo"];


value = 85;
// ?? for what this

let obj8:Dictionary<number> = {"foo":8};

console.log(value);

