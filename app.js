
const studentName = document.querySelector(".studentName");
const mathInput = document.querySelector(".math");
const engInput = document.querySelector(".eng");
const sciInput = document.querySelector(".sci");

const button = document.querySelector(".submit");

const marksScored = document.getElementById("totalMarks");
const averageScore = document.getElementById("average");
const grade = document.getElementById("grade");
const estatus = document.getElementById("estatus");
const commentsOutput = document.getElementById("comments");

const results = document.getElementById("results")

// Button event listener
button.addEventListener("click", populate);

// Main function
function populate() {
    // Read the values when the button is clicked
    let math = Number(mathInput.value);
    let eng = Number(engInput.value);
    let sci = Number(sciInput.value);

    
    // Calculate total and average
    let totalMarks = math + eng + sci;
    let average = totalMarks / 3;

    // Display the results
    results.textContent = `Dear ${studentName.value} here are your results.`;
    marksScored.textContent = totalMarks;
    averageScore.textContent = average.toFixed(2);
    grade.textContent = grades(average);
    estatus.textContent = passFail(totalMarks);
    commentsOutput.textContent = getComments(average);
}

// Grade function
function grades(average) {
    if (average >= 80) {
        return "Grade: A";
    } else if (average >= 70) {
        return "Grade: B";
    } else if (average >= 60) {
        return "Grade: C";
    } else if (average >= 50) {
        return "Grade: D";
    } else {
        return "Grade: E";
    }
}

// Pass or fail function
function passFail(totalMarks) {
    if (totalMarks >= 150) {
        return "Pass";
    } else {
        return "Fail";
    }
}

// Teacher's comments
function getComments(average) {
    if (average >= 70) {
        return "Excellent performance! Keep it up.";
    } else if (average >= 50) {
        return "You have great potential. Study harder!";
    } else if (average >= 40) {
        return "Aim for the pass mark.";
    } else {
        return "Wacha mchezo kijanaa, soma!";
    }
}
