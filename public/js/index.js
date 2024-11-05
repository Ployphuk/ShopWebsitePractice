function checkCookie() {
    console.log("Checking cookie...");
    var username = getCookie("username");
    console.log("Username from cookie:", username);
    if (!username) {
        console.log("Redirecting to login.html");
        window.location = "Index.html";
    } else {
        console.log("Username found:", username);
        const usernameDisplay = document.getElementById("usernameDisplay");
        if (usernameDisplay) {
            usernameDisplay.innerText = "Welcome, " + username;
        } else {
            console.error("Element with ID 'usernameDisplay' not found");
        }
    }
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

async function logout() {
    try {
        const confirmLogout = confirm("Are you sure you want to logout?");
        if (!confirmLogout) {
            return;
        }

        const response = await fetch('/logout', { method: 'GET' });
        if (response.ok) {
            window.location.href = 'Index.html';
        } else {
            console.error('Logout failed');
        }
    } catch (error) {
        console.error('Error during logout:', error);
    }
}


function pageLoad() {

    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function (event) {
            event.preventDefault();
            logout();
        });
    } else {
        console.error("Element with ID 'logoutBtn' not found");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    checkCookie();
    pageLoad();
});
