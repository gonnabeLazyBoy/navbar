const navbarBtn = document.querySelector('.navbar-btn'),
      navbarList = document.querySelector('.navbar-list'),
      navbar = document.querySelector('.navbar');

      navbarBtn.addEventListener('click', function(){
          
        if (navbarBtn.classList == 'active' && navbarList.classList == 'active') {
            navbarBtn.classList.remove('active')
            navbarList.classList.remove('active')
        } else {
            navbarBtn.classList.toggle('active')
            navbarList.classList.toggle('active')
            navbarBtn.style.zIndex = '99'
            
        }
        
      })