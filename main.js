let randomNumber = Math.random()*100

function test(){
  let myNumber = document.getElementById("input").value
  if(myNumber > randomNumber){
    // [your number] greater than [random number]
    console.log (`${myNumber} is greater than ${randomNumber}.`)
  }else{
    // [your number] less than [random number]
    console.log (`${myNumber} is less than ${randomNumber}.`)

  }
}

var count = 0;
      var button = document.getElementById("countButton");
      var display = document.getElementById("displayCount");

      button.onclick = function(){
        count++;
        display.innerHTML = count;
      }
