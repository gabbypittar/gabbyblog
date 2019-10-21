let count = 0;
let randomNum = Math.floor(Math.random()*100)

function processGuess(){
  let input = document.getElementById("guess").value

  console.log(input)
  let gap = Math.abs(input - randomNum);


  if(gap>50){
    document.getElementById('message').innerHTML = "FREEZING"
  } else if (gap>20){
    document.getElementById('message').innerHTML = "cold"
  } else if (gap>10){
    document.getElementById('message').innerHTML = "warm"
  } else if (gap>5){
    document.getElementById('message').innerHTML = "hot"
  } else if (gap>0){
    document.getElementById('message').innerHTML = "boiling"
  } else if (gap==0){
    document.getElementById('message').innerHTML = "SUCCESS!"
  }

  count++
  document.getElementById('countNum').innerHTML =
  `<h3>''You have guessed ${count} times'</h3>`

}

function resetGame(){
  randomNum = Math.floor(Math.random()*100)
  document.getElementById('guess').value = ''

  count = 0;

  document.getElementById('countNum').innerHTML =
  `<h3>''You have guessed ${count} times'</h3>`

}
