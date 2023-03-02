 let btn = document.querySelector(`nav .button`)
 let sidebar = document.querySelector(`.sidebar`) 
 console.log(`.sidebar`)
 function  sidebarToggler(){
    sidebar.classList.toggle(`active`)
    if(sidebar.classList.contains(`active`) == true){
    btn.innerHTML =`<i class="bi bi-x-lg"></i>`;
    }
    else{
        btn.innerHTML = `<i class="bi bi-list"></i>`;
    }    
    
}


 btn.addEventListener(`click`, sidebarToggler);