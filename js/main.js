document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('generateButton').addEventListener('click', function () {
        const selectedCode = document.getElementById('itemSelect').value;
        const generatedCode = generateCode(selectedCode);
        document.getElementById('codeDisplay').value = generatedCode;
    });

    function generateCode(fixedPart) {
        const randomPart = generateRandomString(8);
        return `${fixedPart}${randomPart}`;
    }

    function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }
        return result;
    }

    document.getElementById('activateButton').addEventListener('click', function () {
        window.open('https://fir3.net/V7QgSTYxM', '_blank');
    });

    document.getElementById('copyButton').addEventListener('click', function () {
        const codeDisplay = document.getElementById('codeDisplay');
        codeDisplay.select();
        navigator.clipboard.writeText(codeDisplay.value)
            .then(() => alert('Código Copiado!'))
            .catch(error => alert(`Erro ao copiar o código: ${error}`));
    });
});
