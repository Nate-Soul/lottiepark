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

const totalPrice = document.querySelector("#totalPrice");

const updateTotalPrice = () => {
    const durationPrice = parseInt(totalPrice.getAttribute("data-duration-price"));
    const servicePrice  = parseInt(totalPrice.getAttribute("data-service-price"));
    totalPrice.textContent = "$" + (durationPrice + servicePrice);
};

const updatePrice = (val, tag) => {
    totalPrice.setAttribute(`data-${tag}-price`, parseInt(val));
}
document.addEventListener("DOMContentLoaded", () => {

    estimatedDurationCbs.forEach(estimatedDurationCb => {
        estimatedDurationCb.addEventListener("change", () => {
            const durationPriceVal = estimatedDurationCb.checked ? estimatedDurationCb.value : 0;
            updatePrice(durationPriceVal, "duration");
            updateTotalPrice();
        });
    });

    serviceCbs.forEach(serviceCb => {
        serviceCb.addEventListener("change", () => {
            const servicePriceVal = serviceCb.checked ? serviceCb.value : 0;
            updatePrice(servicePriceVal, "service");
            updateTotalPrice(serviceCb.value);
        });
    });

});