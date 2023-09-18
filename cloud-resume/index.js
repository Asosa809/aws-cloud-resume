const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://bswd7wp6a2o6fqdsxmtgnhxe640juxqe.lambda-url.us-east-2.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}

updateCounter();