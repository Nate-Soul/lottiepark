const dateInputs = document.querySelectorAll("input[type='date']");

dateInputs.forEach(dateInput => {
    dateInput.addEventListener("input", () => {
        if (dateInput.value !== "") {
            dateInput.classList.add("has-value");
        } else {
            dateInput.classList.remove("has-value");
        }
    })
});