// Shared user data for both admin and sales dashboards
// This ensures both dashboards use the EXACT same user list

function initUsers() {
    let users = JSON.parse(localStorage.getItem('dorklyai_users')) || [];
    
    // If no users exist, create defaults
    if (users.length === 0) {
        users = [
            { id: 1, name: 'Tyler Rodriguez', email: 'tyler@dorklyai.com', password: 'rep123', isAdmin: false },
            { id: 2, name: 'Ashley Thompson', email: 'ashley@dorklyai.com', password: 'rep123', isAdmin: false },
            { id: 3, name: 'Marcus Johnson', email: 'marcus@dorklyai.com', password: 'rep123', isAdmin: false },
            { id: 4, name: 'Logan Nitzsche', email: 'logan@dorklyai.com', password: 'logan123', isAdmin: true }
        ];
        localStorage.setItem('dorklyai_users', JSON.stringify(users));
    }
    
    return users;
}

function getUsers() {
    return JSON.parse(localStorage.getItem('dorklyai_users')) || [];
}

function saveUsers(users) {
    localStorage.setItem('dorklyai_users', JSON.stringify(users));
}

// Initialize on load
let usersData = initUsers();
