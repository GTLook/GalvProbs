//given cc numbers
var ccNums = ['4916-2600-1804-0530', '4779-252888-3972', '4252-278893-7978', '4556-4242-9283-2260'];

//var count = 0;
var ans = 0;
var highScore = 0;

for(var count = 0; count < ccNums.length;count++){
     //removes '-' from array string and splits into an array of the ccNumbers
     var stringNum = ccNums[count].replace(/-/g,'0').split("");

     //convert string array into numbers
     for(var i=0; i<stringNum.length; i++) {
          stringNum[i] = parseInt(stringNum[i], 10);
     }

     //addition of array using reduce
     var sum = stringNum.reduce( function(total, a) {
          return total +  a
     });

     //logic to check if high number, updates highscore if higher
     if (sum >= highScore) {
          ans = ccNums[count];
          highScore = sum;
     }
}
//returns cc number with highest added number!
console.log(ans)

//html shell

/*
<!DOCTYPE html>
<html>
<body>

<p>Click the button to work.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
var ages = [32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}

function myFunction() {
    document.getElementById("demo").innerHTML = ages.filter(checkAdult);
}
</script>

</body>
</html>
