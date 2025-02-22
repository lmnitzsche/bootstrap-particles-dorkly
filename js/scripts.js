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
