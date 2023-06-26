const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://jxjd5qwxmgjz437ejdpqwc62wy0keplt.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` This page has ${data} Views!`;
}

updateCounter();