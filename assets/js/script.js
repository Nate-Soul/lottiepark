// const dateInputs = document.querySelectorAll("input[type='date']");

// dateInputs.forEach(dateInput => {
//     dateInput.addEventListener("input", () => {
//         if (dateInput.value !== "") {
//             dateInput.classList.add("has-value");
//         } else {
//             dateInput.classList.remove("has-value");
//         }
//     });
// });
// const timeInputs = document.querySelectorAll("input[type='time']");
// timeInputs.forEach(timeInput => {
//     timeInput.addEventListener("change", () => {
//         const timeDisplay = timeInput.nextElementSibling.querySelector("span");
//         timeDisplay.textContent = timeInput.value;
//     });
// });
// const dateInputs = document.querySelectorAll("input[type='date']");
// dateInputs.forEach(dateInput => {
//     dateInput.addEventListener("input", () => {
//         const dateDisplay = dateInput.nextElementSibling.querySelector("span");
//         if (dateInput.value !== "") {
//             dateDisplay.textContent = dateInput.value;
//         } else {
//             dateDisplay.textContent = "mm / dd / yy"
//         }
//     });
// });


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