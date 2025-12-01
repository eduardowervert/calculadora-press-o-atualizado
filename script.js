const conversionFactors = {
    pa: 1,
    kpa: 1000,
    bar: 100000,
    atm: 101325,
    psi: 6894.76,
    mmhg: 133.322,
    torr: 133.322,
    inhg: 3386.39
};

function convertPressure(value, fromUnit, toUnit) {
    if (isNaN(value) || value === '') return '';

    if (!conversionFactors[fromUnit] || !conversionFactors[toUnit]) {
        return 'Unidade inválida';
    }

    if (value < 0) {
        return 'Valor negativo não permitido';
    }

    const valueInPa = value * conversionFactors[fromUnit];

    const result = valueInPa / conversionFactors[toUnit];

    return result.toFixed(2);
}

function validateInput(value) {
    if (value === '') return true;
    return !isNaN(value) && value >= 0;
}

function showError(message) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = message;
    resultElement.style.color = 'red';
    resultElement.classList.add('updated');
    setTimeout(() => {
        resultElement.classList.remove('updated');
    }, 300);
}

function updateResult() {
    const value = document.getElementById('value').value;
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const result = convertPressure(value, fromUnit, toUnit);

    const resultElement = document.getElementById('result');
    if (result === 'Unidade inválida') {
        showError('Erro: Unidade inválida');
    } else if (result === 'Valor negativo não permitido') {
        showError('Erro: Valor negativo não permitido');
    } else {
        resultElement.textContent = `Resultado: ${result} ${toUnit.toUpperCase()}`;
        resultElement.style.color = '';
        resultElement.classList.add('updated');
        setTimeout(() => {
            resultElement.classList.remove('updated');
        }, 300);
    }
}

// Adicionar event listeners para atualização em tempo real
document.getElementById('value').addEventListener('input', updateResult);
document.getElementById('fromUnit').addEventListener('change', updateResult);
document.getElementById('toUnit').addEventListener('change', updateResult);
Alteração 1 do eduardowervert
Alteração 2 do eduardowervert
Alteração 3 do eduardowervert
Alteração 4 do eduardowervert
Alteração 5 do eduardowervert
Alteração 6 do eduardowervert
Alteração 7 do eduardowervert
Alteração 8 do eduardowervert
Alteração 9 do eduardowervert
Alteração 10 do eduardowervert
Alteração 1 do segundo integrante
Alteração 2 do segundo integrante
Alteração 3 do segundo integrante
Alteração 4 do segundo integrante
Alteração 5 do segundo integrante
Alteração 6 do segundo integrante
Alteração 7 do segundo integrante
Alteração 8 do segundo integrante
Alteração 9 do segundo integrante
Alteração 10 do segundo integrante
Alteração 1 do eduardowervert
Alteração 2 do eduardowervert
Alteração 3 do eduardowervert
Alteração 4 do eduardowervert
Alteração 5 do eduardowervert
Alteração 6 do eduardowervert
Alteração 7 do eduardowervert
Alteração 8 do eduardowervert
Alteração 9 do eduardowervert
Alteração 10 do eduardowervert
Alteração 1 do Heloadvanced
Alteração 2 do Heloadvanced
Alteração 3 do Heloadvanced
Alteração 4 do Heloadvanced
Alteração 5 do Heloadvanced
Alteração 6 do Heloadvanced
Alteração 7 do Heloadvanced
Alteração 8 do Heloadvanced
Alteração 9 do Heloadvanced
Alteração 10 do Heloadvanced
Alteração 1 do eduardowervert
Alteração 2 do eduardowervert
Alteração 3 do eduardowervert
Alteração 4 do eduardowervert
Alteração 5 do eduardowervert
Alteração 6 do eduardowervert
Alteração 7 do eduardowervert
Alteração 8 do eduardowervert
Alteração 9 do eduardowervert
Alteração 10 do eduardowervert
Alteração 1 do Heloadvanced
Alteração 2 do Heloadvanced
Alteração 3 do Heloadvanced
Alteração 4 do Heloadvanced
Alteração 5 do Heloadvanced
Alteração 6 do Heloadvanced
Alteração 7 do Heloadvanced
Alteração 8 do Heloadvanced
Alteração 9 do Heloadvanced
Alteração 10 do Heloadvanced
