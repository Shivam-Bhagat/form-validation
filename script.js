function validation() {
    event.preventDefault();

    const fname = document.querySelector(".f-name").value.trim();
    const lname = document.querySelector(".l-name").value.trim();
    const message = document.querySelector(".message-field").value.trim();
    const radiobutton1 = document.querySelector(".radio-btn1").checked;
    const radiobutton2 = document.querySelector(".radio-btn2").checked;
    const terms = document.querySelector(".terms-check").checked;
    const emailadd = document.querySelector(".email-adds").value;

    var allchecks = true;

    if(fname === "") {
        allchecks = false;
        document.querySelector(".f-name + .form-alert").style.display = "block";
    } else {
        document.querySelector(".f-name + .form-alert").style.display = "none";
    }

    if(lname === "") {
        allchecks = false;
        document.querySelector(".l-name + .form-alert").style.display = "block";
    } else {
        document.querySelector(".l-name + .form-alert").style.display = "none";
    }

    if(message === "") {
        allchecks = false;
        document.querySelector(".message-field + .form-alert").style.display = "block";
    } else {
        document.querySelector(".message-field + .form-alert").style.display = "none";
    }

    if(!radiobutton1 && !radiobutton2) {
        allchecks = false;
        document.querySelector(".query-type-alert").style.display = "block";
    } else {
        document.querySelector(".query-type-alert").style.display = "none";
    }

    if(!terms) {
        allchecks = false;
        document.querySelector(".terms-alert").style.display = "block";
    } else {
        document.querySelector(".terms-alert").style.display = "none";
    }

    var pattern = /^[a-zA-Z0-9]+@gmail\.com$/;

    if(emailadd === "") {
        allchecks = false;
        document.querySelector(".email-alert").style.display = "block";
    } else if(!(pattern).test(emailadd)){
        allchecks = false;
        document.querySelector(".email-alert").style.display = "block";
    } else {
        document.querySelector(".email-alert").style.display = "none";
    }

    if(allchecks) {
        document.querySelector(".success").style.display = "block";
    }
}