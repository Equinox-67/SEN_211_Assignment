function orderNumber() {
  let count = localStorage.clickcount = Number(localStorage.clickcount)+1;
  if (isNaN(count) === true) {
      count = localStorage.clickcount = 1;
      document.getElementById("order-number").innerHTML = count;
  } else {
      document.getElementById("order-number").innerHTML = count;
  }
} 
console.log(orderNumber())

 function sendUs() {
  prompt("Your Message has been sent successfully and we will get back to you within the next 24 hours.");
  document.getElementByClass("submission").reset();
}