

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


 



async function fetchfallLeaderboard() {
    try {
        const response = await fetch('/fallleaderboard');
        const leaderboardData = await response.json();
        const leaderboardContainer = document.getElementById('leaderboard');
        leaderboardContainer.innerHTML = '';

        
        Object.values(leaderboardData).forEach((entry, index) => {
            const currentnum = index + 1;

          
            const row = document.createElement('div');
            row.classList.add('row');

            
            const leaderboardNumber = document.createElement('div');
            leaderboardNumber.className = 'LeaderBoardNumber';
            row.appendChild(leaderboardNumber);

            const leaderboardText = document.createElement('h1');
            leaderboardText.className = 'LeaderBoardNumber' + currentnum;

            
            const username = entry.username || 'N/A';
            const fallgamescore = entry.fallgamescore || 'N/A';

           
            leaderboardText.innerHTML = `${username}  Score: ${fallgamescore  !== 'N/A' ? fallgamescore : '0'}`;

            //like
            const likeButton = document.createElement('button');
            likeButton.innerHTML = 'Like';

            //span
            const likeCountSpan = document.createElement('span');

           
            const localStorageKey = `likeCount_${username}`;
            let storedLikeCount = localStorage.getItem(localStorageKey);
            likeCountSpan.innerHTML = storedLikeCount || '0'; 

            likeButton.appendChild(likeCountSpan);

            
            likeButton.addEventListener('click', async () => {
                try {
                    
                    const updatedLikeCount = parseInt(likeCountSpan.innerHTML) + 1;
                    likeCountSpan.innerHTML = updatedLikeCount;

                    
                    localStorage.setItem(localStorageKey, updatedLikeCount);

                    
                    await fetch('/like', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ username, updatedLikeCount }),
                    });
                } catch (error) {
                    console.error('Error updating like count:', error);
                }
            });

            
            leaderboardNumber.appendChild(leaderboardText);
            leaderboardNumber.appendChild(likeButton);
            leaderboardContainer.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching and updating leaderboard:', error);
    }
}



  


async function postComment() {
    try {
        const commentText = document.getElementById('textmsg').value;
        if (commentText.trim() === '') {
            alert('Please enter a comment before posting.');
            return;
        }


        const username = getCookie("username");
        const response = await fetch('/submitComment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ commentText, username }),
        });

        if (response.ok) {
            fetchComments();
            document.getElementById('textmsg').value = '';
        } else {
            console.error('Failed to submit comment to server.');
        }
    } catch (error) {
        console.error('Error posting comment:', error);
    }
}



async function fetchComments() {
    try {
        const response = await fetch('/getComments');
        const commentsData = await response.json();

        const feedContainer = document.getElementById('feed-container');
        feedContainer.innerHTML = '';
        commentsData.reverse();
        commentsData.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.innerHTML = `<p>${comment.username}: ${comment.commentText}</p>`;
            feedContainer.appendChild(commentElement);
        });
    } catch (error) {
        console.error('Error fetching and updating comments:', error);
    }
}



document.addEventListener('DOMContentLoaded', function () {
    checkCookie();
    fetchfallLeaderboard();
    fetchComments(); 
});

  



  

