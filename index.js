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

        let currentDate = new Date();
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

        computer_allocate.innerHTML = "You Have Been Allocated Computer Number <b>" + com_num + "</b> in CSE Lab <b>" + lab_num + "</b><br> Student Name: <b>" + fname + "</b><br> Student Number: <b>" + stu_num + "</b><br> Subject Name: <b>" + sub + "</b><br> Time Allocated: <b>" + hours + ':' + (minutes < 10 ? '0' : '') + minutes + "</b> To <b>" + (hours + 2) + ':' + (minutes < 10 ? '0' : '') + minutes + "</b><br><b>" + weekday[currentDate.getUTCDay()] + ", " + currentDate.getUTCDate() + " " + months[currentDate.getUTCMonth()] + " " + currentDate.getUTCFullYear() + "</b>";
    }
    else{
        computer_allocate.innerHTML = "Enter Correct Input";
        document.getElementById("registration").classList.add("wrong_input");
        document.getElementById("allocation").classList.add("wrong_input");
    }   
}

function current_time(){
    
    
}