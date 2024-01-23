function calculate()
{
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var age = parseInt(document.getElementById('age').value);
    var bmi = weight/(height*height)
    var calculator = document.querySelector("body");
    if (age>=18){
        if (bmi<=18.5){
            alert("You are underweight")
            document.getElementById("img").src="https://cdn2.vectorstock.com/i/1000x1000/04/71/underweight-woman-standing-on-scales-in-flat-vector-39860471.jpg"
            calculator.style.backgroundColor = "#FFFF99";
        }
        else if (bmi>18.5 && bmi<=24.9){
            alert("You are healthy")
            document.getElementById("img").src="https://www.shutterstock.com/image-vector/slim-woman-standing-on-scale-260nw-2063378300.jpg"
            calculator.style.backgroundColor = "#99FF99";
        }
        else{
            alert("You are overweight")
            document.getElementById("img").src="https://thumbs.dreamstime.com/b/body-mass-index-bmi-control-obese-woman-flat-vector-illustration-isolated-body-mass-index-bmi-control-concept-254342599.jpg"
            calculator.style.backgroundColor = "#CC3333";
        }
    }

    else{
        alert("You are to young to be calculating your bmi")
    }
}

