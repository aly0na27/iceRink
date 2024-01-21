function moveButton() {
    let x = Math.random()*(window.innerWidth - document.getElementById('button__no').offsetWidth)
    let y = Math.random()*(window.innerHeight - document.getElementById('button__no').offsetHeight)
    document.getElementById("button__no").style.left = `${x}px`;
    document.getElementById("button__no").style.top = `${y}px`;
}

function redirect() {
    window.location.href = "yes.html"
}