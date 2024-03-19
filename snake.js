let snake_lis = document.querySelectorAll(".snake-menu li");


function removeActive(elements) {
    elements.forEach(e => {
        
        e.addEventListener("click",e=>{
            
            // remove the active class 
        elements.forEach(element => {
            element.classList.remove("active");
        });

        e.target.classList.add("active");
        })
    
    })
}
removeActive(snake_lis);