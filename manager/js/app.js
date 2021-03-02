var isItImportant = false;

function toggleImportant(){
    console.log('Got it');

    if(!isItImportant){
        $('#imp-star').removeClass('far').addClass('fas');
        isItImportant = true;
    } else{
        $('#imp-star').removeClass('fas').addClass('far');
        isItImportant = false;
    }
}

function saveTask(){
    // Capture input from form
    var titleTxt = $("#title").val();
    var dateTxt = $("#date").val();
    var statusTxt = $("#status").val();
    var locationTxt = $("#location").val();
    var taskInfoTxt = $("#taskInfo").val();
    var colorTxt = $("#colorInput").val();

    console.log(titleTxt ,dateTxt ,statusTxt ,locationTxt ,taskInfoTxt ,colorTxt);

}

function init(){
    console.log("Task Manager");

    // events
    $("#imp-star").click(toggleImportant);

    $("#save-btn").click(saveTask);
}

window.onload = init;

/*
Task
- Id 
- Title
- Date & time
- Imporant
- Status
- Location
- Color
- Description

*/