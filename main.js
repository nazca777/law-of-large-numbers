var heads = 0;
var tails = 0;

function flip() {
    heads = 0;
    tails = 0;
    let inp = document.getElementById('input-x').value;

    let numberVal = parseInt(inp);
    if (Number.isInteger(numberVal)) {
        document.getElementById('x-val').innerHTML = " " + inp;
        calculate(numberVal);
    } else {
        alert('Please enter a valid whole number.');
    }
}


function calculate(val) {

    var x;
    for (x = 0; x < val; x++) {
        var random = Math.floor(Math.random() * 2);
        if (random == 0) {
            tails++;
        } else if (random==1) {
            heads++;
        }
    }

    var percentage = (heads/val) * 100;
    var str = percentage.toString();
    var trimmedPercentage = str.substring(0, 5);
    document.getElementById("y-val").innerHTML = heads;
    document.getElementById("percentageVal").innerHTML = trimmedPercentage + "%";
    
}
