// Select all button elements
var buttons = document.querySelectorAll(".drum");

// Loop through each button and add an event listener
for (var i = 0; i < buttons.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        this.style.color ="blue";
        var but = this. innerHTML;


        makesound(but);
        animaction(but);
    });

}

document.addEventListener("keypress",function(event){
    makesound(event.key);
    animaction(event.key);


  
});
    


function makesound(key){
    switch (key) {
        case "D":
            var tom1 = new Audio("/Drum Kit Starting Files/sounds/tom-1.mp3");
            tom1.play();
    
            
        break;
        case "R":
            var tom2 = new Audio("/Drum Kit Starting Files/sounds/tom-2.mp3");
            tom2.play();
    
            
        break;
        case "U":
            var tom3 = new Audio("/Drum Kit Starting Files/sounds/tom-3.mp3");
            tom3.play();
    
            
        break;
        case "M":
            var tom4 = new Audio("/Drum Kit Starting Files/sounds/tom-4.mp3");
            tom4.play();
    
            
        break;
        case "K":
            var crash = new Audio("/Drum Kit Starting Files/sounds/crash.mp3");
            crash.play();
    
            
        break;
        case "I":
            var kick = new Audio("/Drum Kit Starting Files/sounds/kick-bass.mp3");
            kick.play();
    
            
        break;
        case "T":
            var snare = new Audio("/Drum Kit Starting Files/sounds/snare.mp3");
            snare.play();
    
            
        break;
     
            
   

    
        default:
            console.log(but);
            break;
    }

}







function animaction(current){
    var button = document.querySelector("."+ current);
        button.classList.add("pressed");
        setTimeout(function(){
            button.classList.remove("pressed");
        },100);
    

}

