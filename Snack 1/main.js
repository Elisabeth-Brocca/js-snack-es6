//Creare un array di oggetti


let bici = [
   {
    nome: 'Tom',
    peso: 30
   }
   ,{
    nome: 'jerry',
    peso: 39
   }
   ,{
    nome: 'Pippo',
    Peso: 32
   }
   ,{
    nome: 'Scobby',
    peso: 52
   }
   ,{
    nome: 'Papera',
    peso: 27
   }
   ,{
    nome: 'Madonna',
    peso: 40
   }
];

let biciMinore = bici[0];

for(let i = 1; i < bici.length; i++) {
    if (bici[i].peso < biciMinore.peso) {
       biciMinore = bici[i];
    };
};
console.log(biciMinore);