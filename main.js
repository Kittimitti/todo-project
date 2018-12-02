let list = [];

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


let i=0;

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


        todoListUl.insertBefore(todoItem, todoListUl.firstElementChild);
        todoItem.appendChild(todoItemContainer);
        todoItem.value = i;
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
        todoAttribute.appendChild(createPriority("priority"));
        deleteContainer.appendChild(createDeleteQuestion());
        deleteContainer.appendChild(deleteAnswerButtonsContainer);
        deleteAnswerButtonsContainer.appendChild(createDeleteYesButton());
        deleteAnswerButtonsContainer.appendChild(createDeleteNoButton());

        iconContainer.appendChild(arrowButton);
        iconContainer.appendChild(pencilButton);
        iconContainer.appendChild(calendarButton);
        iconContainer.appendChild(exclamationButton);
        iconContainer.appendChild(trashButton);
        iconContainer.appendChild(checkButton);

        arrowButton.appendChild(createArrowIcon());
        pencilButton.appendChild(createPencilIcon());
        calendarButton.appendChild(createCalendarIcon());
        exclamationButton.appendChild(createExclamationIcon());
        trashButton.appendChild(createTrashIcon());
        checkButton.appendChild(createCheckIcon());

        createTodoObject(todoAttribute.children[0].textContent, priorityToNumber(todoAttribute));
        console.log(list);
        i = i+1;

        dateToNumber(todoAttribute.children[0].textContent);
    }

    clearInputField();
}

function priorityToNumber(attribute) {
    if(attribute.children[1].classList.contains("is-hidden") === false) {
        return 1;
    }
    else {
        return 0;
    }
}

function clearInputField () {
    document.getElementById("todo-adding").value = "";
}


//showing additional 5 icons(buttons) when the arrow icon is clicked
function addFiveIcons () {
    console.log(event.currentTarget);
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
function givePriority () {
    let exclamationButton = event.currentTarget;

    if (exclamationButton.parentNode.previousSibling.children[2].children[1].classList.contains("is-hidden") === true) {
        
        exclamationButton.parentNode.previousSibling.children[2].children[1].classList.remove("is-hidden");
        list[exclamationButton.parentNode.parentNode.parentNode.value].priority = 1;
        hideFiveIcons(exclamationButton);
    } 
    else if (exclamationButton.parentNode.previousSibling.children[2].children[1].classList.contains("is-hidden") === false) {

        exclamationButton.parentNode.previousSibling.children[2].children[1].classList.add("is-hidden");
        list[exclamationButton.parentNode.parentNode.parentNode.value].priority = 0;
        hideFiveIcons(exclamationButton);
    }
}



//when one of the five icons is clicked, they disappear after clicking
function hideFiveIcons (actualEvent) {
    actualEvent.parentNode.children[1].classList.add("is-hidden");
    actualEvent.parentNode.children[2].classList.add("is-hidden");
    actualEvent.parentNode.children[3].classList.add("is-hidden");
    actualEvent.parentNode.children[4].classList.add("is-hidden");
    actualEvent.parentNode.children[5].classList.add("is-hidden");
}


let text;

function editTodoTextP () {
    let pencilButton = event.currentTarget;
    
    //saving the original text of todo element to a global variable
    text = pencilButton.parentNode.previousSibling.children[0].children[1].textContent;
    
    setContenteditableToTodoTextP(pencilButton);
    changeStyleToTodoTextP(pencilButton);

    //show save&cancel buttons
    pencilButton.parentNode.previousSibling.children[1].children[0].classList.remove("is-hidden");
    pencilButton.parentNode.previousSibling.children[1].children[1].classList.remove("is-hidden");

    hideFiveIcons(pencilButton);
}


function setContenteditableToTodoTextP (actualEvent) {
    actualEvent.parentNode.previousSibling.children[0].children[1].setAttribute("contenteditable", "true");
}

function changeStyleToTodoTextP (actualEvent) {
    actualEvent.parentNode.previousSibling.children[0].children[1].classList.add("change-todo-text-p-style");
}


function saveTextChanges () {
    let saveButton = event.currentTarget;
    saveButton.parentNode.previousSibling.children[1].classList.remove("change-todo-text-p-style");
    saveButton.parentNode.previousSibling.children[1].setAttribute("contenteditable", "false");
    saveButton.classList.add("is-hidden");
    saveButton.nextSibling.classList.add("is-hidden");
}

function cancelTextChanges () {
    let cancelButton = event.currentTarget;
    cancelButton.parentNode.previousSibling.children[1].classList.remove("change-todo-text-p-style");
    cancelButton.parentNode.previousSibling.children[1].setAttribute("contenteditable", "false");
    cancelButton.classList.add("is-hidden");
    cancelButton.previousSibling.classList.add("is-hidden");

    //using the global variable 'text' to get back the original text after the user modifies it but in the and pushes cancel
    cancelButton.parentNode.previousSibling.children[1].textContent = text;
    
}


function deleteTodo () {
    let trashButton = event.currentTarget;
    trashButton.parentNode.previousSibling.children[3].classList.remove("is-hidden");

    hideFiveIcons(trashButton);
}


function deleteYes () {
    event.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
}

function deleteNo () {
    event.currentTarget.parentNode.parentNode.classList.add("is-hidden");
}


function todoDone () {
    let checkButton = event.currentTarget;
    checkButton.parentNode.parentNode.parentNode.classList.add("change-opacity");

    //this line is not working: if priority is given, its opacity doesn't change
    checkButton.parentNode.previousSibling.children[2].children[1].classList.remove("priority");

    checkButton.parentNode.children[0].classList.add("is-hidden");
    checkButton.parentNode.children[1].classList.add("is-hidden");
    checkButton.parentNode.children[2].classList.add("is-hidden");
    checkButton.parentNode.children[3].classList.add("is-hidden");
    checkButton.parentNode.children[4].classList.add("is-hidden");

    checkButton.children[0].classList.add("is-green");

}



function createTodoObject(date, priority) {
    let todoObject = {
        date: date,
        priority: priority
    }
    list.push(todoObject);
}


//not working
function dateToNumber (x) {
    list.map(date => new Date(date.date).getTime());
}


function getShowPriorityButton () {
    let showPriorityButton = document.getElementById("show-priority-button");
    showPriorityButton.addEventListener("click", showPriorityFirst);
}

getShowPriorityButton();


function showPriorityFirst () {
    list.sort(function (a, b) {
        return a.priority - b.priority;
      });
      console.log(list);
}

