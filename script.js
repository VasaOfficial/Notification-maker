const container = document.getElementById("container")
const btn = document.querySelector(".btn")

const words = ["Dog", "Cat", "Lion", "Horse"]

btn.addEventListener("click", () => {
    const massage = document.createElement("div")
    container.appendChild(massage)
    massage.classList.add("massage")

    let items = words[Math.floor(Math.random() * words.length)]

    massage.textContent += items;

    setTimeout(() => {
        massage.remove()
    }, 5000)
})

