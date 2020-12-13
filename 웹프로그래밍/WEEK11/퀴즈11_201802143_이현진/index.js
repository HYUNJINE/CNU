function StudentInfo(name, Korean, Math, English, Society, History) {
    this.name = name;
    this.Korean = Korean;
    this.Math = Math;
    this.English = English;
    this.Society = Society;
    this.History = History;
 }
 const a = document.getElementsByClassName("name");
     
 const b = document.getElementsByClassName("Korean");
 
 const c = document.getElementsByClassName("Math");
 
 const d = document.getElementsByClassName("English");
 
 const e = document.getElementsByClassName("Society");
 
 const f = document.getElementsByClassName("History");

 const infoArray = [];
window.onload = ()=> {
    
     for(var i = 0; i < a.length; i++) {
         var person = new StudentInfo(a[i].innerHTML,b[i].innerHTML,c[i].innerHTML,d[i].innerHTML,e[i].innerHTML,f[i].innerHTML);
         infoArray.push(person);
     }
     var table = document.getElementsByTagName("table");
     table[0].classList.add("hide");
}



// StudentInfo.prototype.avg = function() {
//         var avg = sum/count;
        
//         sum=0;
//         count=0;
//         return avg;
// }

StudentInfo.prototype.avg = function() {
    const student_name = document.getElementById("student_name").value;
    var Korean = document.getElementById("Korean");
    var Math = document.getElementById("Math");
    var English = document.getElementById("English");
    var Society = document.getElementById('Society');
    var History = document.getElementById("History"); 
    if(student_name == "" && (Korean.checked||Math.checked||English.checked||Society.checked||History.checked)){
        if(Korean.checked) {
            for(var i = 0; i<7; i++) {
                sum=sum+ parseFloat(b[i].innerHTML);
            }
            count= count+7;
        }
        if(Math.checked) {
            for(var i = 0; i<7; i++) {
                sum=sum+ parseFloat(c[i].innerHTML);
            }
            count= count+7;
        }
        if(English.checked) {
            for(var i = 0; i< 7; i++) {
                sum=sum+ parseFloat(d[i].innerHTML);
            }
            count= count+7;
        }
        if(Society.checked) {
            for(var i = 0; i<7; i++) {
                sum=sum+ parseFloat(e[i].innerHTML);
            }
            count= count+7;
        }
        if(History.checked) {
            for(var i = 0; i<7; i++) {
                sum=sum+ parseFloat(f[i].innerHTML);
            }
            count= count+7;
        }
        var avg = sum/count;
        avg =avg.toFixed(1);
        sum=0;
        count=0;
        return avg;
    }
    else {
        var avg = sum/count;
        
        sum=0;
        count=0;
        return avg;
    }
}

let sum = 0; 
let count = 0;
const submit_btn = document.getElementById("submit_btn");
submit_btn.addEventListener("click", ()=> {
    


    var Korean = document.getElementById("Korean");
    var Math = document.getElementById("Math");
    var English = document.getElementById("English");
    var Society = document.getElementById('Society');
    var History = document.getElementById("History");    
    const student_name = document.getElementById("student_name").value;
if(student_name == "" && (Korean.checked||Math.checked||English.checked||Society.checked||History.checked)){
    let average = StudentInfo.prototype.avg();
    alert("The average of all students' subject grades is +"+average);
    return;
}
if(check_student_name(student_name)){
    
    let index=0;
    for(var j = 0; j < a.length; j++) {
        if(a[j].textContent==student_name) {
            index = j;
        }
    }

    
    if(Korean.checked) {
        sum = sum + parseInt(b[index].textContent);
        console.log(sum);
        count++
    }
    if(Math.checked) {
        sum += parseInt(c[index].textContent);
        console.log(sum);
        count++
    }
    if(English.checked) {
        sum += parseInt(d[index].textContent);
        count++
    }
    if(Society.checked) {
        sum += parseInt(e[index].textContent);
        count++
    }
    if(History.checked) {
        sum += parseInt(f[index].textContent);
        console.log(sum);
        count++
    }
    
    let average = StudentInfo.prototype.avg();
    average = average.toFixed(1);
    if(!Korean.checked&&!Math.checked&&!English.checked&&!Society.checked&&!History.checked)
        alert("Please select a subject of subjects");
    else
        alert("Student's name is " + student_name+ ", Average is" + average);
}
else {
    console.log(student_name);
    console.log(typeof student_name);
    alert("This name does not exist.");

}
    


})




function check_student_name(student_name) {
    console.log(student_name);
    for(var i = 0; i< infoArray.length; i++) {
        if(infoArray[i].name == student_name){
            return true;
        }
            
        
    }

    return false

}