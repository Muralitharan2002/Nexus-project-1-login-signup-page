
export const LoginValidate = (Email, Password) => {
    const Error = {};

    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const PasswordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;

    if (!Email) {
        Error.emailError = "Email is required !"
    } else if (!EmailRegex.test(Email)) {
        Error.emailError = "Invalid Email format !"
    }

    if (!Password) {
        Error.PasswordError = "Password is required !"
    } else if (Password.length < 6) {
        Error.PasswordError = "Password at least 6 characters !"
    } else if (!PasswordRegex.test(Password)) {
        Error.PasswordError = " include both numbers and special characters."
    }

    return Error;
}
export const SigupValidate = (Name, Email, Password) => {
    const Error = {};

    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const PasswordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;

    if (!Name) {
        Error.nameError = "Name is required !"
    } else if (Name.length <= 2) {
        Error.nameError = "Check your name !"
    }

    if (!Email) {
        Error.emailError = "Email is required !"
    } else if (!EmailRegex.test(Email)) {
        Error.emailError = "Invalid Email format !"
    }

    if (!Password) {
        Error.PasswordError = "Password is required !"
    } else if (Password.length < 6) {
        Error.PasswordError = "Password at least 6 characters !"
    } else if (!PasswordRegex.test(Password)) {
        Error.PasswordError = " include both numbers and special characters."
    }

    return Error;
}