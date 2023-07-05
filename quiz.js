var modal;

window.onload = function() {
  modal = document.getElementById("pollModal");
  poll();
};

function poll() {
  if (modal.style.display === "none") {
    modal.style.display = "inline-block";
  } else {
    closeModal();
  }
}

function closeModal(){
    modal.style.display = "none";
}
