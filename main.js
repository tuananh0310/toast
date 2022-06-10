function toast({ title ='', message = '', type = 'info', duration = 3000}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');
        // auto Remove Toast
        const  autoRemove = setTimeout(() => {
            main.removeChild(toast);
        }, duration + 1000);
        // remove when clicked
        toast.onclick = function(e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemove);
            }
        }

        const icons = {
            success: 'fas fa-circle-check',
            info: 'fas fa-exclamation-circle'
        }
        const icon = icons[type];
        const delay = (duration/1000).toFixed(2);
        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = ` slideInleft ease .3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
        <div class="toast__icon">
        <i class="${icon}"></i>
      </div>
      <div class="toast__body">
        <h3 class="toast__title">${title}</h3>
        <p class="toast__msg">${message}</p>
      </div>
      <div class="toast__close">
        <i class="fa-solid fa-circle-xmark"></i>
      </div>
        `;
        main.appendChild(toast);
        
    }
}



function showSuccess() {
    toast({ 
        title: 'Success',
        message: 'zzzzzzzzzzzzzzzzzzzzzz ok',
        type:'success',
        duration: 5000
    });
}

function showInfo() {
    toast({ 
        title: 'Error',
        message: 'Not ok',
        type:'info',
        duration: 5000
    });
}
