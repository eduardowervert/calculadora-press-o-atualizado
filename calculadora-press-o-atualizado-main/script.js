function convertPressure() {
    const value = parseFloat(document.getElementById('value').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    let result = 0;

    if (isNaN(value)) {
        document.getElementById('result').innerText = 'Resultado: Por favor, insira um valor válido.';
        return;
    }

    // Converter para Pascal (unidade base)
    switch (fromUnit) {
        case 'pa': result = value; break;
        case 'kpa': result = value * 1000; break;
        case 'bar': result = value * 100000; break;
        case 'atm': result = value * 101325; break;
        case 'psi': result = value * 6894.76; break;
        case 'mmhg': result = value * 133.322; break;
        case 'torr': result = value * 133.322; break; // Torr é igual a mmHg
        case 'inhg': result = value * 3386.39; break;
    }

    // Converter de Pascal para a unidade desejada
    switch (toUnit) {
        case 'pa': result = result; break;
        case 'kpa': result = result / 1000; break;
        case 'bar': result = result / 100000; break;
        case 'atm': result = result / 101325; break;
        case 'psi': result = result / 6894.76; break;
        case 'mmhg': result = result / 133.322; break;
        case 'torr': result = result / 133.322; break; // Torr é igual a mmHg
        case 'inhg': result = result / 3386.39; break;
    }

    document.getElementById('result').innerText = `Resultado: ${result.toFixed(4)} ${toUnit.toUpperCase()}`;
}

// Adicionar event listener para converter automaticamente ao mudar valores
document.getElementById('value').addEventListener('input', convertPressure);
document.getElementById('fromUnit').addEventListener('change', convertPressure);
document.getElementById('toUnit').addEventListener('change', convertPressure);

// Event listener para o botão limpar
document.getElementById('clear').addEventListener('click', () => {
    document.getElementById('value').value = '';
    document.getElementById('result').innerText = 'Resultado: ';
});
