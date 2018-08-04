const name = prompt("Escribe nombre con un minimo de 4 letras");
const password = prompt("Escribe una contraseña con un minimo de 8 caracteres");

areValidCredentials = (name, password) => {

    if (name.length > 3 && password.length > 8) {
        return true;
    } else {
        return false;
    }
}
var output = areValidCredentials(name, password);
console.log(output);


