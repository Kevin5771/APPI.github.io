const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImgBox.classList.add("show");
    fulImg.src = reference
}
function closeImg(){
    fulImgBox.style.display = "none";
}