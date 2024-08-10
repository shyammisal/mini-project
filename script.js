document.getElementById('startButton').addEventListener('click', function() {

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert('Speech Recognition API is not supported in this browser.');
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = function() {
        console.log('Voice recognition activated.');
        document.getElementById('startButton').disabled = true;
        document.getElementById('startButton').textContent = 'Listening...';
    };

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById('textOutput').value = transcript;
    };

    recognition.onerror = function(event) {
        console.error('Error occurred in speech recognition:', event.error);
        alert('An error occurred during speech recognition.');
    };

    recognition.onend = function() {
        console.log('Voice recognition ended.');
        document.getElementById('startButton').disabled = false;
        document.getElementById('startButton').textContent = 'Start Listening';
    };

    recognition.start();
});
