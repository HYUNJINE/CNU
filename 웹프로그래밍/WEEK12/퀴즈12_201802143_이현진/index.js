const show_btn  = document.getElementById("show_btn"); 
show_btn.addEventListener('click',()=>{
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.font = "italic bold 40px Georgia serif";
    ctx.fillStyle = "blue";
    ctx.fillText("Merry Christmas!!",150,60);


    ctx.lineWidth = 3;
    ctx.strokeStyle = "red"
    ctx.beginPath();
    ctx.arc(82,50,40,0,2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(62,70);
    ctx.lineTo(102,70);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(62,40,12,0,Math.PI,true);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(102,40,12,0,Math.PI,true);
    ctx.stroke();

    var v = document.getElementById("video");
    var i ;

    // v.addEventListener('play',function() {i=window.setInterval(function() {ctx.drawImage(v,50,120,700,500)},20);},false);

    v.addEventListener("play", ()=> {
        setInterval(()=>{
            ctx.drawImage(v,50,120,700,500) ;
            ctx.shadowColor = 'rgba(0,0,0,0.5)';
            ctx.shadowOffsetX = 10;
            ctx.shadowOffsetY = 10;
        },20)
    })

    v.play();






})



