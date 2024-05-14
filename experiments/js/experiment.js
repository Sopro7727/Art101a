
$("#my-button").click(function(){ //Event listener
    var name = prompt("Name Please: "); //User Input and variable assignment
    if(name == null){   //checks if name was entered
        throw new Error('No name entered in input field'); //throws error when no name is entered
    }
    $('#title').html('Hello, ' + name + '!'); //Updates and displays new information
    //NOTE - No changes will appear if error is thrown
})