import Zone from './Zone.js';
import Person from './Person.js';
import Property from './Property.js';
import Tax from './Tax.js';

let person = new Person();
person.fullName="Marisol Hurtado";
person.dateOfBirth = new Date("1974/12/07");
person.genre="M"
person.singleMother=true;

let zoneUrban = new Zone("URB","URBANA",8.00);
let zoneRes= new Zone("RES","RESIDENCIAL",20.00)

let property1 =  new Property(person,zoneUrban,5000.00);
let property2 =  new Property(person,zoneRes,2000.00);

let tax = new Tax();
tax.dateOfPayment = new Date();
tax.owner=person
tax.properties= [property1, property2];
console.log(person.fullName + " debe pagar a elektra: " + tax.total())