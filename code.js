
function dice1 () {


    //Here we call variables to remember.
    //We ask for a random number within these variables to be remembered for later.
    //I'm a little lazy, so Gir gets a variable between 1 - 12 for his rolls, while the player gets to 
    //see both of their own dice rolls, both between 1 - 6, like the common die.


    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    var girrollsdice1 = Math.ceil(Math.random() * 12);

    //Here is where I grab the id from my <span></span> tags to use.
    //The reason why I use <span> in my html is because it doesn't mess up the page layout when I call it.
    //By grabbing the innerHTML, I am saying 'hey, grab whatever is <tag> INSIDE </tag> of a tagged id.
    //I could also use non-id items for this, but using an id makes things run so much smoother.
    
document.getElementById("GirRollsRes").innerHTML = girrollsdice1;
    document.getElementById("die1res").innerHTML = + die1;
    document.getElementById("die2res").innerHTML = + die2;

    //Belos, I then grab both the sum of both my dice variables. I ask the code to use addition
    // (num + num), in order to give me the total of those variables saved previously.
    //In the case of my gir roll, it doesn't require any math, as gir only has one 12-sided dice 
    //(we can pretend it's two 6-sided dice, though. I didn't think it would be necessary to give him more)

    var sum = die1 + die2;
    var girsum = girrollsdice1;

    document.getElementById("Sumres").innerHTML = sum;

    //Below, I use statements like if, else...if, and else.
    //These are pretty on the tin on what the purpose is for them.
    //If = if (X) happens, do (Y).
    //Else...if = Else if (Y) happens instead, do (X)
    //Else = If those two do not play, we instead say it will do (W)

    //What I am saying below is my win and lose conditions.
    //If the sum of the player's dice is greater than gir's roll, gir will lose.
    //If the player's dice roll is less than gir's roll, the player will lose.
    //If the player's roll is equal to gir's roll, it's a draw.
    //And if, potentially, the computer screws up, it will give a placeholder text.

    if (sum < girsum)
    {
        document.getElementById("FinalRes").innerHTML = "You lost!";
        document.getElementById("losegayme").play();
    }
    else if (sum > girsum)
    {
        document.getElementById("FinalRes").innerHTML = "You win!";
        document.getElementById("wingayme").play();
    }
    else if (sum == girsum)
    {
        document.getElementById("FinalRes").innerHTML = "It's a draw!";
        document.getElementById("itsdrawingtime").play();
    }
    else
    {

        document.getElementById("FinalRes").innerHTML = "Not sure what to tell you here!"
    }


}

//Below I start a function. A function is a way we can call a specific task to work in HTML. For the task below,
//I want my user's input to follow three rules:
//1) The full name (last name and first name) cannot exceed 20 letters in length.
//2)The full name cannot be less than 3 letters or remain blank.
//3) My user's zipcode may not exceed 5 numbers in length or go below that.
//otherwise, if they have the perfect length in all three input items, 
//we will send the user to the index page after displaying an alert that they entered the correct information.

function checksub()

{

    //These variables both help me in creating new names for my HTML items to better call them to the js document
    //and ALSO ask my javascript to remember them.


var name = document.getElementById("username").value;
var Lname = document.getElementById("username2").value;
var zip = document.getElementById("zipcode").value;

//Below I create a variable name FOR two of my variables combined. I ask that this variable
//both adds my name and my Lname together. Then I can grab the entire length of both those names 
//without having to type those two. I can just call forth my fullName to get the total length.
//If the length of the entire name is more than 20 letters, and less than 3, I have the script 
//take that previous id from my paragraph in the HTML and replace it's inner text via .innerHTML
//To replace its text from earlier (Please log in to view the site.) with "User name incorrect!".

var fullName = name+ " " + Lname;

    if (fullName.length > 20  || fullName.length < 3)
 {
   document.getElementById("loginstate").innerHTML = "User name incorrect!";
}

//Here, I say that, else, if the zipcode length is more than the number 99999, and less than 10000, I have the script 
//take that previous id from my paragraph in the HTML and replace it's inner text via .innerHTML
//To replace its text from earlier (Please log in to view the site.) with "Zipcode is incorrect!".

else if (zip > 99999 || zip < 10000)
{
    document.getElementById("loginstate").innerHTML = "Zipcode is incorrect!";
}

//Below, if the above two statements play and seem alright, we do something ELSE:
//The code will play an alert at the top of the page with a sentence saying the user answered correctly
//and we use location.replace to bring the user to the index page
//As taken from my notes: "Location.replace will ‘replace’ our web page with another page once conditions are met. 
//Replacing the page will disable the ability to go ‘back’ to the login page; no one really wants to use the back 
//button for that anyway (a work around could be a button on the index page linking back to a blank login, 
//but I did not want that)."

else 
{
   alert("Both name and zipcode are CORRECT! Welcome to the page.");
   location.replace("index.html");
}

}

//This function, linked to a button in my HTML, will, upon clicking the 'Yes!' button, play my music
//and also disable the 'Yes!' button and enable the 'No way!' button.
//I'm essentially asking that my javascript creates this sound every time the user clicks it, hence why I use 'Create element'.
//in my sound function!


function startMusic()
{

    //playMusic = new sound("SIUP.Kzwiener.DSWAD.mp3");
   // playMusic.play();
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("h1-diff").innerHTML = "Heck YEAH we love waffles!"
    intervalStart();

}

//The reason why I use (src) in my code is because, as seen above, my 'src' after my 'sound' is calling forth an 
//audio object from my files. 
//this.sound is asking for my script to Create a sound element.
//this.sound.src is asking my script to associate that element with whatever src i give to my sound().
//in this case, its an old music project I created for a platformer (because I didn't want to risk copyrights and use someones music)
//this.play is an action. I'm asking my script to use the function this.sound.play(), of which my script will
//create the audio element and associate that element with whatever i link to in the src of that element,
//and then will play that sound(src) element to its entirety.

//function sound(src)
//{
 //   this.sound = document.createElement("audio");
  //  this.sound.src = src;
  //  this.play = function() {this.sound.play();}
   // this.sound.volume = 0.1;
//}

//Below here, when a user selects "No way!" after it is made available to click, the page will refresh, shutting off the music
//bear in mind, though, that my music won't loop, hence why I never used simple drum beat audios I had created and instead used a whole 2 minute music file
//window.location is tell my script that I want it to focus on the page where the user is in currently.
// .reload(); then asks that script to reload the whole page, restarting any functions within the page.
//I'll have reload and the function above enabled for the music assignment, as otherwise users can just keep 
//playing the music over and over and it will overlap!!

function stopMusic()

{
   //window.location.reload();
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
     document.getElementById("h1-diff").innerHTML = "Awe :("
    intervalStop();
}


//Below is my interval, and where I get my images to move.
//on the html sheet, you probably noticed that i have 4 waffle images below the footer kind of stacked ontop eachother.
//all with slightly different ids.
//i'll explain how this works using just the first one
//grabbing my element by its id, i ask my script to remember it by giving it a name to easily call; 'flyimage'.
//I set my images display to true in the case it was set to false. set to true means users will get to see it. kind of on the tin.
//then i ask my script to remember another variable for me, but instead of getting an element, i ask it remember 
//a set number. I call this variable change.
//I set my intervalID but specifying what I want it to do. I want my image to travel, in the first images case
//from the bottom right to the top left.
//I take my flyimage variable, attach .style.right to tell my script that is the position i am specifying here
//and then i get my change variable, which is set to 100px originally, and ask that it add +5 px to its count.
//its a little more easier if you uncomment the alert to see what I mean if it's a little confusing. (note to myself here)
//so the image will start to both the bottom and the right, and with the change counting upwards til it hits 
//500 miliseconds (about half a whole second).

function intervalStart()
{
    //1
    var flyimage = document.getElementById("tinywaffleindex");
    flyimage.display = true;
    var change = 100;
    intervalID = setInterval(function()
    {
        flyimage.style.right = change+"px";
        //alert(change+"px");
        flyimage.style.bottom = change+"px";
        change +=5;
    },500);
//2
    var flyimage2 = document.getElementById("tinywaffleindex2");
    flyimage2.display = true;
    intervalID2 = setInterval(function()
    {
        flyimage2.style.left = change+"px";
        flyimage2.style.bottom = change+"px";
    },500);
//3
    var flyimage3 = document.getElementById("tinywaffleindex3");
    flyimage3.display = true;
    intervalID3 = setInterval(function()
    {
        flyimage3.style.left = change+"px";
        flyimage3.style.top = change+"px";
    },500);
//4
    var flyimage4 = document.getElementById("tinywaffleindex4");
    flyimage4.display = true;
    intervalID4 = setInterval(function()
    {
        flyimage4.style.right = change+"px";
        flyimage4.style.top = change+"px";
    },500);
    
}

//(note to self) If you feel silly and want to explore further why the timing is about half a second
//try changing that 500 to 20; those waffles are gonna zip across that screen!

//Below, I have a function here to stop my interval (hopefully, pausing it on the screen)
//When this is called, I want the script to clear my interval. This is pretty on the tin,
//But it just means it wil clear my start interval script until I call it again by pressing the button to do so.
//I failed to mention, but I have 4 intervalIDs above, ranging of 1-4, with 1 without a number
//If I had simply left them all as intervalID, it would not pause every single one of the images
//so I had to treat them as their own individual assets when it came to intervals

function intervalStop()
{
    //alert("clearedinterval");
    
        clearInterval(intervalID);

        clearInterval(intervalID2);

        clearInterval(intervalID3);

        clearInterval(intervalID4);




}

//Below I start a function. A function is a way we can call a specific task to work in HTML. For the task below,
//I want my javascript to check a user's input word to check if it is a palindrome.

function reverse()
{

//Here I grab my firststring id and give it the name os str1; this being a variable also
//asks my javascript to save and remember this.

    var str1 = document.getElementById("firststring").value;

    //Below here, I then create a new variable from the variable above.
    //This time I name is spStr1, and ask that it calls str1.split
    //what .split does is splits a string into an array of substrings
    //So what we are doing here is asking for whatever is in str1 (our user's input)
    //to become an array for us. So typing 'doggy' in the input will
    //cause it to become a string read like 'd,o,g,g,y' by the computer. Split up, see?

    var spStr1 = str1.split("");

//In the variable made down below, I ask to then use the variable above and now ask the javascript to reverse the input
//this will take our 'd,o,g,g,y' and turn it into 'y,g,g,o,d'.
  
    var reverse = spStr1.reverse();

   //THEN! I take the reverse variable from above! And ask the script to join 
   //the contents back together.
   //So our 'y,g,g,o,d' will turn into 'yggod'.
   //This step is pretty important. This is what we need in order to compare inputs
   //so the script and figure out what is and is not a palindrome!

    var jStr1 = reverse.join("");

//Below here is the part that brings it all together and allows the user to see
//the input they used was a palindrome or not.
//Here, I say that if my str1 is equal to my jStr1, then to continue with my if statement
//(str1 is essentially my 'doggy', jStr1 is essentially my 'yggod'; NOT a palindrome!)
//If the input happens to be a palindrome, such as 'kayak', itll display that is IS a palindrome
//as both str1 and jStr1 will be the same at the end and thus equal.

    if (str1 == jStr1)
{

//The palindrome text as shown below, taking our "palin" id from our <p> on the page.
//I also call the <audio> id I created for my 'win', and ask that if the word
//IS a palindrome, itll play a sound
//ATM the sound is a bit loud, but at least it plays! :)

document.getElementById("palin").innerHTML = "This is a palindrome."
document.getElementById("win").play();
}

//Here, I say that else if the word happens to not be a palindrome (such as str1 != jStr1)
//then the text in the "palin" id will change to display this to the user, and another sound called from the id on the HTML
//will play to signify that.

else {

    document.getElementById("palin").innerHTML = "This is NOT a palindrome."
    document.getElementById("lose").play();
}
}


//I thought the idea of making gir eat waffles via a cute button would be adorable!
//It took me SO long to get this right! If I included this in my github code, just know it's all in good fun! :)
//I don't plan for this to be for a grade; it's just a cute little addition i REALLY wanted, as a clicker game enthusiast.
//Since I couldn't figure out how to pause a gif and then play it, I use a short mp4 file; 
//it might slow the page down on older systems.

let buttoncounter = document.getElementById("buttoncounter");

//Above, I grab the button counter's ID from the html to identify just which button I want to use on the page. 

//let X = allows me to have the string called from the HTML document under a different name ('X')
//but because I like to keep it simple I leave the name buttoncounter. Otherwise I'd be confused eventually.

//I also use 'let' as it will allow me to modify it; if I used 'const', it would be a constant string, hence the name.


buttoncounter.addEventListener("click", function () {
  
  let numberwaffles = document.getElementById("numberwaffles");
  let result = Number(numberwaffles.innerHTML) + 1;
document.getElementById("feedinghimwaffles").play();
  numberwaffles.innerHTML = result;
});

//Every time our button is clicked, this code above should work its magic.

//innerHTML is used in JavaScript to obtain the text element from HTML elements
//I asked that numberwaffles.innertext is equal to whatever my result is according to the counter, with
//each click counting as +1.
//So in this, when I used <span> with the id of numberwaffles in my HTML page, I was making an id I could call and change the 
//<span id =""> INNERTEXT </span> of.

//I'll use this to change my waffle counter from '0' to any additional click by + 1.  I name this my result.

//addeventEventlistener allows our code to wait and actively 'listen' for its cue to run. 

//In this case, it waits for us to click the button in order to change our text.

//Also, the bit of string, number(outputText) lets our code know that this is a NUMBER. 
//Very important for a number counter!

document.getElementById('buttoncounter').onclick = function () {
  document.getElementById('Girwaffles').play();
};

//Above, I grab my button using its specific id and ask it to detect when I click inside that id container 
//using the piece of text '.onclick function', I ask it every time to treat me clicking that 'buttoncounter' as the next string below.
// Each time I click on a button with the marked id #buttoncounter, I want my video to play.
// So I grab my video id (Girwaffles) and attach .play(); in order to play the video on each detected click.
// So we can feed him waffles forever!



function logout() {
  location.replace("Loginpage.html")
}

  function hemadeyouWaffles(){
playvideo = new video("guesswhomadewaffles.mp4");

}

function video(src)
{
   this.video = document.createElement("video");
   this.video.src = src;
  this.play = function() {this.video.play();}
    this.video.volume = 0.08; 
    document.getElementById("p-linkdiff").innertext = this.play();
    
}

function wafflesong(){
    playsound = new waflesound("doyoulikewaffles.mp3");
}

function waflesound(src){

    this.waflesound = document.createElement("audio");
    this.waflesound.src = src;
   this.play = function() {this.waflesound.play();}
     this.waflesound.volume = 0.1; 
     document.getElementById("p-linkdiff").innertext = this.play();

}