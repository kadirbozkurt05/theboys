/**
 * Created this JS to give some logic to the embedded poll.
 * As soon as page is loaded it gets the element and run the poll() function to make it usable.
 */
var modal;

window.onload = function () {
  modal = document.getElementById("pollModal");
  poll();
};

/**
 * Poll function makes the modal when visible if it is not visible, otherwise it makes it invisible.
 */
function poll() {
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
