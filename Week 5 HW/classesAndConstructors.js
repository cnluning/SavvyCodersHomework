class scaryMonster {
    constructor (name, type, location) {
        this.name = name;
        this.type = type;
        this.location = location;
        this.bio = `${name} is a ${type} who lurks around ${location}!`;
    }
}

class spookyGhost extends scaryMonster {
    constructor (name, type, location, creepiness) {
        super(name, type, location);
        this.creepiness = creepiness;
    }
}

class evilDemon extends scaryMonster {
    constructor (name, type, location, wickedness) {
        super(name, type, location);
        this.wickedness = wickedness;
    }
}
