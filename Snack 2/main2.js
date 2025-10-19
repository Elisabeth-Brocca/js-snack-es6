const squadraCalcio = [
    {
        nome: 'Milan',
        punti: 0,
        falli:0
    },
    {
        nome: 'Intern',
        punti: 0,
        falli:0
    },
    {
        nome: 'Lazio',
        punti: 0,
        falli:0
    },
    {
        nome: 'Cagliari',
        punti: 0,
        falli:0
    },
];

const falliNome = [];

for (let i = 0 ; i < squadraCalcio.length; i++){
    let message = document.getElementById("falli_ricevuti");
    
    squadraCalcio[i]["punti"] = Math.floor((Math.random() * 30) +1);
    squadraCalcio[i]["falli"] = Math.floor((Math.random() * 30) +1);

    let{nome, falli} = squadraCalcio[i];
    falliNome.push({nome, falli});

    message.innerHTML += `<li>Squadra: <strong>${nome}</strong> <br> Falli subiti: <strong>${falli}</strong></li>`;
};

console.log(falliNome);