class Form {

    constructor (classForm, name, email, phone, text) {

        this.form = document.querySelector(`.contactForm`);
        this.name = document.querySelector(`.contactForm [name=${name}]`);
        this.email = document.querySelector(`.contactForm [name=${email}]`);
        this.phone = document.querySelector(`.contactForm [name=${phone}]`);
        this.text = document.querySelector(`.contactForm [name=${text}]`);
        this.submit = document.querySelector(`.contactForm [name=submit]`);

        this.form.addEventListener('submit', this.formSubmit.bind(this));

    }

    checkPhone (el) {
        return this.phone.value.length >= 12;
    }

    formSubmit (el) {
        console.log(this.checkPhone(el))
        el.preventDefault();
        console.log('not')
    }

}

export default Form;