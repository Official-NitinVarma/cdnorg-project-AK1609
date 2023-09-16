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
