var priceOne = document.getElementById("firstPrice");
var priceTwo = document.getElementById("secondPrice");
var priceThree = document.getElementById("thirdPrice");


function check(){
  if (document.getElementById('checkboxSwitch').checked){
      priceOne.innerHTML = "19.99";
      priceTwo.innerHTML = "24.99";
      priceThree.innerHTML = "39.99";
  } else {
      priceOne.innerHTML = "199.99";
      priceTwo.innerHTML = "249.99";
      priceThree.innerHTML = "399.99";
  }
}
