var weight = parseInt(prompt("Enter Your Weight", ""), );
var height = parseFloat(prompt("Enter Your Heigth in Meters", ""), );
var bmi=weight/Math.pow(height,2);
console.log('The Bmi is  ' + weight + ' and ' + height + ' is: ' + bmi)
if (bmi<18.5) {
    console.log("underweight")
}
        
    
    else if (bmi>=18.5 && bmi<=24.9) { console.log("Normal Weight")

    
    } 
    else if (bmi>=25.0 && bmi<=29.9) { console.log("Over Weight")

    
} 

else if (bmi>=29.9 && bmi <=30.0) { console.log("Obese")

    
} 

else if (bmi>=30.0 && bmi<=34.9) { console.log("obese class 1")

    
} 
else if (bmi>=35.0 && bmi<=39.9) { console.log("Obese Class 2")

    
} 
else {
    console.log("obese class III") 
  }






