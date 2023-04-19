
/* TODO - Return the triangle calculations by calling your helper functions.
This function will be used in your eventListener
to print out the correct information about the triangle to your index.html page */
function triangleOutput(event){
    event.preventDefault();
    /* Fetches the values from the form. Notice that they have 
    id=value1, value2 and value3 in the HTML */
    const a = parseFloat(document.getElementById('value1').value);
    const b = parseFloat(document.getElementById('value2').value);
    const c = parseFloat(document.getElementById('value3').value);
    if (checkTriangle(a,b,c) === true ){
        document.getElementById('output').innerHTML = "The triangle is " + getTriangleType(a,b,c) + " and its perimeter is " + perimeter(a,b,c) + " and its acute right is " + acuteRightObtuse(a,b,c);
        document.getElementById('output').style.color = "green";
        document.getElementById('output').style.fontSize = "20px";

        /*output2 to output get triangle angles and area using get area */
        document.getElementById('output2').innerHTML = "Area is " + getArea(a,b,c) + " and the angles are " + getTriangleAngles(a,b,c);
        document.getElementById('output2').style.color = "green";
        document.getElementById('output2').style.fontSize = "20px";
    }
    else{
        document.getElementById('output').innerHTML = "The triangle is not a triangle";
        document.getElementById('output').style.color = "red";
        document.getElementById('output').style.fontSize = "20px";
    }
}

/* TODO - Below are suggested functions .
You do not have to use them, but it is recommended */

/*  Check if triangle */
function checkTriangle(side1, side2, side3){
    if (side1 === side2 && side1 === side3){
        return true;
    }
    else if (side1 === side2 || side1 === side3 || side2 === side3){
        return true;
    }
    else{
        return false;
    }
}

/* Check if Equilateral, Isosceles or Scalene */
function getTriangleType(side1,side2,side3){
    if (side1 === side2 && side1 === side3){
        return "Equilateral";
    }
    else if (side1 === side2 || side1 === side3 || side2 === side3){
        return "Isosceles";
    }
    else{
        return "Scalene";
    }
}


/* Calculate perimeter */
function perimeter (side1, side2, side3) {
    const perimeter = side1 + side2 + side3;
    return perimeter;
}
/* Check if acute, right or obtuse */
function acuteRightObtuse (side1, side2, side3) {
    if (side1 === side2 && side1 === side3){
        return "Acute";
    }
    else if (side1 === side2 || side1 === side3 || side2 === side3){
        return "Right";
    }
    else{
        return "Obtuse";
    }
}

/* Function that gets the triangle angles*/
function getTriangleAngles(side1, side2, side3){
    let angleA = 0;
    let angleB = 0;
    let angleC = 0;
    const a = side1;
    const b = side2;
    const c = side3;
    const angleA1 =  Math.acos(((b*b) + (c*c) - (a*a))/(2*b*c));
    const angleB2 =  Math.acos(((c*c) + (a*a) - (b*b))/(2*c*a));
    const angleC3 =  Math.acos(((a*a) + (b*b) - (c*c))/(2*b*a));

    angleA = angleA1*(180/Math.PI);
    angleB = angleB2*(180/Math.PI);
    angleC = angleC3*(180/Math.PI);

    return [precise(angleA), precise(angleB), precise(angleC)];
}

/*precise function to round to nearest tenth using toPrecision()*/
function precise(number){
    return number.toPrecision(4);
}

/* Calculate the area */
function getArea(side1, side2, side3){
    const area = (side1 + side2 + side3) / 2;
    return area;
}

/*resetScreen() function to reset the output top be blank*/
function resetScreen(){
    document.getElementById('output').innerHTML = "";
    document.getElementById('output2').innerHTML = "";
}

/* TODO - Create the Event listener, which calls the result of triangleOutput() . keep output on screen*/
document.getElementById('btn-submit').addEventListener('click', triangleOutput);

/*Event Listener to reset screen for reset button*/
document.getElementById('btn-reset').addEventListener('click', resetScreen);






