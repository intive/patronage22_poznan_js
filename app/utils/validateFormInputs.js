const usernamePattern = /^(?=.*[a-zA-Z].*[a-zA-Z].*[a-zA-Z].*[a-zA-Z])[A-Za-z\d\-\_\[\]\\\/]{6,20}$/
const emailPattern = /^[a-z\d]+[\w\d.-]*(\+[\w\d.-]*)?@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i

export const validateFormInputs = (inputValues) => {
    let errors = {}
    const { username, password, email, emailConfirmation } = inputValues

    if (!username.trim()) {
        errors.username = 'Nazwa użytkownika jest wymagana'
    } else if (!usernamePattern.test(username)) {
        errors.username = 'Nazwa musi zawierać od 6 do 20 znaków, w tym 4 litery, może zawierać także cyfry oraz znaki specjalne: - _ [ ] / \\'
    }

    if (!password) {
        errors.password = 'Hasło jest wymagane'
    } else if (password.length < 6) {
        errors.password = 'Hasło powinno mieć minimum 6 znaków'
    }

    if (!email) {
        errors.email = 'Email jest wymagany'
    } else if (!emailPattern.test(email)) {
        errors.email = 'Wprowadź prawidłowy adres email'
    }

    if (!emailConfirmation) {
        errors.emailConfirmation = 'Potwierdzenie adresu email jest wymagane'
    } else if (email !== emailConfirmation) {
        errors.emailConfirmation = 'Adresy email muszą być takie same'
    }

    return errors
}
