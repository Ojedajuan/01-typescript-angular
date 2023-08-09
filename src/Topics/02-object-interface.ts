const skills:[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    Nombre : string;
    hp : number;
    skills : string[];
    hometown?: string;
}




const trancos:Character={
    Nombre:'Trancos',
    hp: 95,
    skills:['Bash','Counter'],

};

trancos.hometown = 'Ribendel';
console.table (trancos);

export{};