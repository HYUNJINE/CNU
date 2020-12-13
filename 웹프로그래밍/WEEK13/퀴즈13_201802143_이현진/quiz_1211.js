const gogo_btn = document.getElementById("gogo");
const current = document.getElementById("current");
gogo_btn.addEventListener('click', ()=>{
    if(!confirm('이벤트에 참여하시겠습니까?')) {
        alert("이벤트 참여를 취소했습니다.")
    }else {
        // if(null==prompt("성함을 입력해주세요")) {
        //     alert("이벤트 참여를 취소했습니다.");
            
        // }
        // else if()

        
        const temp = prompt("성함을 입력해주세요");
        if(temp == null){
            alert("이벤트 참여를 취소했습니다.");
        }
        if(temp == "") {
            alert("다시 참여해주세요");
        }
        else {
            current.innerHTML=temp+"님 이벤트에 참가해주셔서 감사합니다.";
        }
     
    }
})


// console.log(prompt("hi"));
