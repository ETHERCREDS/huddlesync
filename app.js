function createRoom() {
    const title = document.getElementById('title').value;
    const hostWallet = document.getElementById('hostWallet').value;

    axios.post(
        'https://api.huddle01.com/api/v1/create-room',
        {
            title: title,
            hostWallets: [hostWallet],
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'YXF-G9HHZmcCi6jKiBo4OAfiy95vvMRT',
            },
        }
    )
    .then(response => {
        displayResult(`Meeting Created Successfully - Room ID: ${response.data.data.roomId}`);
    })
    .catch(error => {
        displayResult(`Error: ${error.response.data.message}`);
    });
}

function joinRoom() {
    const roomId = prompt('Enter Room ID:');
    if (roomId) {
        const meetingLink = `https://app.huddle01.com/${roomId}`;
        window.open(meetingLink, '_blank');
    } else {
        alert('Please enter a valid Room ID.');
    }
}

function displayResult(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = message;
}



