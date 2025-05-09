document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.querySelector('.close-btn');
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.container');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
            container.classList.toggle('sidebar-collapsed');
        });
    }

    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const requiredInputs = form.querySelectorAll('input[required]');
            let isValid = true;

            requiredInputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('input-danger');
                } else {
                    input.classList.remove('input-danger');
                }
            });

            if (isValid) {
                alert('Form submitted successfully!');
            }
        });
    });

    const labels = document.querySelectorAll('label');
    
    labels.forEach(label => {
        if (label.textContent.includes('*')) {
            const inputId = label.getAttribute('for');
            if (inputId) {
                const input = document.getElementById(inputId);
                if (input) {
                    input.setAttribute('required', 'required');
                }
            }
        }
    });
});