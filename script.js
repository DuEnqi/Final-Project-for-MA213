

  
  function toggleMenu() {
    const menu = document.querySelector(".menu-icon-wrapper");
    const nav = document.getElementById("myNav");
  
    // Toggle menu visibility
    menu.classList.toggle("open");
    menu.classList.toggle("close");
    nav.classList.toggle("open");
  }

 /* window.addEventListener("scroll",setScrollVar)
window.addEventListener("resize",setScrollVar)



setScrollVar()
  
  function setScrollVar(){
    const htmlElement = document.documentElement
    const percentOfScreenHeightScrolled =htmlElement.scrollTop/
    htmlElement.clientHeight
    htmlElement.style.setProperty("--scroll",Math.min
      (percentOfScreenHeightScrolled *100,100))

    }
  var speed = 50; 
var lastScrollPos = 0;
var scrollContainer = document.getElementById("scroll-container");
var scrollText = document.getElementById("scroll-text");


function scroll() {
  var currentScrollPos = scrollContainer.scrollLeft;
  if (currentScrollPos == lastScrollPos) {
    
    scrollContainer.scrollLeft = scrollText.offsetWidth;
  } else {
    lastScrollPos = currentScrollPos;
  }
  scrollContainer.scrollLeft -= 1;
}


setInterval(scroll, speed);




//for blog page


//
const countButton = document.getElementById('countButton');
const countDisplay = document.getElementById('countDisplay');

let count = 0;


countButton.addEventListener('click', function() {
    count++;
    countDisplay.textContent = count;
});

*/

function funcpop1() {
  var popup = document.getElementById("popup1");
  popup.classList.toggle("show");
}
function funcpop2() {
  var popup = document.getElementById("popup2");
  popup.classList.toggle("show");
}
function funcpop3() {
  var popup = document.getElementById("popup3");
  popup.classList.toggle("show");
}
function funcpop4() {
  var popup = document.getElementById("popup4");
  popup.classList.toggle("show");
}

function closePopup(popupId) {
  document.getElementById(popupId).classList.toggle("hid");
}


let addquantity = 1; 
let cartQuantity = localStorage.getItem("cartQuantity"); 

if (cartQuantity === null) {
  cartQuantity = 0;
} else {
  cartQuantity = parseInt(cartQuantity);
}

  function like1() {

    let hitlike = document.getElementById("likeforblog1");
    

    hitlike.classList.toggle("flash");

    cartQuantity += addquantity;
    

    console.log(`Cart Quantity: ${cartQuantity}`);
   
    localStorage.setItem("cartQuantity", cartQuantity);
    document.getElementById("label1").innerHTML = cartQuantity+"Likes";
  }
  let cartQuantity2 = localStorage.getItem("cartQuantity2"); 
  
  if (cartQuantity2 === null) {
    cartQuantity2 = 0;
  } else {
  
    cartQuantity2 = parseInt(cartQuantity2);
  }

  function like2() {

    let hitlike = document.getElementById("likeforblog2");


    hitlike.classList.toggle("flash");

    cartQuantity2 += addquantity;

    console.log(`Cart Quantity2: ${cartQuantity2}`);
    localStorage.setItem("cartQuantity2", cartQuantity2);

    document.getElementById("label2").innerHTML = cartQuantity2+"Likes";
  }

  
  let comment1= localStorage.getItem("comment1"); 
  
  if (comment1 === null) {
    comment1 = "Comment";
  } else {

    comment1 =comment1.toString();
  }

  function addComment1() {

    let newcomment = document.getElementById("c1").value;


   
  if (newcomment.trim() !== "") {  
    comment1 += newcomment + "\n"; 
    localStorage.setItem("comment1", comment1);

    console.log(newcomment);  
   
    document.getElementById("label3").innerHTML = comment1;
  }
  }
  let comment2= localStorage.getItem("comment2"); 
  
  if (comment2 === null) {
    comment2 = "Comment";
  } else {

    comment2 =comment2.toString();
  }

  function addComment2() {

    let newcomment = document.getElementById("c2").value;


   
  if (newcomment.trim() !== "") {  
    comment2 += newcomment + "\n";  
    localStorage.setItem("comment2", comment2);

    console.log(newcomment);  
   
    document.getElementById("label4").innerHTML =  comment2.replace(/\n/g, "<br>");
  }
  }

  function notice() {
  
    document.getElementById("warmnotice1").classList.toggle("show");
  }
  function notice2() {
  
    document.getElementById("warmnotice2").classList.toggle("show");
  }