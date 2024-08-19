// In-memory storage for user credentials (For demo purposes)
let users = {};

// Function to toggle between login and registration forms
function toggleForms() {
    document.getElementById('register-form').classList.toggle('hidden');
    document.getElementById('login-form').classList.toggle('hidden');
    document.getElementById('form-title').textContent =
        document.getElementById('form-title').textContent === 'Login' ? 'Register' : 'Login';
}

// Function to handle user registration
function register() {
    let username = document.getElementById('reg-username').value;
    let password = document.getElementById('reg-password').value;

    if (users[username]) {
        alert('Username already exists!');
        return;
    }

    users[username] = password;
    alert('Registration successful! Please login.');
    toggleForms();
}

// Function to handle user login
function login() {
    let username = document.getElementById('login-username').value;
    let password = document.getElementById('login-password').value;

    if (users[username] && users[username] === password) {
        alert('Login successful!');
        // Redirect to a secured page or perform secured operations here
    } else {
        alert('Invalid username or password!');
    }
}