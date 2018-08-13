export class Mage {
    constructor(nom,pdv,pa,pm){
        this.nom = nom,
        this.point_vie = pdv,
        this.point_attaque = pa,
        this.point_mana = pm 
    }
    defense(){
        this.pa = this.pa * 0.5
        this.pdv = this.pdv * 2.5 
    }

    attaque(){
        this.pa = this.pa * 1.4 
        this.pdv = this.pdv * 0.75
    }
    
}