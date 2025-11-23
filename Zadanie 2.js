class Hero {
    constructor(name, health, armor) 
    {
        this.name = name;
        this.health = health;
        this.armor = armor;
        this.alive = true;
    }

    arenaGreeting() 
    {
        console.log(`A new player ${this.name} entered arena, Health: ${this.health}, Armor: ${this.armor}`);
    }

    heroAttacks(target) 
    {
        console.log(`${this.name} attacks ${target.name} and gives damage ${this.health}!`);
    }

    heroGotShot(damage) {
        this.health -= damage;
        if (this.health <= 0) 
        {
            console.log(`${this.name} is dead! Start again!`);
            this.alive = false;
        }
        else 
        {
            console.log(`${this.name} got shot, remaining health: ${this.health}`);
            this.alive = true;
        }
    }
}

class Warrior extends Hero {
    constructor(name, health, armor) {
        super(name, health, armor);
        this.extraShield = 400;
    }

    introduceWwarrior() {
        console.log(`Watch out, the boss is here! He has extra ${this.extraShield} shield!`);
    }

    warriorBlocks() {
        const extraShieldBeforeState = this.extraShield;
        this.extraShield += 15;
        const extraShieldDifference = this.extraShield - extraShieldBeforeState;
        console.log(`${this.name} blocks your attack! Activating extra shield recovery ${extraShieldBeforeState} + ${extraShieldDifference}`);
    }

    warriorGotShot(damage) {
        const damageCount = Math.max(1, damage - this.extraShield);
        console.log(`Extra shield got ${damage - damageCount} damage`);
        super.warriorGotShot(damageCount);
    }
}

console.log("Game starts, prepare for battle\n");

const warrior = new Warrior("C1000 Demolisher", 400, 50);
const hero = new Hero("Super Miszcz", 100, 100);

hero.arenaGreeting();
warrior.introduceWwarrior();

console.log(`\n${warrior.name} attacks first but missed, be careful! Fight!`);

warrior.warriorBlocks();
hero.heroAttacks(warrior);
hero.heroGotShot(40);
hero.heroGotShot(60);

console.log("\nGAME OVER CHRISTOPHER");