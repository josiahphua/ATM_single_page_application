[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

## ATM Task

In the last few days, we have studied DOM using Vanilla JavaScript and JQuery. We learnt selecting element on the HTML can be as simple as:


|JavaScript | JQuery |
|-----------|--------|
|`document.querySelector("selector")`| `$(selector)`|

### Task Description.

Mr. Ebere has decided to visit Al Rajhi Bank ATM to witdrawal some money. He should have SGD 1000 in his account but he would like to perform the following transactions:

1. Enter PIN and only pass if PIN is correct.
1. Check his balance.
1. If he has enough money, he would like to witdraw SGD 9000 to buy a new iPhone.
1. Dyana asks him for 500 SGD so he tries to take out another 500 SGD
1. Siu Sing comes and asks for 400 SGD to go to corniche on Thursday to eat the most delicious pasta in the world. So Ebere should withdraw 400 SGD.
1. Kerin comes and asks for 300 SGD but now Ebere should have 100 SGD left and the ATM should show `insufficient balance`

### Screenshots
Login Screen
![](img/1.png)
Dashboard Screen
![](img/2.png)
Withdrawal Screen
![](img/3.png)
Deposit Screen
![](img/4.png)
View Balance Screen
![](img/5.png)

### Helpers
#### JQuery
1. `$("selector").hide()`
1. `$("selector").show()`


#### JavaScript
1. `document.querySelector("selector").style.display = "none" //hide`
1. `document.querySelector("selector").style.display = "block" //show`
1. `parseInt(string, 10)`
