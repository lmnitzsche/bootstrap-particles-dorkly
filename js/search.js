    // Search Functionality
    document.querySelector(".search-form").addEventListener("submit", function(event) {
        event.preventDefault();
        let query = document.querySelector(".search-input").value.toLowerCase();
        let sections = ["features", "price", "test", "form"];
        let found = sections.find(section => section.includes(query));

        if (found) {
            window.location.href = `#${found}`;
        } else {
            alert("Section not found.");
        }
    });