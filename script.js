document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const panels = document.querySelectorAll('.testimonial-panel');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            //========= Remove kre  active class from all tabs se ===========
            tabs.forEach(t => t.classList.remove('active'));
            
            //=========  Add active class jo h vo  clicked tab show kre ===========
            this.classList.add('active');
            
            //==========  Hide all panels ke liye ===========
            panels.forEach(panel => panel.classList.remove('active'));


            
            const tabId = this.getAttribute('data-tab');
            document.getElementById(`${tabId}-panel`).classList.add('active');
        });
    });
});