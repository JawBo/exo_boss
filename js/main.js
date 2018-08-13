import {Boss} from "./class/boss.js"
import {Guerrier} from "./class/guerrier.js"
import {Archer} from "./class/archer.js"
import {Mage} from "./class/mage.js"

// Création Mage
var mage = new Mage()
mage.nom = prompt("Quelle est votre nom de mage ?")
mage.pdv = prompt("Quelle est le nombre de PDV de votre mage? ")
mage.pa = prompt("Quelle est le nombre de PA de votre mage? ")
var tabMana = [7,9,11]
mage.tabMana = tabMana[Math.floor(Math.random()*(2-0+1)+0)]


// Création Guerrier
var guerrier = new Guerrier()
guerrier.nom = prompt("Quelle est votre nom de guerrier ?")
guerrier.pdv = prompt("Quelle est le nombre de PDV de votre guerrier? ")
guerrier.pa = prompt("Quelle est le nombre de PA de votre guerrier? ")


var archer = new Archer()
archer.nom = prompt("Quelle est votre nom de archer ?")
archer.pdv = prompt("Quelle est le nombre de PDV de votre archer?")
archer.pa = prompt("Quelle est le nombre de PA de votre archer")
var fleches = fleche[Math.floor(Math.random()*(11-7+1)+7)]