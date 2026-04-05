let Courses = document.querySelectorAll("#courseList input")

let courseNum=1;
let CoursePoint=0;
let CourseHours=0;
let totalPoints=0;
let totalHours=0;

function AddCourse(){
    courseNum++;
    let course = document.createElement('div');
    course.innerHTML = `
        <label for="course${courseNum}">Course ${courseNum}:</label>
        <br><br>
        <label for="grade${courseNum}">Course grade:</label>
        <select id="grade${courseNum}" name="grade${courseNum}" oninput="CalculatePointsCouse()">
            <option value="4">A+</option>
            <option value="3.75">A</option>
            <option value="3.50">B+</option>
            <option value="3">B</option>
            <option value="2.50">C+</option>
            <option value="2">C</option>
            <option value="1.50">D+</option>
            <option value="1">D</option>
            <option value="0">F</option>
        </select>
        <br><br>
        <label for="hours${courseNum}">Course hours:</label>
        <input type="number" id="hours${courseNum}" name="hours${courseNum}" oninput="CalculatePointsCouse()"><br><br>
        <span id="point${courseNum}">Points: ${CoursePoint}</span><br><br>
    `;
    document.getElementById('courseList').appendChild(course);
}

function CalculatePointsCouse(CourseHours, CoursePoint, totalPoints, totalHours){
    for(let i=1; i<=courseNum; i++){
        let grade = parseFloat(document.getElementById(`grade${i}`).value);
        let hours = parseFloat(document.getElementById(`hours${i}`).value);
        CourseHours = hours;
        CoursePoint = grade * CourseHours;
        totalPoints += CoursePoint;
        totalHours += CourseHours;
        document.getElementById(`point${i}`).innerHTML = `Points: ${CoursePoint}`;
        }
    return {totalHours, totalPoints}
}

function CalculateSGPA(){
    let results= CalculatePointsCouse(CourseHours,CoursePoint,totalPoints, totalHours);
    totalHoursT=results.totalHours;
    totalPointsT=results.totalPoints;
    let SemesterG= totalPointsT/totalHoursT;
    if(totalHoursT===0){
        document.getElementById('gpaS').innerHTML = `0.00`;
    }else{
        document.getElementById('gpaS').innerHTML = `${SemesterG.toFixed(2)}`;
    }
}
