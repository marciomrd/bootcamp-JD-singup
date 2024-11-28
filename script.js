function isValidPassword (event) {

    event.preventDefault()

    const password = document.getElementById ("ipassword").value;
    const validPassword = document.getElementById ("ipassword-conf").value;
    const passwordError = document.getElementById ("password-error");

    passwordError.textContent = "";

    if (password !== validPassword) {
        passwordError.textContent= "As senhas não coincidem."

        return false;
    }

    alert ("Cadastro realizado com sucesso!")
}