class Form {

    constructor (classForm, name, email, phone, text) {

        /* Elements */
        this.form = document.querySelector(`.contactForm`);
        this.name = document.querySelector(`.contactForm [name=${name}]`);
        this.email = document.querySelector(`.contactForm [name=${email}]`);
        this.phone = document.querySelector(`.contactForm [name=${phone}]`);
        this.text = document.querySelector(`.contactForm [name=${text}]`);
        this.submit = document.querySelector(`.contactForm [name=submit]`);

        /* Class List */
        this.classError = "contactForm__input-error";

        /* Event Listener */
        this.form.addEventListener('submit', this.formSubmit.bind(this));

    }

    checkPhone (el) {
        return this.phone.value.length >= 12;
    }

    addClassError (el) {
        el.classList.add(this.classError);
    }

    formSubmit (el) {
        if (!this.checkPhone(el)) {
            this.addClassError(this.phone);
        }
        el.preventDefault();
    }

}

export default Form;