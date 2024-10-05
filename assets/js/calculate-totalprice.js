const totalPrice = document.querySelector("#totalPrice");
const estimatedDurationCbs = document.getElementsByName("estimated_duration");
const serviceCbs = document.getElementsByName("additional_services");

const updateTotalPrice = () => {
    const durationPrice = parseInt(totalPrice.getAttribute("data-duration-price"));
    const servicePrice  = parseInt(totalPrice.getAttribute("data-service-price"));
    totalPrice.textContent = "$" + (durationPrice + servicePrice);
};

const updatePrice = (val, tag) => {
    totalPrice.setAttribute(`data-${tag}-price`, parseInt(val));
}

document.addEventListener("DOMContentLoaded", () => {

    checkboxHandler(estimatedDurationCbs);
    checkboxHandler(serviceCbs);

    updateTotalPrice();

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