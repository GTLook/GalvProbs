//given cc numbers
var ccNums = ['4916-2600-1804-0530', '4779-252888-3972', '4252-278893-7978', '4556-4242-9283-2260'];

var count = 0;
var ans = 0;
var highScore = 0;

do{
     //removes '-' from array string
     var stringNum = ccNums[count].replace(/-/g,'0');

     //split array string
     var split = stringNum.split("");

     //convert array into numbers
     for(var i=0; i<split.length; i++) {
          split[i] = parseInt(split[i], 10);
     }

     //addition of array using reduce
     var sum = split.reduce( function(total, a) {
          return total +  a
     });

     //logic to check if high number
     if (sum >= highScore) {
          ans = count;
     }

     //count +1 for next number in string
     count++;

} while (count<ccNums.length);

//returns cc number with highest added number!
console.log(ccNums[ans])

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
