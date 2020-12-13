
const week  = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const today = new Date();
const todayLable = week[today.getDay()];
const Sun = document.getElementById("Sun");
const Mon = document.getElementById("Mon");
const Tue = document.getElementById("Tue");
const Wed = document.getElementById("Wed");
const Thu = document.getElementById("Thu");
const Fri = document.getElementById("Fri");
const Sat = document.getElementById("Sat");
switch(todayLable) {
    case 'Sun' : 
        Sun.innerHTML= today.getDate()+"<span class='redColor'>(Sun)</span>";
        Mon.innerHTML= today.getDate()+1+"<span class='redColor'>(Mon)</span>";
        Tue.innerHTML= today.getDate()+2+"<span class='redColor'>(Tue)</span>";
        Wed.innerHTML= today.getDate()+3+"<span class='redColor'>(Wed)</span>";
        Thu.innerHTML= today.getDate()+4+"<span class='redColor'>(Thu)</span>";
        Fri.innerHTML= today.getDate()+5+"<span class='redColor'>(Fri)</span>";
        Sat.innerHTML= today.getDate()+6+"<span class='redColor'>(Sat)</span>";
        break;
    case 'Mon' :
        Sun.innerHTML= today.getDate()-1+"<span class='redColor'>(Sun)</span>";
        Mon.innerHTML= today.getDate()+"<span class='redColor'>(Mon)</span>";
        Tue.innerHTML= today.getDate()+1+"<span class='redColor'>(Tue)</span>";
        Wed.innerHTML= today.getDate()+2+"<span class='redColor'>(Wed)</span>";
        Thu.innerHTML= today.getDate()+3+"<span class='redColor'>(Thu)</span>";
        Fri.innerHTML= today.getDate()+4+"<span class='redColor'>(Fri)</span>";
        Sat.innerHTML= today.getDate()+5+"<span class='redColor'>(Sat)</span>";
        break;
    case 'Tue' :
        Sun.innerHTML= today.getDate()-2+"<span class='redColor'>(Sun)</span>";
        Mon.innerHTML= today.getDate()-1+"<span class='redColor'>(Mon)</span>";
        Tue.innerHTML= today.getDate()+"<span class='redColor'>(Tue)</span>";
        Wed.innerHTML= today.getDate()+1+"<span class='redColor'>(Wed)</span>";
        Thu.innerHTML= today.getDate()+2+"<span class='redColor'>(Thu)</span>";
        Fri.innerHTML= today.getDate()+3+"<span class='redColor'>(Fri)</span>";
        Sat.innerHTML= today.getDate()+4+"<span class='redColor'>(Sat)</span>";
        break;
    case 'Wed' :
        Sun.innerHTML= today.getDate()-3+"<span class='redColor'>(Sun)</span>";
        Mon.innerHTML= today.getDate()-2+"<span class='redColor'>(Mon)</span>";
        Tue.innerHTML= today.getDate()-1+"<span class='redColor'>(Tue)</span>";
        Wed.innerHTML= today.getDate()+"<span class='redColor'>(Wed)</span>";
        Thu.innerHTML= today.getDate()+1+"<span class='redColor'>(Thu)</span>";
        Fri.innerHTML= today.getDate()+2+"<span class='redColor'>(Fri)</span>";
        Sat.innerHTML= today.getDate()+3+"<span class='redColor'>(Sat)</span>";
        break;
    case 'Thu' :
        Sun.innerHTML= today.getDate()-4+"<span class='redColor'>(Sun)</span>";
        Mon.innerHTML= today.getDate()-3+"<span class='redColor'>(Mon)</span>";
        Tue.innerHTML= today.getDate()-2+"<span class='redColor'>(Tue)</span>";
        Wed.innerHTML= today.getDate()-1+"<span class='redColor'>(Wed)</span>";
        Thu.innerHTML= today.getDate()+"<span class='redColor'>(Thu)</span>";
        Fri.innerHTML= today.getDate()+1+"<span class='redColor'>(Fri)</span>";
        Sat.innerHTML= today.getDate()+2+"<span class='redColor'>(Sat)</span>";
        break;
    case 'Fri' :
        Sun.innerHTML= today.getDate()-5+"<span class='redColor'>(Sun)</span>";
        Mon.innerHTML= today.getDate()-4+"<span class='redColor'>(Mon)</span>";
        Tue.innerHTML= today.getDate()-3+"<span class='redColor'>(Tue)</span>";
        Wed.innerHTML= today.getDate()-2+"<span class='redColor'>(Wed)</span>";
        Thu.innerHTML= today.getDate()-1+"<span class='redColor'>(Thu)</span>";
        Fri.innerHTML= today.getDate()+"<span class='redColor'>(Fri)</span>";
        Sat.innerHTML= today.getDate()+1+"<span class='redColor'>(Sat)</span>";
        break;
    case 'Sat' :
        Sun.innerHTML= today.getDate()-6+"<span class='redColor'>(Sun)</span>";
        Mon.innerHTML= today.getDate()-5+"<span class='redColor'>(Mon)</span>";
        Tue.innerHTML= today.getDate()-4+"<span class='redColor'>(Tue)</span>";
        Wed.innerHTML= today.getDate()-3+"<span class='redColor'>(Wed)</span>";
        Thu.innerHTML= today.getDate()-2+"<span class='redColor'>(Thu)</span>";
        Fri.innerHTML= today.getDate()-1+"<span class='redColor'>(Fri)</span>";
        Sat.innerHTML= today.getDate()+"<span class='redColor'>(Sat)</span>";
        break;
}

const colorChange = document.getElementsByClassName("redColor");

for(var i = 0; i < colorChange.length; i++) {
    colorChange[i].style.color = "red";
}


// fetch('./data/daf32423.json').then(function(response){
//     return response.json();
// }).then(function(myJson)) {
//     console.log(JSON.stringify(myJson));
// }












const logout_btn = document.getElementById("logout_btn");
logout_btn.addEventListener('click', ()=>{
    alert('로그아웃이 되었습니다.');
    window.location.href = './index.php';
})