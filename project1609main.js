 // Function to set a cookie
        function setCookie(cookieName, cookieValue, expirationHours) {
            var d = new Date();
            d.setTime(d.getTime() + (expirationHours * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
        }

        // Function to check if a cookie exists
        function checkCookie(cookieName) {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                if (cookie.indexOf(cookieName + "=") === 0) {
                    return true;
                }
            }
            return false;
        }

        // Function to generate a random token
        function generateRandomToken(length) {
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var token = '';
            for (var i = 0; i < length; i++) {
                token += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return token;
        }

        if (!checkCookie('refer-inisiated')) {
            // User has not initiated the process, load and insert docOne
            fetch('https://cdn.jsdelivr.net/gh/Official-NitinVarma/cdnorg-project-AK1609@main/docone.html')
                .then(response => response.text())
                .then(data => {
                    var docOne = document.createElement('div');
                    docOne.innerHTML = data;
                    document.body.appendChild(docOne);
           

                    var clickButton = docOne.querySelector('#share-button');
                    clickButton.addEventListener('click', function () {
                        setCookie('refer-inisiated', 'true', 12);
                        window.location.href = 'https://v2de.blogspot.com/p/r1.html';
                    });
                });
        } else if (window.location.search.indexOf('?token=') !== -1 || checkCookie('refer-success')) {
            // User has a token or refer-success cookie, load and insert docTwo
            fetch('https://cdn.jsdelivr.net/gh/Official-NitinVarma/cdnorg-project-AK1609@main/doctwo.html')
                .then(response => response.text())
                .then(data => {
                    var docTwo = document.createElement('div');
                    docTwo.innerHTML = data;
                    document.body.appendChild(docTwo);
               var playerContainer = document.getElementById('player');
        var spinner = document.getElementById('spinner');

        // Check for URL parameter and auto-play if provided
        var urlParams = new URLSearchParams(window.location.search);
        var videoid = urlParams.get('videoid');
        
        if (videoid) {
            spinner.style.display = 'block'; // Show the spinner while loading JSON
            
            // Fetch JSON data from the previous URL
            fetch('https://script.google.com/macros/s/AKfycbxfQ9q07dK-f55qYmN5DAeZT3sqNmcRJbCy3-k1q6LeL8rYJzkIYC8Q55xu43s9NIQe/exec')
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    // Find the lecture link based on videoid
                    for (const subject in data) {
                        const chapters = data[subject];
                        for (const chapter in chapters) {
                            const lectures = chapters[chapter];
                            for (const lecture of lectures) {
                                if (lecture.timestamp === videoid) {
                                    // Use the exact lecture link as the video URL
                                    var player = new Playerjs({ id: "player", file: lecture.lectureLink, type: "video" });
                                    playerContainer.classList.remove('hidden');
                                    spinner.style.display = 'none'; // Hide the spinner when JSON is loaded
                                    break;
                                }
                            }
                            if (playerContainer.classList.contains('hidden')) {
                                playerContainer.innerHTML = '<p class="text-xs text-center">securing environment...</p>';
                                spinner.style.display = 'none'; // Hide the spinner if video not found
                            }
                        }
                    }
                })
                .catch(function(error) {
                    console.error('Error fetching data:', error);
               playerContainer.innerHTML = '<p class="text-xs text-center">Video not found!</p>';
                    spinner.style.display = 'none'; // Hide the spinner on error
                });
        } else {
            playerContainer.innerHTML = '<p class="text-xl font-gray-900 text-center">No video ID provided.</p>';
            spinner.style.display = 'none'; // Hide the spinner if no video ID is provided
        }
              
              
                });
        } else if (document.referrer === 'https://v2de.blogspot.com/p/r2.html' && checkCookie('refer-inisiated')) {
            var randomToken = generateRandomToken(9);
            setCookie('refer-success', randomToken, 12);
            window.location.href = 'https://apnikaksha-cdnorg.blogspot.com/p/api.html?token=' + randomToken;
        }
      else {
      var randomToken = generateRandomToken(9);
            setCookie('refer-success', randomToken, 12);
            window.location.href = 'https://apnikaksha-cdnorg.blogspot.com/watch-new.html' + '?token=' + randomToken;
                 }
