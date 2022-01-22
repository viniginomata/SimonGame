
let buttonColours = ["red","blue","green","yellow"];

let gamePattern = [];

let userClickedPattern = [];

let started = false ; 
let level = 0 ;




$(".btn").click(function(){      /* on click runs the function */
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour)
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
    
})

    function nextSequence(){  /* generates a new sequence */
        let randomNumber = Math.floor(Math.random()*4);
        let randomChosenColour = buttonColours[randomNumber];  
        gamePattern.push(randomChosenColour);
        $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
        playSound(randomChosenColour);
        level++;
        userClickedPattern = [];
        $("#level-title").text("Level "+ level);
        

    

};

    function playSound(name){ /* sound function */
        var audio = new Audio("sounds/"+ name + ".mp3");
        audio.play();
}
    
    function animatePress(currentColour){ /* animation function */
        $("."+currentColour).addClass("pressed")
        setTimeout(function(){
            $("."+currentColour).removeClass("pressed")
        },100);
    }

    $(document).keypress(function(){ 
        if (!started){
            nextSequence();
            $("#level-title").text("Level "+ level);
            started=true;
            }
        });

    

    function checkAnswer(currentLevel){
        if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
            console.log("nice!")
        }
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
        else{
        
        }
        

    }