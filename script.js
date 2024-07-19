
 function myFunction() {
            var element = document.body;
    element.classList.toggle("dark-mode");
        }

        //togglr b/w imgss
   const img = document.getElementById('imagesclick');
   //listner
   let toggle = true;
   img.addEventListener('click',function(){
    toggle = !toggle;
    if(toggle){
        img.src ='getstartedimg\\icons8-light-mode-40.png';
    }else{
        img.src = 'getstartedimg\\icons8-moon-30.png'
    }
    // img.src = 'getstartedimg\\icons8-moon-40.png';
   })