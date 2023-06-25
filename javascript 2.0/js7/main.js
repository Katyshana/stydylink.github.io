class Phone {
    constructor(name, company, operatingSystem, screen, price, battery, color){
        this.name = name;
        this.company = company;
        this.operatingSystem = operatingSystem;
        this.screen = screen;
        this.price = price;
        this.battery = battery;
        this.color = color;

    }
    info(){
        return `${this.company} ${this.name} ${this.color}`
    }
    credit_month_4(){
        let credit_price = this.price * (4/100)
        let months = 4;
        let total_price = credit_price * months + this.price
        return `Загальна ціна після 4 рабових місяців кредиту - ${total_price} `
    }
    credit_month_12(){
        let credit_price = this.price * (5/100)
        let months = 12;
        let total_price = credit_price * months + this.price
        return `Загальна ціна після 12 рабових місяців кредиту - ${total_price} `
    }
    credit_month_6(){
        let credit_price = this.price * (6/100)
        let months = 6;
        let total_price = credit_price * months + this.price
        return `Загальна ціна після 6 рабових місяців кредиту - ${total_price} `
    }
}
let phone1 = new Phone("redmi10","Mi" ,"Android", 5 , 12000, 3000, 'blue' )

console.log(phone1.credit_month_12())

let phones = [phone1];
function addPhone(){
    let new_phone = new Phone(
        document.getElementById('name').value,
        document.getElementById('company').value,
        document.getElementById('operatingSystem').value,
        document.getElementById('screen').value,
        document.getElementById('price').value,
        document.getElementById('battery').value,
        document.getElementById('color').value
    )
        Phone.push(new_phone)
}

