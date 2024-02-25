const dateInputs = document.querySelectorAll("input[type='date']");

dateInputs.forEach(dateInput => {
    dateInput.addEventListener("input", () => {
        if (dateInput.value !== "") {
            dateInput.classList.add("has-value");
        } else {
            dateInput.classList.remove("has-value");
        }
    });
});

const estimatedDurationCbs = document.getElementsByName("estimated_duration");

estimatedDurationCbs.forEach(estimatedDurationCb => {
    estimatedDurationCb.addEventListener("change", () => {
        estimatedDurationCbs.forEach(checkbox => {
            if (estimatedDurationCb !== checkbox){
                checkbox.checked = false;
            }
        });
    });
});

const serviceCbs = document.getElementsByName("additional_services");

serviceCbs.forEach(serviceCb => {
    serviceCb.addEventListener("change", () => {
        serviceCbs.forEach(checkbox => {
            if (serviceCb !== checkbox){
                checkbox.checked = false;
            }
        });
    });
});