




let pinNum = document.querySelector("input");
// console.log(pinNum.value)

function pinNumDisplay(){

    
    let displayBar = document.querySelector('.play-bar')
    displayBar.innerText = "";

    // for (let i = 0; i < 10; i++) {
    //     let press${i} = document.querySelector(`.btn${i}`).addEventListener('click', function(e){
    //         displayBar.innerText +="*"
    //     });
        
    // }

    let press1 = document.querySelector('.btn1').addEventListener('click', function (e) {
        displayBar.innerText +="*"
    })
    
    let press2 = document.querySelector('.btn2').addEventListener('click', function (e) {
        displayBar.innerText +="*"
    })
    
    let press3 = document.querySelector('.btn3').addEventListener('click', function (e) {
        displayBar.innerText +="*"
    })

    let press4 = document.querySelector('.btn4').addEventListener('click', function (e) {
        displayBar.innerText +="*"
    })

    let press5 = document.querySelector('.btn5').addEventListener('click', function (e) {
        displayBar.innerText +="*"
    })

    let press6 = document.querySelector('.btn6').addEventListener('click', function (e) {
        displayBar.innerText +="*"
    })

    let press7 = document.querySelector('.btn7').addEventListener('click', function (e) {
        displayBar.innerText +="*"
    })

    let press8 = document.querySelector('.btn8').addEventListener('click', function (e) {
        displayBar.innerText +="*"
    })

    let press9 = document.querySelector('.btn9').addEventListener('click', function (e) {
        displayBar.innerText +="*"
    })

    let press0 = document.querySelector('.btn0').addEventListener('click', function (e) {
        displayBar.innerText += "*" 
    })
}

pinNumDisplay();

class Account{
    constructor(fullname, balance =0, type, pin){
        this.fullname = fullname
        this.balance = balance
        this.type = type
        this.pin = pin
        this.accountNumber = Math.random()
        this.transaction = []
    }

    deposit(bal){
        this.balance += bal
        this.transaction.push(bal)
        console.log(this.fullname + " have deposited $" + this.transaction[this.transaction.length-1])
    }

    withdrawal(bal){

        this.transaction.push(bal)

        if(this.balance > bal){
            this.balance -= bal
        } else {
            console.log("You're too broke to get money.")
        }
        console.log("This is a Withdrawal of $" + this.transaction[this.transaction.length-1] + " by " + this.fullname)
    }

    transfer(receivingEnd, amountToSend) {
        if (this.balance > amountToSend) {
            this.withdrawal(amountToSend)
            receivingEnd.deposit(amountToSend)
        } else {
            console.log("You're too broke to get money.")
        }

    }

}

let ebere = new Account("Iweala Ebere", 1000, savings, 321262);

let dyana = new Account("Dyana", 0, spending, 291510);

let siuSing = new Account("Siu Sing", 1000, savings, 737737);

let kerin = new Account("Kerin", 2000, savings, 426350);


let amountInBank = Account.balance
console.log(amountInBank);

document.getElementById("enter").addEventListener()
//I will be testing for pin here and if it's right all things will show. 
if(displayBar.innerText.length===6 && displayBar.innerText === ebere.pin) {
    document.getElementById("wholeThingContainer").style.display = "block";

// all else comes here
    

    function checkBalance(){
        return amountInBank;
    }



} else {
    displayBar.innerText = "HAHHA WRONG PIN!"
}


