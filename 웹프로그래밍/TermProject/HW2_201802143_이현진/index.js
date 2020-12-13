const modal = document.getElementById("myModal");
const modal2 = document.getElementById("myModal2");
const btn = document.getElementById("join_btn");
const modal_close_btn = document.getElementById("modal_close_btn");
const in_shopiing_cart = document.getElementById("in_shopping_cart");
const sign_in = document.getElementById("sign_in");
const login_id = document.getElementById("login_id");
const login_password = document.getElementById("login_password");
const action_form = document.action_form;


function id_password_validation() {
    const id_regx = /^([A-Za-z0-9]){6,15}/;
    const pw_regx = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*/;

    if(id_regx.test(login_id.value) && pw_regx.test(login_password.value)) {
        return true;

    }
    else {
        
        return false;
    }
}


btn.onclick = () => {
    modal.style.display = "block";
}

// modal_close_btn.onclick = () => {
//     modal.style.display = "none";
// }
// sign_in.addEventListener('click', ()=>{
//     id_password_validation();
// })



 //만약에 아이디 패스워드의 조건을 충족하면 보내고 충족하지 않으면 alert
    


 const month = document.getElementById("month");
 const now = new Date(); 
 month.innerHTML =(now.getFullYear())+"년 "+(now.getMonth()+1)+"월";



 const add_btn = document.getElementById("add_btn");
add_btn.onclick =() => {
    modal2.style.display = "block";
}



const Save = document.getElementById("Save");
Save.onclick =() =>{
    alert("저장되었습니다.")
}




