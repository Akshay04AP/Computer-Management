function computer_assign(){
    var fname = document.getElementById("name").value;
    var stu_num = document.getElementById("student_number").value;
    var sub = document.getElementById("subject").value;
    var computer_allocate = document.getElementById("allocation");

    document.getElementById("registration").classList.remove("wrong_input");
    document.getElementById("allocation").classList.remove("wrong_input");

    if(fname != "" || stu_num != "" || computer_allocate.innerHTML == ""){
        document.getElementById("name").value = "";
        document.getElementById("student_number").value = "";
    }

    if((stu_num.length == 7 || stu_num.length == 8) && (!isNaN(stu_num)) && (fname.length > 0 && fname.length < 26) && (isNaN(fname))){
        var com_num = Math.floor(Math.random() * (37) );
        var lab_num;

        if(com_num == 0){
            com_num = com_num + 1;
        }

        if(sub == "Web Designing Workshop"){
            var lab_num = Math.floor(Math.random() * (3) )
            if(lab_num == 0){
                lab_num = lab_num + 1;
            }
        }
        else if(sub == "Computer Organisation Lab"){
            var lab_num = Math.floor(Math.random()*(3)) + 2;
            if(lab_num == 2){
                lab_num = lab_num + 1;
            }
        }
        else if(sub == "Data Structure Using C Lab"){
            var lab_num = Math.floor(Math.random() * (3) ) + 4;
            if(lab_num == 4){
                lab_num = lab_num + 1;
            }
        }
        computer_allocate.innerHTML = "You Have Been Allocated Computer Number " + com_num + " in CSE Lab " + lab_num + "<br> Student Name: <b>" + fname + "</b><br> Student Number: <b>" + stu_num + "</b><br> Subject Name: <b>" + sub + "</b";
    }
    else{
        computer_allocate.innerHTML = "Enter Correct Input";
        document.getElementById("registration").classList.add("wrong_input");
        document.getElementById("allocation").classList.add("wrong_input");
    }
    
    

}