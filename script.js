


let tablinks = [document.querySelector('.tab-links')];
let tabcontents = [document.querySelector('.tab-contents')];
let tabtitles = document.querySelector('.tab-titles')

// function opentab(){
//     tablinks.classList.add('active-link')
// }

function opentab(tabname){
    for(link of tablinks){
        link.classList.remove('active-link')
    }
    for(contents of tabcontents){
        contents.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab')
}


// const tablinks = document.querySelectorAll('.tab-links');
// tablinks.forEach = ()=>{
//     onclick = ()=>{
//         tabcontents.classList.toggle('active-link')
//     }
// }

 let sidemenu = document.getElementById('sidemenu')

    function openmenu(){
       sidemenu.style.right = '0'
       document.getElementById('close').style.display = 'block'
    }
    function closemenu(){
        sidemenu.style.right = '-200px'
        document.getElementById('close').style.display = 'none'
        document.getElementById('close').style.position = 'fixed'

    }
