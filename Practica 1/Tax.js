import {Month} from './Month.js';
import {Discount} from './Discount.js';


export default class Tax {
    SEVENTY_YEARS_OLD=70
    dateOfPayment
    owner
    properties
    constructor(owner, properties, dateOfPayment) {
        this.owner= owner;
        this.properties= properties;
        this.dateOfPayment= dateOfPayment;
    }
    total(){
        let sum = 0;
        this.properties.map(item => sum += item.total());
        return (sum * (1-this.#getDiscount()));
    }
    #getDiscount() {
        let discount = Discount.WITHOUT;

        if (this.owner.age()>=this.SEVENTY_YEARS_OLD || this.owner.singleMother) {
            if ( (this.dateOfPayment.getMonth() + 1) <= Month.FEBRUARY )
                discount =  Discount.SEVENTY_PERCENT;
            else
                discount = Discount.FIFTY_PERCENT;
        }
        else if (this.dateOfPayment.month <= Month.FEBRUARY ) {
            discount = Discount.FORTY_PERCENT;
        }
        return discount;
    }

}

