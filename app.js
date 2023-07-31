let count = 0;
//set value and buttons
const value = document.querySelector("#number");
const btns = document.querySelectorAll(".btn");

// console.log(btns)
// we are getting a nodeList, we can perform few actions on nodelist like forEach. For using it we first have to convert it into array/object

btns.forEach((btn) =>
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else if (styles.contains("reset")) {
            count = 0;
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count == 0) {
            value.style.color = "black";
        }
        value.textContent = count;
    })
);
