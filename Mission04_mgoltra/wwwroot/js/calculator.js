$("#calculate").click(function GradeCalculator() {
    // make variables for the values
    var assignments = $("#assignmentsNum").val();
    var groupProject = $("#groupProjectNum").val();
    var quizzes = $("#quizzesNum").val();
    var midterm = $("#midtermExamNum").val();
    var final = $("#finalExamNum").val();
    var intex = $("#intexNum").val();

    //final grade calculation
    var finalGrade = ((assignments * .5) + (groupProject * .1) + (quizzes * .1) + (midterm * .1) + (final * .1) + (intex * .1));

    //empty string for letter grade
    var letterGrade = '';

    // if statements determine letter grade
    if (finalGrade >= 94) {
        letterGrade = 'A'
    }
    else if ((finalGrade < 94) && (finalGrade >= 90)) {
        letterGrade = 'A-'
    }
    else if ((finalGrade < 90) && (finalGrade >= 87)) {
        letterGrade = 'B+'
    }
    else if ((finalGrade < 87) && (finalGrade >= 84)) {
        letterGrade = 'B'
    }
    else if ((finalGrade < 84) && (finalGrade >= 80)) {
        letterGrade = 'B-'
    }
    else if ((finalGrade < 80) && (finalGrade >= 77)) {
        letterGrade = 'C+'
    }
    else if ((finalGrade < 77) && (finalGrade >= 74)) {
        letterGrade = 'C'
    }
    else if ((finalGrade < 74) && (finalGrade >= 70)) {
        letterGrade = 'C-'
    }
    else if ((finalGrade < 70) && (finalGrade >= 67)) {
        letterGrade = 'D+'
    }
    else if ((finalGrade < 67) && (finalGrade >= 64)) {
        letterGrade = 'D'
    }
    else if ((finalGrade < 64) && (finalGrade >= 60)) {
        letterGrade = 'D-'
    }
    else if (finalGrade < 60) {
        letterGrade = 'E'
    }

    // output
    $('#test').html("Final grade: " + finalGrade + '<br />Letter grade: ' + letterGrade);
    

})
