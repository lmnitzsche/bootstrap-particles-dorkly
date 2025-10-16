document.addEventListener("DOMContentLoaded", function() {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 600, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#0d6efd" },
            "shape": { "type": "circle" },
            "opacity": { "value": 1, "random": true, },
            "size": { "value": 3, "random": true },
            "move": { "speed": 2, "direction": "none", "out_mode": "out" }
        },
        "interactivity": {
            "events": {
                "onhover": { "enable": true, "mode": "repulse" },
                "onclick": { "enable": true, "mode": "push" }
            },
            "modes": {
                "repulse": { "distance": 100 },
                "push": { "particles_nb": 4 }
            }
        },
        "retina_detect": true
    });
});

$('.carousel-testimonial').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})

    // Activate Bootstrap tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl, {
            placement: 'bottom'
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        let dropdown = document.getElementById("servicesDropdown");
        let dropdownContent = document.getElementById("dropdownContent");
    
        dropdown.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent link from navigating
            dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block"; // Toggle visibility
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const navLinks = document.querySelectorAll(".navbar .nav-item .nav-link");
        const currentPage = window.location.pathname.split("/").pop();
    
        // Remove active class from navbar links only (not pricing tabs)
        navLinks.forEach(link => link.classList.remove("active"));
    
        // Highlight home icon if on index.html or root URL
        if (currentPage === "index.html" || currentPage === "") {
            document.getElementById("homeLink").classList.add("active");
        }
    
        // Highlight case studies icon if on case-studies.html
        if (currentPage === "case-studies.html") {
            document.getElementById("caseStudiesLink").classList.add("active");
        }
    
        let activeFound = false;
    
        // General logic to underline active icons
        navLinks.forEach(link => {
            if (link.href === window.location.href || link.href === window.location.origin + window.location.pathname) {
                link.classList.add("active");
                activeFound = true;
            }
        });
    
        // Default to underlining the "Home" link if no other link is active
        if (!activeFound) {
            document.getElementById("homeLink").classList.add("active");
        }
    });
    