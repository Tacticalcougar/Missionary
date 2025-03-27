document.querySelectorAll('nav a').forEach(link => {

        link.addEventListener('click', function(e) {
    
            e.preventDefault();
    
            const targetId = this.getAttribute('href').substring(1);
    
            const targetElement = document.getElementById(targetId);
    
    
    
            if (targetElement) {
    
                document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    
                targetElement.classList.add('active');
    
            }
    
        });
    
    });