var money = 0;
var amt_per_click = 1
level = 1
var autoclick = false;
currentCCrewards = 10
currentCSrewards = 5
var current_price = 500
console.log("Logging");
function clickpawn(){
    money+= amt_per_click
    document.getElementById("mony").innerText = money
};


function up1(){
    if (money >= 75) {
        money -= 75
        amt_per_click ++;
        document.getElementById("mony").innerText = money
    }
    
}
function up2() {
    if (money >= 150) {
        money -= 150;
        document.getElementById("mony").innerText = money;
        setInterval(increment, 1000)
    
        

    };
}

    
    


function increment() {
    money += 1;
    document.getElementById("mony").innerText = money;
};

function up3() {
    if (money >= current_price) {
        money -= 20;
        amt_per_click += currentCCrewards
        for (var i = 0; i<currentCSrewards;i++){
            setInterval(increment, 1000)
        }
        currentCCrewards *= 5
        currentCSrewards *=5 
        level ++;
        current_price *=4
        // Update text &image 
        document.getElementById("up3cost").innerText = current_price;
        document.getElementById("up3rewards").innerText =  String(currentCCrewards).concat(" c/c, +", String(currentCSrewards), " c/s")
        if (level == 2) {
            document.getElementById("pawn").id = "knight";
        }
        else if (level == 3) {
            document.getElementById("knight").id = "bishop";
        }
        else if (level == 4) {
            document.getElementById("bishop").id = "rook"
        }
        else if (level == 5) {
            document.getElementById("rook").id = "queen"
        }
        else if (level >=6) {
            document.getElementById("queen").id = "king"
        }
         
       
        console.log(currentCCrewards.concat(" c/c, +", currentCSrewards, " c/s"))
        
    };

};
function up4() {
    if (money > 5000) {
        money -= 5000
        amt_per_click += 10
    }
}
