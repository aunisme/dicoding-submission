var greet = ["hi", "hello", "bonjour", "sup"];
var count = 0;
var e = document.getElementById("refresh");
var i = setInterval(change, 1500);

function change() {
    e.innerHTML = greet[count];
    count++;
    if (count >= greet.length){
        count = 0;
    }
}


// modal handler

var modal = document.getElementById("modal-id");

var modalbtn = document.getElementById("modal-btn");

modalbtn.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}