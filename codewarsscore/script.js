let userData = null;

async function fetchUserData() {
    const username = document.getElementById('username').value;
    const url = `https://www.codewars.com/api/v1/users/${username}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('User not found');
        }
        userData = await response.json();
        document.getElementById('error').textContent = '';
        showTotalPoints();
    } catch (error) {
        document.getElementById('content').innerHTML = '';
        document.getElementById('error').textContent = error.message;
    }
}

function showTotalPoints() {
    if (!userData) return;
    const totalPoints = userData.honor;
    document.getElementById('content').innerHTML = `
        <h2>Total Points</h2>
        <p>${userData.username} has a total of ${totalPoints} points.</p>
    `;
}

function showLanguagePoints() {
    if (!userData) return;
    const languages = userData.ranks.languages;
    let content = '<h2>Points by Language</h2><ul>';
    for (const [language, data] of Object.entries(languages)) {
        content += `<li>${language}: ${data.score} points</li>`;
    }
    content += '</ul>';
    document.getElementById('content').innerHTML = content;
}
