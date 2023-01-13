function calculate() {
    var bmi;
    var result = document.getElementById("result");

    var weight = parseInt(document.getElementById("weight").value);
    document.getElementById("weight-val").textContent = weight + " kg";

    var height = parseInt(document.getElementById("height").value);
    document.getElementById("height-val").textContent = height + " cm";

    bmi = (weight / Math.pow((height / 100), 2)).toFixed(1);
    result.textContent = bmi;

    if (bmi < 18.5) {
        category = "Underweight";
        // window.location.href = "C:\Users\Dell\OneDrive\Desktop\Mini Project\YARL_IT_HUB\src\assets\bmiclass\normalweight\underweight.html";
        result.style.color = "#ffc44d";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal Weight";
        // window.location.href = "C:\Users\Dell\OneDrive\Desktop\Mini Project\YARL_IT_HUB\src\assets\bmiclass\normalweight\normalweight.html";
        result.style.color = "#0be881";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
        // window.location.href = "C:\Users\Dell\OneDrive\Desktop\Mini Project\YARL_IT_HUB\src\assets\bmiclass\normalweight\overweight.html";
        result.style.color = "#ff884d";
    } else {
        category = "Obese";
        // window.location.href = "C:\Users\Dell\OneDrive\Desktop\Mini Project\YARL_IT_HUB\src\assets\bmiclass\normalweight\obese.html";
        result.style.color = "#ff5e57";
    }
    document.getElementById("category").textContent = category;
}