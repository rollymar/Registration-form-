const form = document.getElementById("form");
const contact = document.getElementById("contactNumber");
const idNumInput = document.getElementById("IDnumber");
const batch = document.getElementById("batch");
const firstName = document.getElementById("firstName");
const middleName = document.getElementById("middleName");
const lastName = document.getElementById("LastName");
const email = document.getElementById("email");


function showError(input, message) {
    const errorSpan = document.getElementById(input.id + "Error");
    if (errorSpan) {
        errorSpan.textContent = message;
        errorSpan.style.color = "red";
    }
}

function clearError(input) {
    const errorSpan = document.getElementById(input.id + "Error");
    if (errorSpan) {
        errorSpan.textContent = "";
    }
}


contact.addEventListener('input', () => {
    const digits = contact.value.replace(/\D/g, "");
    let formatted = '';
    if (digits.length > 0) {
        formatted += digits.substring(0, 4);
    }
    if (digits.length > 4) {
        formatted += ' ' + digits.substring(4, 7);
    }
    if (digits.length > 7) {
        formatted += ' ' + digits.substring(7, 11);
    }
    contact.value = formatted;
});


idNumInput.addEventListener('input', () => {
    const digits = idNumInput.value.replace(/\D/g, "");
    let formatted = '';
    if (digits.length > 0) {
        formatted += digits.substring(0, 4);
    }
    if (digits.length > 4) {
        formatted += "-" + digits.substring(4, 6);
    }
    if (digits.length > 6) {
        formatted += "-" + digits.substring(6, 9);
    }
    idNumInput.value = formatted;
});


batch.addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});


form.addEventListener('submit', function (e) {
    let isValid = true;
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   
    if (firstName.value.trim() === "") {
        showError(firstName, "First name is required.");
        isValid = false;
    } else if (!nameRegex.test(firstName.value.trim())) {
        showError(firstName, "*First name should only contain letters.*");
        isValid = false;
    } else {
        clearError(firstName);
    }

    
    if (middleName.value.trim() === "") {
        showError(middleName, "Middle name is required.");
        isValid = false;
    } else if (!nameRegex.test(middleName.value.trim())) {
        showError(middleName, "*Middle name should only contain letters.*");
        isValid = false;
    } else {
        clearError(middleName);
    }

    
    if (lastName.value.trim() === "") {
        showError(lastName, "Last name is required.");
        isValid = false;
    } else if (!nameRegex.test(lastName.value.trim())) {
        showError(lastName, "*Last name should only contain letters.*");
        isValid = false;
    } else {
        clearError(lastName);
    }

    
    if (!emailRegex.test(email.value.trim())) {
        showError(email, "Enter a valid email.");
        isValid = false;
    } else {
        clearError(email);
    }

    
    const contactDigits = contact.value.replace(/\D/g, "");
    if (contactDigits.length !== 11) {
        showError(contact, "*Contact number must be 11 digits.*");
        isValid = false;
    } else {
        clearError(contact);
    }

    
    const idDigits = idNumInput.value.replace(/\D/g, "");
    if (idDigits.length !== 9) {
        showError(idNumInput, "ID number must be 9 digits (format: 1234-56-789).");
        isValid = false;
    } else {
        clearError(idNumInput);
    }

    
    if (batch.value.trim() === "" || isNaN(batch.value)) {
        showError(batch, "Batch must be numeric.");
        isValid = false;
    } else {
        clearError(batch);
    }

    if (!isValid) {
        e.preventDefault();
    }
});
