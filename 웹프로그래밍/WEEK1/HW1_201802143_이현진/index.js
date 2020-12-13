var modal = document.getElementById("myModal");
var btn = document.getElementById("open_modal");
var modal_close_btn = document.getElementById("modal_close_btn");
var in_shopiing_cart = document.getElementById("in_shopping_cart");

btn.onclick = () => {
    modal.style.display = "block";
}

modal_close_btn.onclick = () => {
    modal.style.display = "none";
}

function validator() {
    

    var a = document.forms["enroll"]["enroll_image"].value;
    
    if (a=="") {
        alert("상품 이미지를 추가하시오.");
    } else {
        imageValidation();
        
    }
    
   
    
    var b = document.forms["enroll"]["enroll_name"].value;
    
    if (b=="") {
        alert("상품 이름을 입력하시오.");
    }
    if(!(isNaN(b)) && !(b=="")) {
        alert("문자로된 상품 이름을 입력하시오.");
    }
        
        
    

    var c = document.forms["enroll"]["enroll_price"].value;
    
    if (c=="") {
        alert("상품 가격을 입력하시오.")
    } 
    if(isNaN(c)) {
        alert("상품 가격에 숫자를 입력하시오.")
    }
    if(!(c=="") && c<1000) {
        alert("상품 가격을 1000원 이상으로 입력하시오.");
    }
        


    var d = document.forms["enroll"]["enroll_count"].value;
    
    if (d=="") {
        alert("상품 개수를 입력하시오.");
    }
    if (d==0 || d>50) {
        alert("최대 50개 이하로 선택하시오.");
    }

    
    
    radioCheck();


    var x = document.getElementById("normal_delivery").checked; 
    var y = document.getElementById("dawn_delivery").checked;
    if(a!="" && b!="" && c!="" && d!="" && x) {
        addRowNorml();
    }
    if(a!="" && b!="" && c!="" && d!="" && y) {
        addRowDawn();
    }
    modal.style.display = "none";
}


function radioCheck() {
    var x = document.getElementById("normal_delivery").checked 
    var y = document.getElementById("dawn_delivery").checked
    if(!(x || y)) {
        alert("배송 방법을 입력하시오.")
        
    }
    // document.getElementById("enroll_name").focus();
    
    
}


function addRowNorml() {
    if(imageValidation1() == true) {
        var tbody_normal = document.getElementById('tbody_normal');
    var row  = tbody_normal.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    var image = document.forms["enroll"]["enroll_image"].value;
    var price = document.forms["enroll"]["enroll_price"].value;
    var count = document.forms["enroll"]["enroll_count"].value;

    cell1.innerHTML = "<input type='checkbox' class='check1' checked></input>";
    
    cell2.innerHTML = "<img>"
    
    var imgsrc = document.forms["enroll"]["enroll_image"].value;
    var repimgsrc = imgsrc.split('\\');
    var realimg = "./img/" + repimgsrc[repimgsrc.length-1];
    cell2.firstChild.src = realimg;
    cell3.innerHTML = document.forms["enroll"]["enroll_name"].value;
    cell4.innerHTML = document.forms["enroll"]["enroll_price"].value;
    cell5.innerHTML = document.forms["enroll"]["enroll_count"].value;
    cell6.innerHTML = parseFloat(price) * parseFloat(count);
    cell6.classList.add('td6_normal');
    cell3.classList.toggle('name');
    cell4.classList.toggle('price');
    }
    
     
}

function addRowDawn() {
    if(imageValidation1() ==true) {
        var tbody_dawn = document.getElementById('tbody_dawn');
    var row  = tbody_dawn.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    var image = document.forms["enroll"]["enroll_image"].value;
    var price = document.forms["enroll"]["enroll_price"].value;
    var count = document.forms["enroll"]["enroll_count"].value;

    cell1.innerHTML = "<input type='checkbox' class='check2' checked></input>";
    cell2.innerHTML = "<img>"
    var imgsrc = document.forms["enroll"]["enroll_image"].value;
    var repimgsrc = imgsrc.split('\\');
    var realimg = "./img/" + repimgsrc[repimgsrc.length-1];
    cell2.firstChild.src = realimg;
    cell3.innerHTML = document.forms["enroll"]["enroll_name"].value;
    cell4.innerHTML = document.forms["enroll"]["enroll_price"].value;
    cell5.innerHTML = document.forms["enroll"]["enroll_count"].value;
    cell6.innerHTML = parseInt(price) * parseInt(count);
    cell6.classList.add('td6_dawn');
    cell3.classList.toggle('name');
    cell4.classList.toggle('price');
     
    }
}


const all1 = document.getElementById('select_all1');
all1.addEventListener('click', toggle1);
function toggle1() {
    const isChecked = all1.checked;
    Array.from(document.getElementsByClassName('check1')).forEach(Element =>{
        Element.checked = isChecked;
    });
   
}
const all2 = document.getElementById('select_all2');
all2.addEventListener('click', toggle2);
function toggle2() {
    const isChecked = all2.checked;
    Array.from(document.getElementsByClassName('check2')).forEach(Element =>{
        Element.checked = isChecked;
    })
}

setInterval(()=>{
    var x = document.getElementsByClassName('check1');
    Array.from(x).forEach(Element => {
        Element.addEventListener('click', uncheckAll1);
    });
    function uncheckAll1() {
        all1.checked = false;
    }
    function checkAll1() {
        all1.checked = true;
    }
    td6_value_check1();
    td6_value_check2();
    var y = document.querySelectorAll('#tbody_normal input');
    var z = document.querySelectorAll('#tbody_normal input:checked');

    if(y.length >0) {
        
        if( y.length == z.length ) {
            checkAll1();
        }
    }

    var a = document.getElementsByClassName('check2');
    Array.from(a).forEach(Element => {
        Element.addEventListener('click', uncheckAll2);
    });
    function uncheckAll2() {
        all2.checked = false;
    }
    function checkAll2() {
        all2.checked = true;
    }
   
    var b = document.querySelectorAll('#tbody_dawn input');
    var c = document.querySelectorAll('#tbody_dawn input:checked');
    
    if(b.length>0) {
        if( b.length == c.length) {
            checkAll2();
        }
    }
    // td6_value_check1();
    // td6_value_check2();
});

function td6_value_check1() {
    var td6_value = document.getElementsByClassName('td6_normal');
    var all_price = document.getElementById("all_price1");
    var y = document.querySelectorAll('#tbody_normal input');
    var normal_input= document.getElementsByClassName('check1');
    var sum =0;
    var arr = [];
    if(y == undefined) {all_price = 0};
    for(var i=0; i<td6_value.length; i++) {
        if(normal_input[i].checked){
            arr.push(parseFloat(td6_value[i].firstChild.data));   
        } 
    }
    
    for(var j=0; j<arr.length; j++) {
        
        sum += arr[j];
    }
    all_price.innerHTML = sum;
}

function td6_value_check2() {
    var td6_value = document.getElementsByClassName('td6_dawn');
    var all_price = document.getElementById('all_price2');
    var b = document.querySelectorAll('#tbody_dawn input');
    var normal_input = document.getElementsByClassName('check2');
    var sum = 0;
    var arr = [];
    if( b == undefined) {all_price = 0};
    for(var i=0; i<td6_value.length; i++) {
        if(normal_input[i].checked){
            arr.push(parseFloat(td6_value[i].firstChild.data));
        }
    }
    for(var j= 0; j<arr.length; j++) {
        sum += arr[j];
    }
    all_price.innerHTML = sum;
}
var select_delete1 = document.getElementById("select_delete1");
select_delete1.onclick = () => {
    var normal_table = document.getElementById('normal_table');
    var rowCnt = normal_table.rows.length;


    for(var i = 0; i<rowCnt; i++){
        var row = normal_table.rows[i];
        var chkBox = row.cells[0].childNodes[0];

        if(chkBox != null && chkBox.checked== true) {
            normal_table.deleteRow(i);
            rowCnt--;
            i--;
        }
    }
    
}
var select_delete2 = document.getElementById("select_delete2");
select_delete2.onclick = () => {
    var dawn_table = document.getElementById('dawn_table');
    var rowCnt = dawn_table.rows.length;


    for(var i = 0; i<rowCnt; i++){
        var row = dawn_table.rows[i];
        var chkBox = row.cells[0].childNodes[0];

        if(chkBox != null && chkBox.checked== true) {
            dawn_table.deleteRow(i);
            rowCnt--;
            i--;
        }
    }
    
}



function move_to_dawn_delivery() {
    var normal_table = document.getElementById("normal_table");
    var dawn_table = document.getElementById("dawn_table");
    var tbody_dawn = document.getElementById("tbody_dawn");
    var checkboxes = document.getElementsByClassName('check1');
    var tbody_normal = document.getElementById("tbody_normal")
  
    for(var i=0; i< checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            var newRow = tbody_dawn.insertRow(-1);
                cell1 = newRow.insertCell(0);
                cell2 = newRow.insertCell(1);
                cell3 = newRow.insertCell(2);
                cell4 = newRow.insertCell(3);
                cell5 = newRow.insertCell(4);
                cell6 = newRow.insertCell(5);
                cell1.innerHTML = normal_table.rows[i+1].cells[0].innerHTML;
                // "<input type='checkbox' class='check2' checked></input>";
                cell2.innerHTML = normal_table.rows[i+1].cells[1].innerHTML;
                cell3.innerHTML = normal_table.rows[i+1].cells[2].innerHTML;
                cell4.innerHTML = normal_table.rows[i+1].cells[3].innerHTML;
                cell5.innerHTML = normal_table.rows[i+1].cells[4].innerHTML;
                cell6.innerHTML = normal_table.rows[i+1].cells[5].innerHTML;
            
                cell1.firstChild.classList.toggle("check1");
                cell1.firstChild.classList.toggle("check2");
                cell6.classList.remove('td6_noraml');
                cell6.classList.add('td6_dawn');
                cell3.classList.add('name');
                cell4.classList.add('price');
                // var index = tbody_normal.rows[i].rowIndex;
                tbody_normal.deleteRow(i);
                i--;     
        }
    }
}

function move_to_normal_delivery() {
    var dawn_table = document.getElementById("dawn_table");
    var tbody_normal = document.getElementById("tbody_normal");
    var tbody_dawn = document.getElementById("tbody_dawn");
    var checkboxes = document.getElementsByClassName("check2");
    for(var i = 0; i <checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            var newRow = tbody_normal.insertRow(-1);
                cell1 = newRow.insertCell(0);
                cell2 = newRow.insertCell(1);
                cell3 = newRow.insertCell(2);
                cell4 = newRow.insertCell(3);
                cell5 = newRow.insertCell(4);
                cell6 = newRow.insertCell(5);
                cell1.innerHTML = dawn_table.rows[i+1].cells[0].innerHTML;
                // "<input type='checkbox' class='check1' checked></input>";
                cell2.innerHTML = dawn_table.rows[i+1].cells[1].innerHTML;
                cell3.innerHTML = dawn_table.rows[i+1].cells[2].innerHTML;
                cell4.innerHTML = dawn_table.rows[i+1].cells[3].innerHTML;
                cell5.innerHTML = dawn_table.rows[i+1].cells[4].innerHTML;
                cell6.innerHTML = dawn_table.rows[i+1].cells[5].innerHTML;
                cell1.firstChild.classList.toggle("check2");
                cell1.firstChild.classList.toggle("check1");
                cell6.classList.remove('td6_dawn');
                cell6.classList.add('td6_normal');
                cell3.classList.add('name');
                cell4.classList.add('price');
                tbody_dawn.deleteRow(i);
                i--;
        }
    }
}

var search = document.getElementById("search");
search.addEventListener('click', ()=> {
    var product_name = document.getElementById("product_name");
    var name = document.getElementsByClassName("name");
    var price = document.getElementsByClassName("price");
    var price_range1 = document.getElementById("price_range1");
    var price_range2 = document.getElementById("price_range2");
    // console.log(price_range1.value);
    for(var i = 0; i < name.length; i++) {
        if(name[i].innerHTML == product_name.value && price_range1.value == "" && price_range2.value == "") {
            name[i].parentNode.style.color = "red";
            name[i].parentNode.style.fontSize = "20px";
            name[i].parentNode.style.fontWeight = "600";
        } 
        else if(name[i].innerHTML == product_name.value && price_range1.value != "" && price_range2.value =="") {
            if(price[i].innerHTML >= price_range1.value) {
            name[i].parentNode.style.color = "red";
            name[i].parentNode.style.fontSize = "20px";
            name[i].parentNode.style.fontWeight = "600";
            } 
        }
        else if(name[i].innerHTML == product_name.value && price_range1.value != "" && price_range2.value != "") {
            if (price[i].innerHTML >= price_range1.value && price[i].innerHTML <= price_range2.value) {
            name[i].parentNode.style.color = "red";
            name[i].parentNode.style.fontSize = "20px";
            name[i].parentNode.style.fontWeight = "600";
            }
        }
    }
});
 
var change_before = document.getElementById("change_before");
change_before.addEventListener('click', ()=> {
    var name = document.getElementsByClassName("name");
    for(var i= 0; i <name.length; i++) {
        name[i].parentNode.style.color = "black";
        name[i].parentNode.style.fontSize = "16px";
        name[i].parentNode.style.fontWeight = "400";
    }
});


function imageValidation() {
    var a = document.forms["enroll"]["enroll_image"].value;
    var c = a.split('.');
    if(c[c.length-1] == "jpg") {return true;}
    if(c[c.length-1] == "jpeg") {return true;}
    if(c[c.length-1] == "png") {return true;}
    alert("이미지 화일이 아닙니다.'jpg','jpeg',또는'png'을 확장자로 가진 화일을 추가하시오.");
    return false;
}

function imageValidation1() {
    var a = document.forms["enroll"]["enroll_image"].value;
    var c = a.split('.');
    if(c[c.length-1] == "jpg") {return true;}
    if(c[c.length-1] == "jpeg") {return true;}
    if(c[c.length-1] == "png") {return true;}
    // alert("이미지 화일이 아닙니다.'jpg','jpeg',또는'png'을 확장자로 가진 화일을 추가하시오.");
    return false;
}



