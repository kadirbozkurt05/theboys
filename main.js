/**
 * This is an external JS library which provides developer to typed text and it has re-arrangable attributes like speed, delay etc.
 * It uses a string array to create a loop to show some text on the UI
 */
var typed = new Typed('.typing-text', {
  strings: ['Comedy', 'Crime',"Action"],
  typeSpeed: 80,
  backSpeed:40,
  backDelay:100,
  loop: true
});

/**
* Created this JS to give some logic to the embedded poll.
* As soon as page is loaded it gets the element and run the poll() function to make it usable.
*/
var modal;

window.onload = function () {
modal = document.getElementById("pollModal");
openPoll();
};

/**
* Poll function makes the modal when visible if it is not visible, otherwise it makes it invisible.
*/
function openPoll() {
if (modal.style.display === "none") {
  modal.style.display = "inline-block";
} else {
  closeModal();
}
}
/**
* This function makes the modal invisible.
*/
function closeModal() {
modal.style.display = "none";
}

/**
* This is function for the poll button that will open the post-pole view
*/

function sendVote(){
var pollOptions = document.getElementById("poll-options");
var pollResults = document.getElementById("poll-results");
pollOptions.style.display="none";
pollResults.style.display="block";

delay(1000).then(() => closeModal()); //After voting, the thank you message will disappear in one second
}

/**
* This function makes a delay for any function
*/

function delay(time) {
return new Promise(resolve => setTimeout(resolve, time));
}