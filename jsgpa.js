let Courses = document.querySelectorAll("#courseList input")

let courseNum=1;
let CoursePoint=0;
let totalPoints=0;
let totalHours=0;

function GradetoPoint(grade){
    switch(grade){
        case "A+":
            CoursePoint=4;
            break;
        case "A":
            CoursePoint=3.75;
            break;
        case "B+":
            CoursePoint=3.50;
            break;
        case "B":
            CoursePoint=3.00;
            break;
        case "C+":
            CoursePoint=2.50;
            break;
        case "C":
            CoursePoint=2.00;
            break;
        case "D+":
            CoursePoint=1.50;
            break;
        case "D":
            CoursePoint=1.00;
            break;
        case "F":
            CoursePoint=0;
            break;
    }
    return CoursePoint;
}

function AddCourse(){
    courseNum++;
    let course = document.createElement('div');
    course.innerHTML = `
        <label for="course${courseNum}">Course ${courseNum}:</label>
        <br><br>
        <label for="grade${courseNum}">Course grade:</label>
        <input type="text" id="grade${courseNum}" name="grade${courseNum}"><br><br>
        <label for="hours${courseNum}">Course hours:</label>
        <input type="text" id="hours${courseNum}" name="hours${courseNum}"><br><br>
        <span id="point">Points: ${CoursePoint}</span><br><br>
    `;
    document.getElementById('courseList').appendChild(course);
}
