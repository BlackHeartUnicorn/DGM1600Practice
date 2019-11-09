import { people } from './people.js';
console.log(people)

let tableBody = document.querySelector("#Pilots tbody");

people.forEach(function (pilot) {
    var row = document.createElement("tr");
    var pilotCol = document.createElement("td");
    var starshipsCol = document.createElement("td");

    if (pilot.starships.length == 0) {
        starshipsCol.appendChild(document.createTextNode("N/A"));
    } else {
        var starships = [];
        var i;
        for(i = 0; i < pilot.starships.length; i++) {
            fetch(pilot.starships[i])
            .then(res => res.json())
            .then(res => {
                starships.push(res.name);
                starshipsCol.appendChild(document.createTextNode(starships));
            });
        }
    }

    pilotCol.appendChild(document.createTextNode(pilot.name));

    row.appendChild(pilotCol);
    row.appendChild(starshipsCol);

    tableBody.appendChild(row);
});

//using a returned async data. May need to add code somewhere...
let allSenators = []
const theData = getAPIData('senators.json').then(data => {
    allSenators = data.results[0].members
})

//rep/dem filter 
const republicans = allSenators.filter(senator => senator.party === 'R')
const demacrates = allSenators.filter(senator => senator.party === 'D')

console.log(republicans, demacrates)

const container = document.querySelector('.container')

function populateDOM(senatorArray) {
    let card = document.createElement('div')
    card.setAttribute('class')
}