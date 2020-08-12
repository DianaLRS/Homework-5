//Insert Date in Jumbotron  ++ 

var currentDayEl = $("#currentDay");
var date = moment().format('MMMM Do YYYY, h:mm:ss a')
//console.log(date)
currentDayEl.append(date)


//Insert elements into planner 

//grabbing the container
var container = $(".container");

// creating the variables

var currentHour = moment().format('HH')


//creating arrays 

var workingHours = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
var hourIdElement = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var buttonID = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];







for (var i = 0; i < hourIdElement.length; i++) {
    //making our elements
    var newRow = $("<div>"); // row
    var smallCol = $("<div>"); //. column 1
    var saveButton = $("<button>"); // column 2 
    var textarea = $("<textarea>"); // column 3


    //adding class by rows and collumns
    $(newRow).addClass("row");
    $(smallCol).addClass("col-sm-2");
    $(smallCol).addClass("hour");
    $(smallCol).addClass("time-block")
    $(saveButton).addClass("col-sm-2")
    $(saveButton).addClass("saveBtn");
    $(saveButton).addClass("i: hover")
    $(textarea).addClass("text");
    $(textarea).addClass("user-input")
    $(textarea).addClass("col-sm-8");
    // $(textarea).addClass("past");


    //adding id/values/types attributes

    $(textarea).attr("data-number", hourIdElement[i]);
    //console.log(hourIdElement[i]);
    $(saveButton).attr("type", "submit");
    $(saveButton).attr("data-index", buttonID[i])
    $(textarea).attr("id", "textarea-" + buttonID[i])





    //adding text attributes and style:
    saveButton.text("save");
    smallCol.text(workingHours[i]);
 


// step 1: get value from local storage based on buttonid[i]
//step 2: if value exists, apply to value of text area
// conditional 


// ===================================


function renderUserInput () {
var getValue = localStorage.getItem(buttonID[i]);
console.log(getValue)

if(getValue){
    console.log("works")
    textarea.text(getValue)
}


}


// -----------------------------------------


    //appending new elements
    container.append(newRow);
    newRow.append(smallCol);
    newRow.append(textarea);
    newRow.append(saveButton);


setHourResponse();
renderSaveButton();
renderUserInput();


}

// accessing CSS properties

function setHourResponse() {  // this works now


    if (currentHour < hourIdElement[i]) {
        //console.log(currentHour)
        $(textarea).addClass("future")
    } if (currentHour == hourIdElement[i]) {
        $(textarea).addClass("present")
        //console.log(currentHour)
    } if (currentHour > hourIdElement[i]) {
        $(textarea).addClass("past")

    }


};

//set the event listener to save input to local storage
function renderSaveButton() {



    $(saveButton).on("click", function () {
        event.preventDefault();
        var id = $(this).attr("data-index")
        var textareaSelector = $("#textarea-" + id)
        // console.log(textareaSelector)
        var currentValue = textareaSelector.val()
        console.log(currentValue)
        localStorage.setItem(id, currentValue);
        // console.log(localStorage)
      

    })
  

}











