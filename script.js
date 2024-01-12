// Simulated user data
let currentUser = null;

function login() {
    // Simulate user authentication
    // In a real-world scenario, you would redirect to the server for authentication
    const username = prompt("Enter your username:");
    if (username) {
        currentUser = username;
        showApp();
    }
}

function logout() {
    currentUser = null;
    hideApp();
}

function showApp() {
    document.getElementById('loginBtn').style.display = 'none';
    document.getElementById('logoutBtn').style.display = 'block';
    document.getElementById('app').style.display = 'block';
}

function hideApp() {
    document.getElementById('loginBtn').style.display = 'block';
    document.getElementById('logoutBtn').style.display = 'none';
    document.getElementById('app').style.display = 'none';
}

function createIssue() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const assignee = document.getElementById('assignee').value;
    const attachment = document.getElementById('attachment').value;

    // Create a new issue card
    const issueCard = document.createElement('div');
    issueCard.classList.add('issue-card');
    issueCard.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <p><strong>Priority:</strong> ${priority}</p>
        <p><strong>Assignee:</strong> ${assignee}</p>
        <p><strong>Attachment:</strong> ${attachment}</p>
        <button onclick="updateIssue(this)">Update</button>
    `;

    // Append the issue card to the issue list
    document.getElementById('issue-list').appendChild(issueCard);

    // Clear the form fields
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('priority').value = 'low';
    document.getElementById('assignee').value = '';
    document.getElementById('attachment').value = '';
}

function updateIssue(button) {
    // Simulated update action
    alert("Issue updated!");
}
