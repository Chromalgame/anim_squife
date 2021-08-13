const svg = document.querySelectorAll('.svg_logo_1');

svg.forEach(element => {
    element.addEventListener('click', () =>{
        for(i = 0; i < element.childNodes.length; i++){
            if(element.childNodes[i].nodeName != "#text"){
                element.childNodes[i].classList.toggle('active'); 
                element.classList.toggle('active'); 
            }
        }
    })
});