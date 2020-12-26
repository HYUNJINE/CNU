


const table = document.getElementById("table");
const adult = document.getElementById("adult");
const youth = document.getElementById("youth");



let talberowcount =0;
let charcode = 65;

for(var i = 0; i<11; i++) {
    talberowcount +=1;
    let tr = document.createElement("tr");
    table.appendChild(tr);
    for(var j= 0; j<11; j++) {
        let td = document.createElement("td");
        if(talberowcount==1) {
            if(j==0&&i==0) ;
            else{td.innerHTML= j;}

        }
        else if(i!=0 && j ==0){
            td.innerHTML= String.fromCharCode(charcode);
            charcode++;
        }
        else if(i!=0 && j!=0 && j%2==0 && i%2==1) {
            td.innerHTML= "x";
            td.style.backgroundColor="grey";
            td.classList.add("cannot");
        }
        else if(i!=0 && j!=0 && j%2==1 && i%2==0) {
            td.innerHTML= "x"
            td.style.backgroundColor="grey";
            td.classList.add("cannot");
        }
        if(!td.classList.contains('cannot')){
            td.classList.add("can");
        }
        // console.log(1);
        tr.appendChild(td);
        td.addEventListener('click' , ()=>{
            
            
            if(youth.value ==0 && adult.value==0 ) {
                alert("인원을 1명 이상 입력해주세요.")
                return;
            }
            if(youth.value + adult.value >=1 &&td.className=='cannot') {
                alert("선택할 수 없는 좌석입니다.")
                return;
            }
            if(td.classList.contains('can')) {
                // td.style.backgroundColor="blue";
                td.classList.toggle("makeblue");
                td.classList.toggle("selected");
            }
            
        })
    }
}

const yeme = document.getElementById("yeme");
yeme.addEventListener('click', ()=>{
    let tdcount = document.querySelectorAll('.makeblue');
    // console.log(tdcount.length); 
    // console.log(youth.value+adult.value);       
    if(parseInt(youth.value)  + parseInt(adult.value)  > tdcount.length) {
        alert("좌석을 모두 선택하여 주세요");
        return;
    }
    let cancount = document.querySelectorAll(".can").length;
    

    // if(cancount - selectedcount <youth.value + adult.value ) {
    //     alert("인원을 다시 입력해 주세요");
    //     return;
    // }
    if(parseInt(youth.value)  + parseInt(adult.value) == tdcount.length) {

        let turntored = document.querySelectorAll(".selected");
        for(var i = 0; i<turntored.length; i++) {
            turntored[i].classList.toggle("makeblue");
            turntored[i].classList.toggle("makered");
            
            
        }
        maketable();
        return;
    }
    let redcount = document.querySelectorAll(".makered").length;
    // let selectedcount = document.querySelector("selected").length;
    if(cancount - redcount < parseInt(youth.value)  + parseInt(adult.value) ) {
        alert("인원을 다시 입력해주세요");
    }

})


function maketable() {
    const table2 = document.getElementById("table2");
    let tr = document.createElement("tr");
    table2.appendChild(tr);
    td1= document.createElement("td");
    td2= document.createElement("td");
    td3= document.createElement("td");
    td4= document.createElement("td");
    td5= document.createElement("td");
    let price=parseInt(youth.value)*9000  + parseInt(adult.value)*8000;
    td5.innerHTML= price;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    td1.innerHTML= "<input type='checkbox'>"


}

const cancel = document.getElementById("cancel");
cancel.addEventListener('click', ()=>{
    
})