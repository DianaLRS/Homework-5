//Global Objects to style the HTML. 

//Get Elements: var targetDiv =$("#div")
//Create Elements var newDiv =$("<div>")
//Modify Elements: Text: targetDiv.text("HEllo!") or   Attributes: newDiv.attr("class", "fancy")
//Append Elements to HTML : targetDiv.append(newDiv)
// Getting the App to work: 

//Create Function 
//Run Function


//Insert Date in Jumbotron  ++ 
var currentDayEl = $("#currentDay");
var date = moment().format("MMM Do YY");
console.log(date)
currentDayEl.append(date)

//Insert elements into planner 

//grabbing the container
var container = $(".container");

for (var i = 0; i < 8; i++) {
    //making our elements
    var newRow = $("<div>");
    var smallCol = $("<div>");
    //  var bigCol = $("<div>");
    var saveButton = $("<button>");
    // var inputVal = $("<input>");
    var userInput = $("<input>");

    //adding rows and collumns
    $(newRow).addClass("row");
    $(smallCol).addClass("col-sm-2");
    $(smallCol).addClass("hour");
    //$(bigCol).addClass("col-sm-8");
    //$(bigCol).addClass("past");
    $(saveButton).addClass("saveBtn");
    //$(inputVal).addClass("place-holder");
    $(userInput).addClass("user-text");
    $(userInput).addClass("past");

    //add attributes and style:
    //bigCol.attr("style", "border: black;");
    saveButton.text("save");
    //inputVal.text("sample text");
    userInput.text("This is an example");


    //appending new elements

    container.append(newRow);
    newRow.append(smallCol);
    newRow.append(userInput);
    // newRow.append(bigCol);
    newRow.append(saveButton);


    // bigCol.append(inputVal);

}