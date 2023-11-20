'use strict'

//Array with Objects

const team = [
    {
        teamName: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        teamName: 'Angela Carroll',
        role: 'Chief Editor',
        image: 'angela-carroll-chief-editor.jpg'
    }
    ,
    {
        teamName: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    }
    ,
    {
        teamName: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    }
    ,
    {
        teamName: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    }
    ,
    {
        teamName: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
    ,
];

//Console Log for the array

console.log(team);
/*
Code for Posting the content of the array in the DOM(unfinished)

const paxName = document.querySelectorAll('.name');
const imageDoc = document.querySelectorAll('.img');
const roles = document.querySelectorAll('.role');
let i = 0
function cardFill() {
    for (i = 0; i <= team.length; i++) {
        paxName[i].append = team[i].teamName;
    }
}
*/


