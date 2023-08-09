/*
    ===== Código de TypeScript =====
*/
interface superHeroe {
    name: 'string',
    age:'number',
    adress: 'string',
    calle: 'string',
    pais: 'string',
    ciudad:'string',
    showAdres: ()=> string,  

}

const superHeroe: {
    name: 'Spiderman',
    age: 30,
    address: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};