
    function opentab(tabName) {
        let i;
        const tabContents = document.getElementsByClassName("tab-contents");
        const tabLinks = document.getElementsByClassName("tab-links");
        
        for (i = 0; i < tabContents.length; i++) {
            tabContents[i].style.display = "none";
        }
        
        for (i = 0; i < tabLinks.length; i++) {
            tabLinks[i].classList.remove("active-link");
        }
        
        document.getElementById(tabName).style.display = "block";
        event.currentTarget.classList.add("active-link");
    }
    // By default, show the "Skills" tab
    document.getElementById("Skills").style.display = "block";

    
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        fetch('YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL', {
            method: 'POST',
            mode: 'no-cors',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                alert('Message sent successfully');
                form.reset();
            } else {
                alert('Error sending message');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error sending message');
        });
    });
