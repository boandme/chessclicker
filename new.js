var money = 0;
var amt = 1
var automoney = 1
level = 1
var autoclick = false;
currentCCrewards = 10
currentCSrewards = 5
console.log("Logging");
function clickpawn(){
    money+= amt
    document.getElementById("mony").innerText = money
};


function up1(){
    if (money >= 75) {
        money -= 75
        amt ++;
        document.getElementById("mony").innerText = money
    }
    
}
function up2() {
    if (money >= 150) {
        money -= 150;
        document.getElementById("mony").innerText = money;
        setInterval(increment, 1000)
        automoney ++;
        

    };
}

    
    


function increment() {
    money += 1;
    document.getElementById("mony").innerText = money;
};

function up3() {
    if (money >= level * 1000) {
        money -= 20;
        amt += currentCCrewards
        for (var i = 0; i<currentCSrewards;i++){
            setInterval(increment, 1000)
        }
        currentCCrewards *= 5
        currentCSrewards *=5 
        level ++;
        document.getElementById("up3cost").innerText = level * 1000;
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
