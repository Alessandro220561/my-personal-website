const h2 = document.createElement("h2");
h2.textContent = "About Me";
document.querySelector("body").appendChild(h2);

const p1 = document.createElement("p");
p1.textContent = "I am currently 27 years old. I live with my girlfriend in CT."
document.querySelector("body").appendChild(p1);

const h3 = document.createElement("h3");
h3.textContent = "Previous Life Experiences";
document.querySelector("body").appendChild(h3);

const list = document.getElementById("list1");
list.addEventListener(
    "mouseover",
    (event) => {
        event.target.style.color = "orange";
        settimeout(() => {
            event.target.style.color = "";
        }, 500);
    },
    false
);