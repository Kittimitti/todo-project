$( document ).ready(function() {



function getAddButton () {
    let addButton = document.getElementById("adding-button");
    addButton.addEventListener("click", addTodo);
}

getAddButton();


function onPressEnter () {
    let input = document.getElementById("todo-adding");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTodo();
        }
    })
}

onPressEnter();


function getInputValue () {
    let input = document.getElementById("todo-adding");
    return input.value;
}



//----------------------------------------------------------------CREATING ELEMENTS---------------------------------------------------------

function createTodoItem () {
    let todoItem = document.createElement("li");
    todoItem.setAttribute("class", "todo-item");
    return todoItem;
}


function createTodoItemContainer () {
    let todoItemContainer = document.createElement("div");
    todoItemContainer.setAttribute("class", "todo-item-container");
    return todoItemContainer;
}


function createTodoTextContainer () {
    let todoTextContainer = document.createElement("div");
    todoTextContainer.setAttribute("class", "todo-text-container");
    return todoTextContainer;
}


function createTodoText () {
    let todoText = document.createElement("div");
    todoText.setAttribute("class", "todo-text");
    return todoText;
}


function createHeartIcon () {
    let heartIcon = document.createElement("i");
    heartIcon.setAttribute("class", "fas fa-heart heart-icon");
    return heartIcon;
}


function createTodoTextP () {
    let todoTextP = document.createElement("p");
    return todoTextP;
}


function createSaveCancelContainer () {
    let saveCancelContainer = document.createElement("div");
    saveCancelContainer.setAttribute("class", "save-cancel-container");
    return saveCancelContainer;
}


function createSaveButton () {
    let saveButton = document.createElement("button");
    saveButton.textContent = "save";
    saveButton.setAttribute("class", "save-button");
    saveButton.classList.add("is-hidden");
    saveButton.addEventListener("click", saveTextChanges);
    return saveButton;
}

function createCancelButton () {
    let cancelButton = document.createElement("button");
    cancelButton.textContent = "cancel";
    cancelButton.setAttribute("class", "cancel-button");
    cancelButton.classList.add("is-hidden");
    cancelButton.addEventListener("click", cancelTextChanges);
    return cancelButton;
}



function createTodoAttribute () {
    let todoAttribute = document.createElement("div");
    todoAttribute.setAttribute("class", "todo-attribute");
    return todoAttribute;
}


function createDate (currentDate) {
    let date = document.createElement("p");
    date.textContent = currentDate;
    date.setAttribute("class", "datepicker");
    return date;
}

function showTodaysDate () {
    let todaysDate = new Date();
    return todaysDate.getDate() + ". " + (todaysDate.getMonth()+1) + ". " + todaysDate.getFullYear();
}


function createPriority (givingPriority) {
    let priority = document.createElement("p");
    priority.textContent = givingPriority;
    priority.setAttribute("class", "piority");
    priority.classList.add("is-hidden");
    return priority;
}


function createDeleteContainer () {
    let deleteContainer = document.createElement("div");
    deleteContainer.setAttribute("class", "delete-container");
    deleteContainer.classList.add("is-hidden");
    return deleteContainer;
}

function createDeleteQuestion () {
    let deleteQuestion = document.createElement("p");
    deleteQuestion.textContent = "Are you sure you want to delete?";
    deleteQuestion.setAttribute("class", "delete-question");
    return deleteQuestion;
}

function createDeleteAnswerButtonsContainer () {
    let deleteAnswerButtonsContainer = document.createElement("div");
    deleteAnswerButtonsContainer.setAttribute("class", "delete-answer-buttons-container");
    return deleteAnswerButtonsContainer;
}

function createDeleteYesButton () {
    let deleteYesButton = document.createElement("button");
    deleteYesButton.textContent = "yes";
    deleteYesButton.setAttribute("class", "delete-yes");
    deleteYesButton.addEventListener("click", deleteYes);
    return deleteYesButton;
}

function createDeleteNoButton () {
    let deleteNoButton = document.createElement("button");
    deleteNoButton.textContent = "no";
    deleteNoButton.setAttribute("class", "delete-no");
    deleteNoButton.addEventListener("click", deleteNo);
    return deleteNoButton;
}


function createIconContainer () {
    let iconContainer = document.createElement("div");
    iconContainer.setAttribute("class", "icon-container");
    return iconContainer;
}

function createArrowButton () {
    let arrowButton = document.createElement("button");
    arrowButton.setAttribute("class", "arrow");
    arrowButton.addEventListener("click", addFiveIcons);
    return arrowButton;
}

function createPencilButton () {
    let pencilButton = document.createElement("button");
    pencilButton.setAttribute("class", "pencil");
    pencilButton.classList.add("is-hidden");
    pencilButton.addEventListener("click", editTodoTextP);
    return pencilButton;
}

function createCalendarButton () {
    let calendarButton = document.createElement("button");
    calendarButton.setAttribute("class", "calendar");
    calendarButton.classList.add("is-hidden");
    //calendarButton.addEventListener("click", editDate);
    return calendarButton;
}

function createExclamationButton () {
    let exclamationButton = document.createElement("button");
    exclamationButton.setAttribute("class", "exclamation");
    exclamationButton.classList.add("is-hidden");
    exclamationButton.addEventListener("click", givePriority);
    return exclamationButton;
}

function createTrashButton () {
    let trashButton = document.createElement("button");
    trashButton.setAttribute("class", "trash");
    trashButton.classList.add("is-hidden");
    trashButton.addEventListener("click", deleteTodo);
    return trashButton;
}

function createCheckButton () {
    let checkButton = document.createElement("button");
    checkButton.setAttribute("class", "check");
    checkButton.classList.add("is-hidden");
    checkButton.addEventListener("click", todoDone);
    return checkButton;
}


function createTrashButtonAfterCheck () {
    let trashButtonAfterCheck = document.createElement("button");
    trashButtonAfterCheck.setAttribute("class", "trash");
    trashButtonAfterCheck.classList.add("is-hidden");
    trashButtonAfterCheck.addEventListener("click", deleteTodo);
    return trashButtonAfterCheck;
}



function createArrowIcon () {
    let arrowIcon = document.createElement("i");
    arrowIcon.setAttribute("class", "fas fa-arrow-circle-right arrow-icon");
    return arrowIcon;
}


function createPencilIcon () {
    let pencilIcon = document.createElement("i");
    pencilIcon.setAttribute("class", "fas fa-pencil-alt pencil-icon");
    return pencilIcon;
}


function createCalendarIcon () {
    let calendarIcon = document.createElement("i");
    calendarIcon.setAttribute("class", "far fa-calendar-alt calendar-icon");
    return calendarIcon;
}


function createExclamationIcon () {
    let exclamationIcon = document.createElement("i");
    exclamationIcon.setAttribute("class", "fas fa-exclamation exclamation-icon");
    return exclamationIcon;
}

function createTrashIcon () {
    let trashIcon = document.createElement("i");
    trashIcon.setAttribute("class", "fas fa-trash-alt trash-icon");
    return trashIcon;    
}

function createCheckIcon () {
    let checkIcon = document.createElement("i");
    checkIcon.setAttribute("class", "far fa-check-square check-icon");
    return checkIcon;    
}

function createTrashIconAfterCheck () {
    let trashIconAfterCheck = document.createElement("i");
    trashIconAfterCheck.setAttribute("class", "fas fa-trash-alt trash-icon");
    return trashIconAfterCheck;    
}





//----------------------------------------------------------------APPENDING ELEMENTS---------------------------------------------------------

function addTodo () {
    let todoListUl = document.getElementById("todo-lists-ul");
    let warning = document.getElementById("warning-empty");

    if (getInputValue() === "") {
        warning.textContent = "Please enter a todo item!";
    } 
    else {
        let todoTextP = createTodoTextP();
        todoTextP.textContent = getInputValue();

        let todoItem = createTodoItem();
        let todoItemContainer = createTodoItemContainer();
        let todoTextContainer = createTodoTextContainer();
        let iconContainer = createIconContainer();
        let todoText = createTodoText();
        let saveCancelContainer = createSaveCancelContainer();
        let todoAttribute = createTodoAttribute();
        let deleteContainer = createDeleteContainer();
        let deleteAnswerButtonsContainer = createDeleteAnswerButtonsContainer();

        let arrowButton = createArrowButton();
        let pencilButton = createPencilButton();
        let calendarButton = createCalendarButton();
        let exclamationButton = createExclamationButton();
        let trashButton = createTrashButton();
        let checkButton = createCheckButton();
        let trashButtonAfterCheck = createTrashButtonAfterCheck();

        let dateInput = createInputDate();


        todoListUl.insertBefore(todoItem, todoListUl.firstElementChild);
        todoItem.appendChild(todoItemContainer);
        todoItemContainer.appendChild(todoTextContainer);
        todoItemContainer.appendChild(iconContainer);

        todoTextContainer.appendChild(todoText);
        todoTextContainer.appendChild(saveCancelContainer);
        todoTextContainer.appendChild(todoAttribute);
        todoTextContainer.appendChild(deleteContainer);

        todoText.appendChild(createHeartIcon());
        todoText.appendChild(todoTextP);

        saveCancelContainer.appendChild(createSaveButton());
        saveCancelContainer.appendChild(createCancelButton());
        
        todoAttribute.appendChild(createDate(showTodaysDate()));
        //Date.now() gives the time in milliseconds, on which the todo-s can be sorted
        todoAttribute.setAttribute("data-timestamp", Date.now());
        
        todoAttribute.appendChild(createPriority("priority"));
        todoAttribute.appendChild(dateInput);
        
        deleteContainer.appendChild(createDeleteQuestion());
        deleteContainer.appendChild(deleteAnswerButtonsContainer);
        deleteAnswerButtonsContainer.appendChild(createDeleteYesButton());
        deleteAnswerButtonsContainer.appendChild(createDeleteNoButton());

        iconContainer.appendChild(arrowButton);
        iconContainer.appendChild(pencilButton);
        iconContainer.appendChild(calendarButton);
        $(calendarButton).click(function(event) {
            hideFiveIcons(event.currentTarget);

            $(dateInput).datepicker({
                dateFormat: 'dd. mm. yy',
                inline: true,
                firstDay: 1,
                showOtherMonths: true,
                dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                onSelect: updateDate
            });
            $(dateInput).datepicker("show");
        });

        iconContainer.appendChild(exclamationButton);
        iconContainer.appendChild(trashButton);
        iconContainer.appendChild(checkButton);
        iconContainer.appendChild(trashButtonAfterCheck);

        arrowButton.appendChild(createArrowIcon());
        pencilButton.appendChild(createPencilIcon());
        calendarButton.appendChild(createCalendarIcon());
        exclamationButton.appendChild(createExclamationIcon());
        trashButton.appendChild(createTrashIcon());
        checkButton.appendChild(createCheckIcon());
        trashButtonAfterCheck.appendChild(createTrashIconAfterCheck());

    
        warning.textContent = "";
    }

    clearInputField();
}


function clearInputField () {
    document.getElementById("todo-adding").value = "";
}





//---------------------------------------------------------------------------FUNCTIONALITY ON ICONS-----------------------------------------

//showing additional 5 icons(buttons) when the arrow icon is clicked
function addFiveIcons (event) {
    let arrowButton = event.currentTarget;

    if (arrowButton.parentNode.children[1].classList.contains("is-hidden") === true &&
        arrowButton.parentNode.children[2].classList.contains("is-hidden") === true &&
        arrowButton.parentNode.children[3].classList.contains("is-hidden") === true &&
        arrowButton.parentNode.children[4].classList.contains("is-hidden") === true &&
        arrowButton.parentNode.children[5].classList.contains("is-hidden") === true) {

            arrowButton.parentNode.children[1].classList.remove("is-hidden");
            arrowButton.parentNode.children[2].classList.remove("is-hidden");
            arrowButton.parentNode.children[3].classList.remove("is-hidden");
            arrowButton.parentNode.children[4].classList.remove("is-hidden");
            arrowButton.parentNode.children[5].classList.remove("is-hidden");
    }

    else if (arrowButton.parentNode.children[1].classList.contains("is-hidden") === false &&
            arrowButton.parentNode.children[2].classList.contains("is-hidden") === false &&
            arrowButton.parentNode.children[3].classList.contains("is-hidden") === false &&
            arrowButton.parentNode.children[4].classList.contains("is-hidden") === false &&
            arrowButton.parentNode.children[5].classList.contains("is-hidden") === false) {

                arrowButton.parentNode.children[1].classList.add("is-hidden");
                arrowButton.parentNode.children[2].classList.add("is-hidden");
                arrowButton.parentNode.children[3].classList.add("is-hidden");
                arrowButton.parentNode.children[4].classList.add("is-hidden");
                arrowButton.parentNode.children[5].classList.add("is-hidden");
            }
    
}





//show-hide priority when the exclamation mark icon is clicked
function givePriority (event) {
    let exclamationButton = event.currentTarget;

    if (exclamationButton.parentNode.previousSibling.children[2].children[1].classList.contains("is-hidden") === true) {
        
        exclamationButton.parentNode.previousSibling.children[2].children[1].classList.remove("is-hidden");
        hideFiveIcons(exclamationButton);
    } 
    else if (exclamationButton.parentNode.previousSibling.children[2].children[1].classList.contains("is-hidden") === false) {

        exclamationButton.parentNode.previousSibling.children[2].children[1].classList.add("is-hidden");
        hideFiveIcons(exclamationButton);
    }
}





//when one of the five icons is clicked, they disappear after clicking
function hideFiveIcons (event) {
    event.parentNode.children[1].classList.add("is-hidden");
    event.parentNode.children[2].classList.add("is-hidden");
    event.parentNode.children[3].classList.add("is-hidden");
    event.parentNode.children[4].classList.add("is-hidden");
    event.parentNode.children[5].classList.add("is-hidden");
}





//todo text becomes editable when the pencil icon is clicked
let text;

function editTodoTextP (event) {
    let pencilButton = event.currentTarget;
    
    //saving the original text of todo element to a global variable
    text = pencilButton.parentNode.previousSibling.children[0].children[1].textContent;
    
    setContenteditableToTodoTextP(pencilButton);
    changeStyleToTodoTextP(pencilButton);
    onPressEnterInEditting(pencilButton);

    //show save&cancel buttons
    pencilButton.parentNode.previousSibling.children[1].children[0].classList.remove("is-hidden");
    pencilButton.parentNode.previousSibling.children[1].children[1].classList.remove("is-hidden");

    hideFiveIcons(pencilButton);
}


function setContenteditableToTodoTextP (event) {
    event.parentNode.previousSibling.children[0].children[1].setAttribute("contenteditable", "true");
}

function changeStyleToTodoTextP (event) {
    event.parentNode.previousSibling.children[0].children[1].classList.add("change-todo-text-p-style");
}


function onPressEnterInEditting (event) {
    event.parentNode.previousSibling.children[0].children[1].addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.target.classList.remove("change-todo-text-p-style");
            event.target.setAttribute("contenteditable", "false");
            event.target.parentNode.nextSibling.children[0].classList.add("is-hidden");
            event.target.parentNode.nextSibling.children[0].nextSibling.classList.add("is-hidden");
        }
    })
}


function saveTextChanges (event) {
    let saveButton = event.currentTarget;
    saveButton.parentNode.previousSibling.children[1].classList.remove("change-todo-text-p-style");
    saveButton.parentNode.previousSibling.children[1].setAttribute("contenteditable", "false");
    saveButton.classList.add("is-hidden");
    saveButton.nextSibling.classList.add("is-hidden");
}

function cancelTextChanges (event) {
    let cancelButton = event.currentTarget;
    cancelButton.parentNode.previousSibling.children[1].classList.remove("change-todo-text-p-style");
    cancelButton.parentNode.previousSibling.children[1].setAttribute("contenteditable", "false");
    cancelButton.classList.add("is-hidden");
    cancelButton.previousSibling.classList.add("is-hidden");

    //using the global variable 'text' to get back the original text after the user modifies it but in the and pushes cancel
    cancelButton.parentNode.previousSibling.children[1].textContent = text;
    
}




//delete todo when trash icon is clicked
function deleteTodo (event) {
    let trashButton = event.currentTarget;
    trashButton.parentNode.previousSibling.children[3].classList.remove("is-hidden");

    hideFiveIcons(trashButton);
}


function deleteYes (event) {
    event.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
}

function deleteNo (event) {
    event.currentTarget.parentNode.parentNode.classList.add("is-hidden");
}





//make the todo faint when the check icon is clicked
function todoDone (event) {
    let checkButton = event.currentTarget;

    checkButton.parentNode.children[0].classList.add("is-hidden");
    checkButton.parentNode.children[1].classList.add("is-hidden");
    checkButton.parentNode.children[2].classList.add("is-hidden");
    checkButton.parentNode.children[3].classList.add("is-hidden");
    checkButton.parentNode.children[4].classList.add("is-hidden");
    checkButton.parentNode.children[6].classList.remove("is-hidden");

    checkButton.children[0].classList.add("give-opacity");
    checkButton.parentNode.children[6].classList.add("give-opacity");
    checkButton.parentNode.previousSibling.children[2].children[1].classList.add("give-opacity");

    checkButton.parentNode.parentNode.parentNode.classList.add("change-opacity");
}





//------------------------------------------------------------------------SORTING-------------------------------------------------------

function getShowPriorityButton () {
    let showPriorityButton = document.getElementById("show-priority-button");
    showPriorityButton.addEventListener("click", showPriorityFirst);
}

getShowPriorityButton();


function getShowOldestButton () {
    let showOldestButton = document.getElementById("show-oldest-button");
    showOldestButton.addEventListener("click", showOldestFirst);
}

getShowOldestButton();



function priorityToNumber(attribute) {
    if(attribute.classList.contains("is-hidden")) {
        return 1;
    }
    else {
        return 0;
    }

    //shorter version:  return attribute.classList.contains("is-hidden") ? 1 : 2;
}



function sortItems(compFun) {

    //constructing the array from DOM as a local variable in the sort function
    let todoListUl = document.getElementById("todo-lists-ul");
    let items = todoListUl.children;
    let list = [];

    for (let i = 0; i < items.length; i++) {
        let todoObject = {
            node: items[i],
            date: items[i].children[0].children[0].children[2].getAttribute("data-timestamp"),
            priority: priorityToNumber(items[i].children[0].children[0].children[2].children[1])
        }

        list.push(todoObject);
    }

    //sort the array
    list.sort(compFun);

    //rearrange the items in the DOM to correspond to the sorted array
    //functions used for adding a node will move the node if it’s already in the DOM
    for (let counter = 0; counter < list.length; counter++) {
        todoListUl.appendChild(list[counter].node);
    }
}

//sorting todos on the basis of priority
function showPriorityFirst () {
    sortItems(
        function (a, b) {
            return a.priority - b.priority;
        });
}

//sorting todos on the basis of date
function showOldestFirst () {
    sortItems(
        function (a, b) {
            return a.date - b.date;
        });
}







//--------------------------------------------------------------CALENDAR------------------------------------------------------------

function createInputDate () {
    let dateInput = document.createElement("input");
    dateInput.type = "text";
    dateInput.classList.add("datepicker-input");
    dateInput.readonly = "readonly";

    return dateInput;
}


function updateDate(dateText, event) {
    let todoAttribute = event.input[0].parentElement;
    let date = todoAttribute.children[0];
    
    //changing the original date text to the selected date
    date.textContent = dateText;

    //using the milliseconds when sorting by date (line 316)
    //need to convert the date string (which we get from the dateText - jquery parameter) to milliseconds
    //our format (line 333) is : date. month. year
    //if we use the new Date() function on our format, the month and date are switch. e.g. instead of the selected december 6 (6.12), the date will be june 12
    //so if the day is more than 12 (which will be the month because of the switch), the converting is not even valid
    //the substring function(start, end) extracts and returns characters from the dateText string (end is not included)
    //JS counts months from 0 to 11. January is 0. December is 11., therefore we need to substract -1 from the month

    let pickedDay = Number(dateText.substring(0,2));
    let pickedMonth = Number(dateText.substring(4,6))-1;
    let pickedYear = Number(dateText.substring(8,12));
    let pickedDate = new Date(pickedYear, pickedMonth, pickedDay);  //the key is that we need to give proper format in the new Date function

    todoAttribute.setAttribute("data-timestamp", pickedDate.getTime());
 
}






//----------------------------------------------------------------USERNAME----------------------------------------------------

function editUsername () {
    let username = document.getElementById("username");

    username.addEventListener("dblclick", function(event) {
        event.target.setAttribute("contenteditable", "true");
    })

    username.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.target.setAttribute("contenteditable", "false");
        }
    })
}

editUsername();





//---------------------------------------------------------CHANGING COLOR STYLE-------------------------------------------

function getSettings () {
    let settings = document.getElementById("settings-button");
    settings.addEventListener("click", showHideColorButtons);
}

getSettings();


function getColorButtons () {
    let grey = document.getElementById("grey");
    grey.addEventListener("click", changeColorThemeToGrey);

    let silver = document.getElementById("silver");
    silver.addEventListener("click", changeColorThemeToSilver);

    let blue = document.getElementById("blue");
    blue.addEventListener("click", changeColorThemeToBlue);
}

getColorButtons();


function showHideColorButtons (event) {
    let settingsButton = event.currentTarget;
    
    if (settingsButton.previousSibling.previousSibling.style.display === "none") {
        settingsButton.previousSibling.previousSibling.style.display = "flex";
    }
    else if (settingsButton.previousSibling.previousSibling.style.display === "flex") {
        settingsButton.previousSibling.previousSibling.style.display = "none";
    }
}

function changeColorThemeToGrey (event) {
    document.body.classList.remove("blue");
    document.body.classList.add("grey");
}

function changeColorThemeToSilver (event) {
    let body = document.body;

    if (body.classList.contains("grey") || body.classList.contains("blue")) {
        body.classList.remove("grey");
        body.classList.remove("blue");
    }
}

function changeColorThemeToBlue (event) {
    document.body.classList.remove("grey");
    document.body.classList.add("blue");
}







});  //end of jquery