"use strict";

let experience = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let enemyHealth;
let inventory = ["kuriot(stick)"];

const shopButton = document.querySelector("#button1");
const forestButton = document.querySelector("#button2");
const fightButton = document.querySelector("#button3");
const interactiveText = document.querySelector("#text");
const experienceText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const enemyStats = document.querySelector("#enemyStats");
const enemyName = document.querySelector("#enemyName");
const enemyHealthText = document.querySelector("#enemyHealth");

//Initialize Buttons
shopButton.onclick = visitShop;
forestButton.onclick = goToForest;
fightButton.onclick = fightEnemy;

function goSeers(){
    shopButton.innerText = "Visit Supplies Shop";
    forestButton.innerText = "Go To Forest";
    fightButton.innerText = "Fight Enemy";

    
    shopButton.onclick = visitShop;
    forestButton.onclick = goToForest;
    fightButton.onclick = fightEnemy;

    interactiveText.innerText = "You visit the seers in their secret chambers. After you recover from the draining effects of journeying into the Seers Lair, Orkoiyot The Great approaches you...He exclaims! 'What You Seek You Will Not Find Here. The Threat Is Still Imminent, Go Find It Before It Finds Us. You Can Find Supplies In The Shop, Trouble & Peace In The Forest! You Alone Know The Path You Must Choose, Ultimate Nandi Warrior!'";
}

function visitShop(){
    shopButton.innerText = "Trade 10 Gold For 10 Health";
    forestButton.innerText = "Trade 30 Gold For A Weapon";
    fightButton.innerText = "Go See The Seers";

    
    shopButton.onclick = buyHealth;
    forestButton.onclick = buyWeapon;
    fightButton.onclick = goSeers;

    interactiveText.innerText = "You walk into the shop...What do you do next ?";
}

function goToForest(){
    console.log("You have decided to seek guidance in nature. You walk into the forest...");
}

function fightEnemy(){
    console.log("The time is now! destroy your enemy!")
}

function buyHealth(){

}

function buyWeapon(){

}