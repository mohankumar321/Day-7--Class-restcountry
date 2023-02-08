// Q.No.1 Write a “person” class to hold all the details.

function Person() {
    this.firstName = "unknown";
    this.lastName = "unknown";
    this.age ="unknown";
    this.gender ="unknown";
    this.experience="unknown";
}

var person1 = new Person();
person1.firstName = "Mohan";
person1.lastName = "Kumar";
person1.age ="25";
person1.gender ="Male";
person1.experience="1 Year"
            
alert(person1.firstName + " " + person1.lastName);

// Q.No.2 write a class to calculate the uber price.

var convertCurrencyToNumber = function(value, currency){
    if ( typeof value !== 'string' ){
        return 0.00;
    }
    if ( typeof currency === 'undefined' || currency === '' ){
        currency = 'MYR';
    }
    value = value.trim();
    if ( value === currency + 'NaN' ){
        return 0.00;
    }
    return parseFloat(value.replace(currency, '' ));
};
