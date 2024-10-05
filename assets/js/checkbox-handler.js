checkboxHandler = (checkboxes) => {
    if (checkboxes) {
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener("change", () => {
                checkboxes.forEach(cb => {
                    if (checkbox !== cb) {
                        cb.checked = false;
                    }
                });
            });
        });
    }
}