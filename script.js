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

const weapons = [
    {name: "kuriot(polished staff)", power: 5},
    {name: "kibos(dagger)", power: 30},
    {name: "chililen(spear)", power: 50},
    {name: "mecheita(sword)", power: 100}
];

const locations = [{
    name: "Seers Lair",
    "button text": ["Visit Supplies Shop", "Go To Forest", "Fight Enemy"],
    "button functions": [visitShop, goToForest, fightEnemy],
    text: "You visit the seers in their secret chambers. After you recover from the draining effects of journeying into the Seers Lair, Orkoiyot The Great approaches you...He exclaims! 'What You Seek You Will Not Find Here. The Threat Is Still Imminent, Go Find It Before It Finds Us. You Can Find Supplies In The Shop, Trouble & Peace In The Forest! You Alone Know The Path You Must Choose, Ultimate Nandi Warrior!'"
},
{
    name: "Supplies Shop",
    "button text": ["Trade 10 Gold For 10 Health", "Trade 30 Gold For A Weapon", "Go See The Seers"],
    "button functions": [buyHealth, buyWeapon, goSeers],
    text: "You walk into the shop...What do you do next ?"
},
{
    name: "Forest",
    "button text": ["Fight Livestock Rustler", "Fight Colonial Beast", "Go See The Seers"],
    "button functions": [fightRustler, fightColonialBeast, goSeers],
    text: "You decide to seek guidance in nature. You walk into the forest...After walking for some time you notice some tracks leading to a cluster of trees. You find a Rustler and a White Colonial Beast plotting. What do you do ?"
}
];

//Initialize Buttons
shopButton.onclick = visitShop;
forestButton.onclick = goToForest;
fightButton.onclick = fightEnemy;

function update(location){
    shopButton.innerText = location["button text"][0];
    forestButton.innerText = location["button text"][1];
    fightButton.innerText = location["button text"][2];

    
    shopButton.onclick = location["button functions"][0];
    forestButton.onclick = location["button functions"][1];
    fightButton.onclick = location["button functions"][2];

    interactiveText.innerText = location.text;
}

function goSeers(){
    update(locations[0]);
}

function visitShop(){
    update(locations[1]);
}

function goToForest(){
    update(locations[2]);
}

function fightEnemy(){
    console.log("The time is now! destroy your enemy!")
}

function buyHealth(){
    if(gold >= 10){
        gold = gold - 10;
        health = health + 10;

        goldText.innerText = gold;
        healthText.innerText = health;
    }
    else{
        interactiveText.innerText = "Supplies Master: I can't sell you this precious gift of health if you have no gold! Go find some gold to trade Mr. Ultimate Warrior.";
    }
}

function buyWeapon(){
    if(currentWeapon < weapons.length - 1){
        if(gold >= 30){
            gold = gold - 30;
            currentWeapon++

            goldText.innerText = gold;
            let newWeapon = weapons[currentWeapon].name;

            interactiveText.innerText = "You are now armed with " + newWeapon + ".";
            inventory.push(newWeapon);
            interactiveText = interactiveText + " In you inventory you currently have the following: " + inventory;
        }
        else{
            interactiveText.innerText = "Supplies Master: I can't sell you any weapon if you don't have enough gold! Go find some gold to trade Mr. Ultimate Warrior."
        }
    }
    else{
        interactiveText.innerText = "You already have a " + weapons[weapons.length - 1].name + ". This is the Ultimate Weapon for The Ultimate Warrior. Go destroy our enemies!";
    }
}

function fightRustler(){

}

function fightColonialBeast(){

}