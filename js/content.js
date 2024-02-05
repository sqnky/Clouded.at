function goBack() {
    window.history.back();
}
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function saveChanges() {
    // Simulate saving changes
    showPopup("Your changes have been saved");
}

function showPopup(message) {
    var popup = document.getElementById("popup");
    popup.innerText = message;
    popup.style.display = "block";

    setTimeout(function() {
        popup.style.display = "none";
    }, 2000);
}

function showConfirmationDialogue() {
    var confirmationDialogue = document.getElementById("confirmationDialogue");
    confirmationDialogue.style.display = "block";
}

function cancelConfirmation() {
    var confirmationDialogue = document.getElementById("confirmationDialogue");
    confirmationDialogue.style.display = "none";
}

function dontSaveChanges() {
    var confirmationDialogue = document.getElementById("confirmationDialogue");
    confirmationDialogue.style.display = "none";
    // Implement logic for not saving changes
    console.log("Changes not saved");
}