function onKeyPress(key) {
    var frame = document.getElementById('playQueue');
    if (key === NEXT) {
        var nextButton = frame.contentDocument.getElementById('nextButton');
        simulateClick(nextButton);
    } else if (key === PLAY) {
        var stopButton = frame.contentDocument.getElementById('stopButton');
        if (!!(stopButton.offsetWidth || stopButton.offsetHeight || stopButton.getClientRects().length))
            var playPauseButton = frame.contentDocument.getElementById('stopButton')
        else
            var playPauseButton = frame.contentDocument.getElementById('startButton');
        simulateClick(playPauseButton);
    } else if (key === PREV) {
        var backButton = frame.contentDocument.getElementById('previousButton');
        simulateClick(backButton);
    }
}
