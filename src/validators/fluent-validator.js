'use strict';

let errors = []; // Lista de erros

function ValidationContract() {
    errors = [];
}

ValidationContract.prototype.isRequired = (value, message) => { // Campo requirido
    if (!value || value.length <= 0)
        errors.push({ message: message });
}

ValidationContract.prototype.hasMinLen = (value, min, message) => { // Tem que ter uma qtd minima de caracteres
    if (!value || value.length < min)
        errors.push({ message: message });
}

ValidationContract.prototype.hasMaxLen = (value, max, message) => { // Tem uma qtd máxima de caracteres
    if (!value || value.length > max)
        errors.push({ message: message });
}

ValidationContract.prototype.isFixedLen = (value, len, message) => { // Tem uma qtd fixa de caracteres
    if (value.length != len)
        errors.push({ message: message });
}

ValidationContract.prototype.isEmail = (value, message) => { // Valida E-mail
    var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    if (!reg.test(value))
        errors.push({ message: message });
}

ValidationContract.prototype.errors = () => {  // Lista de erros
    return errors; 
}

ValidationContract.prototype.clear = () => { // Limpa o array de erros
    errors = [];
}

ValidationContract.prototype.isValid = () => { // Verificar se é válido
    return errors.length == 0;
}

module.exports = ValidationContract;