//types
type heroi = {
    name: string;
    vulgo: string;
}

function printaObjeto(pessoa: heroi) {
    console.log(pessoa);
}

printaObjeto({
    name: "bruce wayne",
    vulgo: "batman",
});

// array multi types
let infos: (string | number)[] = ["sophya", 19];

// Tuplas 
let boleto: [string,number,number] = ["conta agua", 199.9, 9527421651];

function addToHello(name: string): string {
    return `Hello ${name}`;
}

function addNumber(x:number, y:number): number {
    return x + y;
}

let soma: number = addNumber (4, 7);
console.log(soma);
console.log(addToHello('Sophya'));


interface robot {
    id: number | string,
    name:string;
}

const bot: robot = {
    id: 1,
    name: "megaman"
};


//classes 
class Character {
    name: string;
    stregth: number;
    skill: number;

    constructor(name:string, stregth: number, skill: number) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.stregth} points`);
    }
}

//subclasses 

class Magician extends Character{
    magicPoints: number; 
    constructor(name:string, stregth: number, skill: number,magicPoints:number) {
        super(name,stregth,skill);
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character("Goku", 15 ,98);
const p2 = new Magician("Mago", 9, 30,100);
console.log(p1);
console.log(p2);

//generics
function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1,5], [3]);
const stgArray = concatArray<string[]>(["sophya", "goku"], ["vegeta"]);


//decorators
function apiVersion(version: string){
    return (target: any) => {
        Object.assign(target.prototype,{__version: version, __name:"sophya"});
    };
}

// attribute decorator 
function minLength(length:number) {
    return(target:any, key:string) => {
        let _value = target[key];

        const getter = () => _value;
        const setter = (value: string) =>{
            if (value.length < length) {
                throw new Error (`Tamanho menor do que ${length}`);
            } else {
                _value = value;
            }
        };

        Object.defineProperty(target,key, {
            get: getter,
            set: setter,
        });
    };
}

class Api {
    @minLength(3)
    name: string

    constructor(name:string){
        this.name = name;
    }
}

const api = new Api("usuários");
console.log(api.name);
