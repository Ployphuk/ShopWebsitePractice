
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
  
  
  let clickCount =0;
  
  

  async function fetchLeaderboard() {
      try {
          const response = await fetch('/leaderboard');
          const leaderboardData = await response.json();
          const leaderboardContainer = document.getElementById('leaderboard');
          leaderboardContainer.innerHTML = '';
  

          for (const [index, entry] of Object.entries(leaderboardData)) {
              const currentnum = parseInt(index) + 1;
  
              
              const row = document.createElement('div');
              row.classList.add('row');
  
              
              const leaderboardNumber = document.createElement('div');
              leaderboardNumber.className = 'LeaderBoardNumber';
              row.appendChild(leaderboardNumber);
  
              const leaderboardText = document.createElement('h1');
              leaderboardText.className = 'LeaderBoardNumber' + currentnum;
  
             
              const username = entry.username || 'N/A';
              const dinogamescore = entry.dinogamescore || 'N/A';
  
              
              leaderboardText.innerHTML = `${username}  Score: ${dinogamescore !== 'N/A' ? dinogamescore : '0'}`;
  
              
              const likeButton = document.createElement('button');
              likeButton.innerHTML = 'Like';
  
              
              const likeCountSpan = document.createElement('span');
              likeCountSpan.innerHTML = '0'; 
  
            
              likeButton.setAttribute('data-username', username);
  
              likeButton.appendChild(likeCountSpan);
  
              
              const likeCountResponse = await fetch('/getLikeCount', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                      username: username,
                  }),
              });
  
              if (likeCountResponse.ok) {
                  const likeCountData = await likeCountResponse.json();
                  const clickCount = likeCountData.likeCount || 0;
                  likeCountSpan.innerHTML = clickCount;
              } else {
                  console.error('Failed to fetch like count from the server.');
              }
  
             
              likeButton.addEventListener('click', async () => {
                  const username = likeButton.getAttribute('data-username');
  
                  
                  const currentClickCount = parseInt(likeCountSpan.innerHTML);
                  likeCountSpan.innerHTML = currentClickCount + 1;
  
              
                  const likeResponse = await fetch('/updateLikeCount', {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                          username: username,
                          updatedLikeCount2: currentClickCount + 1,
                      }),
                  });
  
                  if (!likeResponse.ok) {
                      console.error('Failed to update like count on the server.');
                    
                  }
              });
  
        
              leaderboardNumber.appendChild(leaderboardText);
              leaderboardNumber.appendChild(likeButton);
  
             
              leaderboardContainer.appendChild(row);
          }
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
  
        
        const response = await fetch('/submitComment2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ commentText }),
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
        const response = await fetch('/getComments2');
        const commentsData = await response.json();
  
        const feedContainer = document.getElementById('feed-container');
        feedContainer.innerHTML = '';
  
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
    fetchLeaderboard();
    fetchComments(); 
  });
  
  
  
  
  
  