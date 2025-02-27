

document.addEventListener("click",function(e){
    if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
})

function downloadImage() {
    const imageUrl = document.getElementById('img').src;
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = ''; // Set filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}