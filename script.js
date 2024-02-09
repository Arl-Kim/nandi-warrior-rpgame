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
const controls = document.querySelector("#controls");
const enemyStats = document.querySelector("#enemyStats");
const enemyName = document.querySelector("#enemyName");
const enemyHealthText = document.querySelector("#enemyHealth");

const weapons = [
    {name: "kuriot(polished staff)", power: 5},
    {name: "kibos(dagger)", power: 30},
    {name: "chililen(spear)", power: 50},
    {name: "mecheita(sword)", power: 100}
];

const enemies = [
    {name: "Rustler", level: 2, health: 15},
    {name: "Colonial Beast", level: 8, health: 60},
    {name: "Neo-Colonial Beast", level: 20, health: 300}
];

const locations = [
    {
        name: "Seers Lair",
        "button text": ["Visit Supplies Shop", "Go To Forest", "Fight Enemy"],
        "button functions": [visitShop, goToForest, fightUltimateEnemy],
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
    },
    {
        name: "Fighting Arena",
        "button text": ["Attack", "Dodge Enemy Attack", "Turn Your Back, Run!"],
        "button functions": [attackEnemy, dodgeAttack, goSeers],
        text: "The time is now! Destroy your enemy!"
    },
    {
        name: "Enemy Defeated",
        "button text": ["Link Up With The Seers", "Link Up With The Seers", "Link Up With The Seers"],
        "button functions": [goSeers, goSeers, goSeers],
        text: "Your enemy screams in pain as they depart this physical plane. You find some stolen gold in their possession. It's all yours! Your experience as a warrior has increased."
    },
    {
        name: "Lose Fight",
        "button text": ["Try Again ?", "Try Again ?", "Try Again ?"],
        "button functions": [restartGame, restartGame, restartGame],
        text: "You die. &#x2620"
    },
    {
        name: "Win The Struggle",
        "button text": ["Play Again ?", "Play Again ?", "Play Again ?"],
        "button functions": [restartGame, restartGame, restartGame],
        text: "Orkoiyot The Great: You have destroyed Our Ultimate Enemy!, Neo-Colonialism. I have watched a thousand times and more, this vile  beast wrapping chains around our children, an enslaver of our people in the future, so evil... Through your sacrifice and valor, you have freed all Nandindets and All Alkebulanis of Alkebulan As One! The Greatest Land On The Earth! &#x1F389"
    }
];

//Initialize Buttons
shopButton.onclick = visitShop;
forestButton.onclick = goToForest;
fightButton.onclick = fightUltimateEnemy;

function update(location){
    enemyStats.style.display = "none";
    shopButton.innerText = location["button text"][0];
    forestButton.innerText = location["button text"][1];
    fightButton.innerText = location["button text"][2];

    
    shopButton.onclick = location["button functions"][0];
    forestButton.onclick = location["button functions"][1];
    fightButton.onclick = location["button functions"][2];

    interactiveText.innerHTML = location.text;
}

function goSeers(){
    controls.style.borderBottomLeftRadius = "10px";
    controls.style.borderBottomRightRadius = "10px";
    update(locations[0]);
}

function visitShop(){
    update(locations[1]);
}

function goToForest(){
    update(locations[2]);
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
            interactiveText.innerText = interactiveText.innerText + " In your inventory you currently have the following: " + inventory.join(", ");
        }
        else{
            interactiveText.innerText = "Supplies Master: I can't sell you any weapon if you don't have enough gold! Go find some gold to trade Mr. Ultimate Warrior."
        }
    }
    else{
        interactiveText.innerText = "You already have a " + weapons[weapons.length - 1].name + ". This is the Ultimate Weapon for The Ultimate Warrior. Go destroy our enemies!";
        forestButton.innerText = "Trade Your Weapon For 15 Gold";
        forestButton.onclick = tradeWeapon;
    }
}

function tradeWeapon(){
    if(inventory.length > 1){
        gold = gold + 15;
        goldText.innerText = gold;

        let currentWeapon = inventory.shift() //Removes element at index 0 in inventory and initializes new var
        interactiveText.innerText = "You have traded your " + currentWeapon + " for 15 gold."
        interactiveText.innerText = interactiveText.innerText + " In you inventory you currently have the following: " + inventory.join(", ");
    }
    else{
        interactiveText.innerText = "Supplies Master: This is the only weapon you have ? No! I can't accept it. You need it to defend all of us...";
    }
}

function fightRustler(){
    fighting = 0;
    startFight();
}

function fightColonialBeast(){
    fighting = 1;
    startFight();
}

function fightUltimateEnemy(){
    fighting = 2;
    startFight();
}

function startFight(){
    update(locations[3]);
    enemyHealth = enemies[fighting].health;
    controls.style.borderBottomLeftRadius = "0px";
    controls.style.borderBottomRightRadius = "0px";
    enemyStats.style.display = "block";
    enemyName.innerText = enemies[fighting].name;
    enemyHealthText.innerText = enemyHealth;
}

function attackEnemy(){
    interactiveText.innerText = "The vile " + enemies[fighting].name + " makes a move towards you and attacks.";
    interactiveText.innerText = interactiveText.innerText + " You counter the attack with your " + weapons[currentWeapon].name + ".";
    health = health - getEnemyAttackValue(enemies[fighting].level);
    enemyHealth = enemyHealth - (weapons[currentWeapon].power + Math.floor(Math.random() * experience) + 1);
    healthText.innerText = health;
    enemyHealthText.innerText = enemyHealth;

    if(health <= 0){
        loseFight();
    }
    else if(enemyHealth <= 0){
        if(fighting === 2){
            winGame();
        }
        else{
            destroyEnemy();
        }
    }
}

function getEnemyAttackValue(level){
    const enemyHit = (level * 5) - (Math.floor(Math.random() * experience)); //sets the enemy's attack to five times their level minus a random number between 0 and the player's experience.

    console.log(enemyHit) //for debugging only

    return enemyHit;
}

function dodgeAttack(){
    interactiveText.innerText = "Your dodging skills are top level, the vile  " + enemies[fighting].name + " misses!";

}

function destroyEnemy(){
    gold = gold + Math.floor(enemies[fighting].level * 6.7);
    experience = experience + enemies[fighting].level;
    goldText.innerText = gold;
    experienceText.innerText = experience;
    update(locations[4]);
}

function loseFight(){
    update(locations[5]);
}

function winGame(){
    update(locations[6]);
}

function restartGame(){
    experience = 0;
    health = 100;
    gold = 50;
    currentWeapon = 0;
    inventory = ["kuriot(stick)"];

    experienceText.innerText = experience;
    healthText.innerText = health;
    goldText.innerText = gold;

    goSeers();
}