//this is a js doc

// var noun1 = $("#noun1").val();
// var adjective1 = $("#adjective1").val();
// var celebrity1 = $("#celebrity1").val();
var button = document.getElementById("makeStory");

var noun = document.getElementById("noun");
var noun1 = document.getElementById("noun1");
var noun2 = document.getElementById("noun2");

var verb = document.getElementById("verb");
var verb1 = document.getElementById("verb1");
var verb2 = document.getElementById("verb2");

var adjective = document.getElementById("adjective");
var adjective1 = document.getElementById("adjective1");
var adjective2 = document.getElementById("adjective2");
var pastTenseVerb = document.getElementById("pastTenseVerb");
var pastTenseVerb1 = document.getElementById("pastTenseVerb1");
var pastTenseVerb2 = document.getElementById("pastTenseVerb2");
var pastTenseVerb3 = document.getElementById("pastTenseVerb3");

var place = document.getElementById("place");
var adverb = document.getElementById("adverb");
var emotion = document.getElementById("emotion");

var story = document.getElementById("fairytale");

if(button){
  button.addEventListener('click', makeStory)
}


function makeStory() {
  console.log("button has been clicked");
  story.innerHTML = "Once upon a time there was a Prince who wanted to marry a " + noun.value + ". Only a real one would do. So he traveled through all the world to " + verb.value + " the " + noun.value + ", and everywhere things went wrong." +
                    " There were " + noun.value + "s aplenty, but how was he to know whether he found a real " + noun.value + "? There was something not quite right about them all." +
                    " So he came home again and was " + emotion.value + ", because he did so want to have a real " + noun.value + "." +
                    "<br />" + "<br />" + " One evening a " + adjective.value + " " + noun1.value + " blew up. It " + pastTenseVerb.value + " and " + pastTenseVerb1.value + " all night long. It was really " + adjective1.value + "!" +
                    " In the midst of it all they heard " + verb1.value + " at the door." +
                    " A " + noun.value + " was " + verb2.value + " outside and clamed to be a real " + noun.value + "." +
                    " The " + adjective2.value + " Queen was to find out whether this was indeed true. So she " + pastTenseVerb2.value + " to the " + place.value + " and placed a " + noun2.value + " under a 100 matresses on which the " + noun.value + " would sleep." +
                    "<br />" + "<br />" + " In the morning the Prince asked how the " + noun.value + " had slept..." +
                    " and they replied: " + adverb.value + "!!!" +
                    " And so they all knew that the " + noun.value + " was infact a real " + noun.value + " ." +
                    "<br />" + "<br />" + " The Prince and " + noun.value + " " + pastTenseVerb3.value + " and lived happily ever after.";


}

var testButton = document.getElementById("testButton");
var statement = document.getElementById("statement");
var example = document.getElementById("example");

if (testButton){
  testButton.addEventListener('click', tester)
}


function tester() {
  console.log("button clicked");
  statement.innerHTML = "Why did the " + example.value + " cross the road?" + "<br />" + "Now make a story!";
}

var firstTestButton = document.getElementById("firstTestButton");
var exampleStatement = document.getElementById("exampleStatement");
var firstExample = document.getElementById("firstExample");

if (firstTestButton) {
  firstTestButton.addEventListener('click', explanationExample)
}


function explanationExample() {
  console.log("clicking button");
  exampleStatement.innerHTML = "The " + firstExample.value + " jumps over the moon.";
}


var typed = $(".typed");

$(function() {
  typed.typed({
    strings: ["MAD LIBS.", "Create A Story."],
    typeSpeed: 100,
    loop: true,
  });
});
