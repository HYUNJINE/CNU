var add_btn = document.getElementById("add_btn");
add_btn.addEventListener('click', ()=> {
    var ordered_list = document.getElementsByTagName('ol');
    var write = document.getElementById("write");
    var element = document.createElement("li");
    var text = document.createTextNode(write.value);
    ordered_list[0].appendChild(element);
    element.appendChild(text);
    element.addEventListener('click', () => {
        var type = prompt("삭제는1, 수정은 2를 입력하세요.");
        if(type == null) {
            alert("취소되었습니다.")
        }else if(type == "") {
            alert("번호를 입력하지 않으셨습니다.")
        }else if(type == 1) {
            element.remove();
        }else if(type == 2) {
            var change = prompt("변경할 내용을 입력하세요.");
            if(change !=null && change !="" ){
                text.nodeValue = change;
            }
        }else {
            alert("번호를 잘못 입력하셨습니다.");
        }
    })
    
})

