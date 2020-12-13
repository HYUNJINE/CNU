// var timer = document.getElementById("timer");
// var time = 0;
// var x = setInterval(() => {
//     time =time+1;
//     timer.innerHTML(time);
//     if(time = 40) {
//         clearInterval(x);
//         timer.innerHTML(time);
//         alert();
//     }
// }, 1000);


var w;

function startWorker() {
    var imageAdd = document.getElementById("imageAdd");
    var timerStart = document.getElementById("timerStart");
    imageAdd.removeAttribute('disabled');
    timerStart.setAttribute('disabled',true);
    
  if (typeof(Worker) !== "undefined") {
    if (typeof(w) == "undefined") {
      w = new Worker("worker.js");
    }
    w.onmessage = function(event) {
      document.getElementById("result").innerHTML = event.data;
      if(event.data == 40) {
          alert("A 장바구니:"+sessionStorage.A+ ", B 장바구니:"+sessionStorage.B);
          stopWorker();
          timerStart.removeAttribute('disabled');
          imageAdd.setAttribute('disabled',true);
      }

    };
  } else {
    document.getElementById("result").innerHTML = "Sorry! No Web Worker support.";
  }
}

function stopWorker() {
  w.terminate();
  w = undefined;
}

function enrollImage() {
    // const image = document.getElementById("fileSelect");
    // console.log(image);
    var file =document.getElementById("fileSelect").files;
    var filename = file[0].name;
    console.log(file[0].name);
    return filename;
}

function setImage(event) {
    var filename = enrollImage();
    var img = document.createElement("img");
    img.setAttribute("src", filename);
    document.querySelector("div#image_container").appendChild(img);
    // for (var image of event.target.files) { 
    //     var reader = new FileReader();
    //      reader.onload = function(event) {
    //           var img = document.createElement("img"); 
    //           img.setAttribute("src", event.target.result);
    //            document.querySelector("div#image_container").appendChild(img);
    //          };
    //             console.log(image);
    //              reader.readAsDataURL(image); }
                 }



function allowDrop(ev) {
ev.preventDefault();
}

function drag(ev) {
ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
ev.preventDefault();
var data = ev.dataTransfer.getData("text");
// console.log(typeof data)
console.log(data);

// console.log(document.getElementById(data));

// var img = document.createElement('img');
// img.setAttribute("src",data);
// ev.target.appendChild(img);
ev.target.appendChild(document.getElementById(data));
}


setInterval(() => {

    var images = document.getElementsByTagName('img');
    // console.log(images);
    for(var i = 0 ; i < images.length; i++ ) {
        images[i].setAttribute("draggable",true);
        images[i].setAttribute("ondragstart", "drag(event)");
        images[i].setAttribute("id",i );

    
}



imageCounter();
}, 0);




function imageCounter() {
    if (typeof(Storage) !== "undefined") {
      if(!sessionStorage.A){
          sessionStorage.A= 0;
      }else {
          var count = document.querySelectorAll("#baguni1 img");
          sessionStorage.A=count.length;
      }
    }

    if (typeof(Storage) !== "undefined") {
        if(!sessionStorage.B){
            sessionStorage.B= 0;
        }else {
            var count = document.querySelectorAll("#baguni2 img");
            sessionStorage.B=count.length;
        }
      }
  }




//   if (sessionStorage.clickcount) {
//     sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
//   } else {
//     sessionStorage.clickcount = 1;
//   }
// } else {
//   document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";