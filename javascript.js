
let buttonColours = ["red","blue","green","yellow"];

let gamePattern = [];

let userClickedPattern = [];

let level = 0 ;




$(".btn").click(function(){      /* on click runs the function */
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userChosenColour);
    playSound(userChosenColour)
    animatePress(userChosenColour);
    
})

    function nextSequence(){  /* generates a new sequence */
        let randomNumber = Math.floor(Math.random()*4);
        let randomChosenColour = buttonColours[randomNumber];  
        gamePattern.push(randomChosenColour);
        $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
        playSound(randomChosenColour);
        level++;
        

    

};

    function playSound(name){
        var audio = new Audio("sounds/"+ name + ".mp3");
        audio.play();
}
    
    function animatePress(currentColour){
        $("."+currentColour).addClass("pressed")
        setTimeout(function(){
            $("."+currentColour).removeClass("pressed")
        },100);
    }

    $(document).keypress(function(){
        nextSequence();
        $("#level-title").text("Level "+ level);
    })
