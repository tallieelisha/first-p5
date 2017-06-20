// Let's build some functions in p5.js

//Functions are like actions they make stuff happen 
//define a setup function
//canvas--> where to place eleents 
//Goal is to animate the tron bike 

// variable creates using var keyboard
//OUTSIDE DRAW FUNCTION 
//variables contatin values
//Assign values to variables with the equal sign 

var position = 100 
var speed= 3
function setup(){
    // call the creatVancas and background functions
    //Numbers Data type that is a number --> how wide and how tall
    createCanvas(800, 600)
    background(150)
}


function draw(){
    clear()
    fill(255)
    rect(position, 100, 150,60, 20)
    fill("dodgerblue")
    ellipse(position, 150, 75, 75)
    ellipse(position + 150, 150, 75, 75)
    fill(0)
    textSize(25)
    text("KWK", position+50,130)
    text("Tallie", position-15+150,158)
    position= position + speed
    if (position > 800)
    { speed = speed * -1
    }
    
    if (position < 100) 
    {speed*=-1}
    textSize(40)
    text("Position:" + position , 30, 30)
    
    textSize(40)
    text("Speed:" + speed , 30, 70)
    
   
}