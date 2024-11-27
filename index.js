function updateTime() {
    const currentTime = new Date().toLocaleTimeString();
    document.getElementById('currentTime').innerText = currentTime;
}

setInterval(updateTime, 1000);
updateTime();