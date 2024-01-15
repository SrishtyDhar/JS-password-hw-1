// navbar

let menubtn = document.querySelector('.nav-btn');
let sidebar = document.querySelector('.sidebar');
let sidebarIcon = document.querySelector('.sidebar-icon');


function showSidebar () {
sidebar.classList .add('active');
}

menubtn.addEventListener('click', showSidebar );



function hideSidebar(event){
    console.log(event.target.classList.contains('sidebar-icon,'));
    if (event.target.classList.contains('sidebar-icon') || 
    event.target.classList.contains('sidebar')){
        sidebar.classList .remove('active');
    } 
}

sidebarIcon.addEventListener('click',hideSidebar);
sidebar.addEventListener('click', hideSidebar);

// navbar

// password

let hiddenEye = document.querySelector('.hidden-eye');
let passwordInput = document.querySelector('input');



function showHidePassword() {
    
    if(passwordInput.type == 'password'){
        passwordInput.type = 'text';
        hiddenEye.innerHTML = '<i class="bi bi-eye"></i>';
    } else{
    passwordInput.type = 'password';
    hiddenEye.innerHTML = '<i class="bi bi-eye-slash"></i>';
    }
}

hiddenEye.addEventListener('click', showHidePassword);




let submitBtn = document.querySelector('.sub-btn');

function submitForm(){
    if(passwordInput.value.length > 0){
        submitBtn.innerHTML = 'Success <i class="bi bi-check2-all"></i>';
    } else{
        submitBtn.innerHTML = 'Error <i class="bi bi-exclamation-circle-fill"></i>';
    }
}

submitBtn.addEventListener('click', submitForm);


// password