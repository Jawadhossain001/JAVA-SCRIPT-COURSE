var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var avgMarks = 0;

for (var i=0; i < students.length; i++) {
    avgMarks += students[i][1];
        var avg = (avgMarks/students.length);
}

console.log("Average grade: " + (avgMarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}

