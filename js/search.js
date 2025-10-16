    // Search Functionality
    document.querySelector(".search-form").addEventListener("submit", function(event) {
        event.preventDefault();
        let query = document.querySelector(".search-input").value.toLowerCase();
        
        // Define searchable sections and keywords
        let searchMap = {
            "features": ["services", "web", "automation", "social", "media", "development"],
            "price": ["pricing", "cost", "packages", "plans"],
            "test": ["testimonials", "reviews", "clients"],
            "form": ["contact", "get started", "consultation"]
        };
        
        // Search through keywords
        let found = null;
        for (let section in searchMap) {
            if (searchMap[section].some(keyword => query.includes(keyword)) || query.includes(section)) {
                found = section;
                break;
            }
        }

        if (found) {
            window.location.href = `#${found}`;
        } else {
            alert("Section not found. Try searching for: services, pricing, testimonials, or contact");
        }
    });