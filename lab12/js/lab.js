// index.js - converts given name into individual ascii values, adds them together, and runs through a number multiplier to sort into house 0-3
// Author: Noah Walker
// Date: May 23, 2024

// Constants
let newHouses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw", "Grufflepuff", "Ravendor", "Slyffindor", "Ravenpuff", "Raverin", "Slytherpuff"];
// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function sumAsciiValues(inputString) {
    // Convert the string to an array of characters
    let characters = inputString.split('');
    // Calculate the sum of ASCII values
    let sum = characters.reduce((acc, char) => {
        // Convert each character to its ASCII value and add it to the accumulator
        return acc + char.charCodeAt(0);
    }, 0);
    sum = (sum * 9)%10;
    return sum;
}

// takes button click, calls value function, then sorts into respective house
$("#submit").click(function(){
    const userName = $("#user-name").val();
    let result = sumAsciiValues(userName);
    console.log(result);
    $("#output").html('<div class="text"><h2> You have been sorted into ' + newHouses[result] + "</h2></div>");
    switch(result){ //Flavor Text for Each House
        case 0: //Gryffindor
            $("#output").append('<div class="text"><h3>Gryffindor</h3><p>Values “bravery, daring, nerve, and chivalry.” Those sorted in this house are not always what you may think of as “brave” (they can be afraid), but they almost always will choose to do the right thing, despite consequences. They are the popular house and all the Potterheads want to be Gryffindor, even if they don’t necessarily belong.</p></div>');
            break;
        case 1: //Slytherin
            $("#output").append('<div class="text"><h3>Slytherin</h3><p> Values “ambition, cunning, and resourcefulness.” They are sly and clever in every way. They don’t need to be brash to get what they want. They are considered the bullies of Hogwarts and the general all around evil-doers. But there are tons of great Slytherin alumni. We just hear a whole lot about the bad ones.</p></div>');
            break;
        case 2: //Hufflepuff
            $("#output").append('<div class="text"><h3>Hufflepuff</h3><p></p>Values “hard work, dedication, patience, loyalty, and fair play.” They are generally kind-hearted, diligent, and reliable. But they are also the unpopular house and many Potterheads treat being sorted into Hufflepuff like being worse than getting kissed by a dementor.</div>');
            break;
        case 3: //Ravenclaw
            $("#output").append('<div class="text"><h3>Ravenclaw</h3><p>Values “intelligence, knowledge, and wit.” The nerds of Hogwarts, but in the best way. They don’t need a wand to disarm you. Their words will cut you to the bone. They are highly intelligent, resourceful, creative, and clever. They’re pretty cool and most Potterheads don’t mind being sorted into Ravenclaw</p></div>');
            break;
        case 4: //Grufflepuff
            $("#output").append('<div class="text"><h3>Grufflepuff (Gryffindor + Hufflepuff)</h3><p>Grufflepuffs are brave and courageous, and they use those traits to do good for others. They work hard, and are not afraid to speak their minds. They value honesty, goodness, kindness, and most of all, love. A Grufflepuff is the kind of person you want to be (and I’m not saying that because it’s my in-between house…I’m not close to perfect). They hold themselves to high standards and are just genuinely all around awesome people</p></div>');
            break;
        case 5: //Ravendor
            $("#output").append('<div class="text"><h3>Ravendor (Ravenclaw + Gryffindor)</h3><p>A Ravendor boldly goes where no one else goes intellectually. They are not afraid to debate philosophy and controversial matters, and as firm and confident as they are in themselves, they are also open minded and willing to learn. They are smart, but not intellectual snobs (though if they aren’t careful they may come off that way). They’ll help you with your homework, even if they have piles of their own. They are the most adept public speakers of the lot</p></div>');
            break;
        case 6: //Slyffindor
            $("#output").append('<div class="text"><h3>Slyffindor (Slytherin + Gryffindor)</h3><p>You’d think that Slyffindors are a constant battle for good and evil, but that is not always the case. They are ambitious, and not afraid to do what they have to do to get where they want to be. They are extraodinary business men and women, and are highly successful. Slyffindors are the definition of ambiverts. They have the charm and charisma that helps them get whatever they want, but they know just when and how to be quiet. And they like those moments of quiet. Sure, some Slyffindors are extremely torn between the darkness and the light, and they often have a very strong devil/angel on the shoulder thing going on in their heads, but a lot of them are really awesome.</p></div>');
            break;
        case 7: //Ravenpuff
            $("#output").append('<div class="text"><h3>Ravenpuff (Ravenclaw + Hufflepuff)</h3><p>These are the people that you see in the library studying at all hours of the day. They are determined to be the very best they can be at everything, whether it be art, music, school or sports. They are always pushing themselves, not to be better than anyone else, but to personally better themselves. Sometimes, they can go a little overboard in their pursuit for greatness, and they can get upset when things don’t go their way, but they are extraordinarily reliable and good at basically everything, so they are an excellent resource to keep around.</p></div>');
            break;
        case 8: //Raverin
            $("#output").append('<div class="text"><h3>Raverin (Ravenclaw + Slytherin)</h3><p>Don’t mess with a Raverin. Seriously. Don’t. They are not only intelligent, witty, and creative, but they are sly, ambitious, and can be very cutthroat. They know just how to kill you in the worst way possible and make it look like an accident. But they aren’t all bad. Sherlock Holmes would definitely be a Raverin, and he uses his sly intelligence to do good. Sure he may rub people the wrong way at times, but he genuinely is an awesome guy. But Moriarty would also be a Raverin. Let’s just say it is up to each Raverin to choose his or her path, and it is up to you to decide if your beef with a Raverin is really worth what they’ll give back to you if you decide to mess with them.</p></div>');
            break;
        case 9: //Slytherpuff
            $("#output").append('<div class="text"><h3>Slytherpuff (Hufflepuff + Slytherin)</h3><p>Slytherpuffs are the “good Slytherins,” if you will. They are ambitious and they have deeply rooted morals that keep them grounded. They use that resourcefulness and ambition to help others, do good things, and spread kindness. They would be the kind of people that start non-profits (if wizards have non-profits, that is). They are some of the best kind of people. I could definitely see them palling around with Grufflepuffs.</p></div>');
            break;
        default:
            throw new Error("Your house does not exist");
            break;
    };
    $("#output").append('<div class="text"><p><small>Descriptions Courtesy of iamjustdandi</small></p>');
});
  
  function main() {
    console.log("Main function started.");
    // the code that makes everything happen
  }
  
  // let's get this party started
  main();
  