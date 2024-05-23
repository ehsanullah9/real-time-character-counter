const textareaEl = document.getElementById('textarea');
const tcEl =document.querySelector('.Tc');
const rcEl =document.querySelector('.Rc');
textareaEl.addEventListener('keyup' ,()=>{
    tcEl.innerText = textareaEl.value.length;
 
    rcEl.innerText = textareaEl.getAttribute('maxlength')-textareaEl.value.length;
    
})