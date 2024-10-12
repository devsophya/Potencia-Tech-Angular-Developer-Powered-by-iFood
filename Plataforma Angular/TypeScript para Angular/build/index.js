"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function printaObjeto(pessoa) {
    console.log(pessoa);
}
printaObjeto({
    name: "bruce wayne",
    vulgo: "batman",
});
// array multi types
let infos = ["sophya", 19];
// Tuplas 
let boleto = ["conta agua", 199.9, 9527421651];
function addToHello(name) {
    return `Hello ${name}`;
}
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(4, 7);
console.log(soma);
console.log(addToHello('Sophya'));
const bot = {
    id: 1,
    name: "megaman"
};
//classes 
class Character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
//subclasses 
class Magician extends Character {
    constructor(name, stregth, skill, magicPoints) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character("Goku", 15, 98);
const p2 = new Magician("Mago", 9, 30, 100);
console.log(p1);
console.log(p2);
//generics
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["sophya", "goku"], ["vegeta"]);
//decorators
function apiVersion(version) {
    return (target) => {
        Object.assign(target.prototype, { __version: version, __name: "sophya" });
    };
}
// attribute decorator 
function minLength(length) {
    return (target, key) => {
        let _value = target[key];
        const getter = () => _value;
        const setter = (value) => {
            if (value.length < length) {
                throw new Error(`Tamanho menor do que ${length}`);
            }
            else {
                _value = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}
class Api {
    constructor(name) {
        this.name = name;
    }
}
__decorate([
    minLength(3)
], Api.prototype, "name", void 0);
const api = new Api("us");
console.log(api.name);
