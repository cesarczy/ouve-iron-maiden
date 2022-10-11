function move(btnMove) {
    let div = document.getElementsByClassName("container-button");

    let wdhCeil = Math.ceil(btnMove.clientWidth);
    let hgtCeil = Math.ceil(btnMove.clientHeight);

    let wdhFloor = Math.floor(div[0].clientHeight);
    let hgtFloor = Math.floor(div[0].clientWidth);

    let changeLeft = Math.floor((Math.random() * (hgtFloor - wdhCeil + 1)));
    let changeTop = Math.floor((Math.random() * (wdhFloor - hgtCeil + 1)));
    console.log("Height: " + changeTop + " Width: " + changeLeft);

    btnMove.style.marginTop = changeTop + "px";
    btnMove.style.marginLeft = changeLeft + "px";
}

function setPhoto() {
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "none";
    document.getElementById("maiden").innerHTML = "<img src ='img/IM.jpg' width='500'>";
    playSound();
}

function playSound() {
    let sound = new Audio("sound.mp3");
    sound.play();
}