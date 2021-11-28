    function validation() {
        let x = document.querySelector('#first').value;
        if (x == "1800101357" || x == "1800101356") {
            document.querySelector(".one").style.display = "none";
            document.querySelector("#next").disabled = false;
            document.querySelector("#next").style.display = "none";
            document.querySelector(".two").style.display = "block";
            document.querySelector("#bck").style.display = "inline";
            document.querySelector("#sb").style.display = "block";
        } else {
            document.querySelector(".one").style.display = "block";
            document.querySelector("#next").disabled = true;
            document.querySelector(".two").style.display = "none";
            document.querySelector("#next").style.display = "block";
        }
    }

    function btn_stat() {
        document.querySelector("#next").disabled = false;
    }

    function back_to_log() {
        document.querySelector(".one").style.display = "block";
        document.querySelector(".two").style.display = "none";
        document.querySelector("#next").style.display = "block";
        document.querySelector("#sb").style.display = "none";
        document.querySelector("#bck").style.display = "none";

    }

    function success() {
        let a = document.getElementById("name").value;
        alert("Thanks " + a + ", Your request has been submitted successfully! ");
    }

    function animate() {
        let x = document.getElementsByClassName("card");
        for (let i = 0; i < x.length; i++) {
            (function (i) {
                setTimeout(function () {
                    x[i].style.display = "block";
                }, 400 * i);
            })(i);
        }
    }  

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("container");
  if (n > x.length) {slideIndex = 1;}    
  if (n < 1) {slideIndex = x.length;}
  for (i = 0; i < x.length; i++) {
    x[i].classList.add("w3-hide-large"); 
  }

  x[slideIndex-1].classList.toggle("w3-hide-large");  
}

function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
  }

function show(x){
    document.querySelector(x).classList.toggle("show");
}

function show_item(){
    let a = document.getElementsByClassName("w3-bar-item");
    for(let i=0;i<a.length;i++){
    a[i].classList.toggle("w3-hide-small");
    a[i].classList.toggle("w3-hide-medium");
    }
}

