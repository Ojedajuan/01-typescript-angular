
function addnumbers (a : number, b: number) {
    return a + b;
}
const addNumbersArrows =(a : number, b: number): string=>{
      return `${a + b}`;
}

function multiply (firstNumber: number, secondNumber?:number,base: number= 2){
    return firstNumber * base;
}


interface Character {
    name:String;
    hp:number;
    sHowHp :() => void ;
}

const healCharacter = (character: Character, amount:number  )=> {
    character.hp +=amount;
}
const trancos : Character ={
    name: 'Trancos',
    hp :50,
    sHowHp (){
        console.log (`Puntos de vida ${this.hp}`);
    }
}
trancos.sHowHp ();
healCharacter(trancos,10 );



//const result: number = addnumbers (1,5);
//const result2:string = addNumbersArrows(2,7);
//const multiplyResult:number = multiply (5);

//console.log ({result, result2, multiplyResult});



export{};