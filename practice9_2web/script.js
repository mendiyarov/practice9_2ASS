const students = [80, 77, 88, 95, 68];

function calculateAverage(marks) {
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    return total / marks.length;
}

function getGrade(average) {
    if (average >= 90) return 'A';
    else if (average >= 80) return 'B';
    else if (average >= 70) return 'C';
    else if (average >= 60) return 'D';
    else return 'F';
}

const average = calculateAverage(students);
const grade = getGrade(average);


document.getElementById("averageOutput").innerText = `Средняя оценка: ${average.toFixed(2)}, Оценка: ${grade}`;

const enterInput = document.getElementById("enterInput");
const enterOutput = document.getElementById("enterOutput");

enterInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        enterOutput.innerText = "Вы нажали Enter!";
    }
});


const dblClickElement = document.getElementById("dblClickElement");

dblClickElement.addEventListener("dblclick", () => {
    alert("Элемент был дважды кликнут!");
});


let progress = 0;

function updateProgressBar() {
    if (progress < 100) {
        progress += 20;
        document.getElementById("progressBar").style.width = progress + "%";
        document.getElementById("progressStatus").innerText = `Прогресс: ${progress}%`;
    }
}


setInterval(updateProgressBar, 2000);


function runFizzBuzz() {
    const output = document.getElementById("fizzBuzzOutput");
    for (let i = 1; i <= 100; i++) {
        let result = '';
        if (i % 3 === 0 && i % 5 === 0) {
            result = 'FizzBuzz';
        } else if (i % 3 === 0) {
            result = 'Fizz';
        } else if (i % 5 === 0) {
            result = 'Buzz';
        } else {
            result = i;
        }
        const p = document.createElement('p');
        p.innerText = result;
        output.appendChild(p);
    }
}


runFizzBuzz();