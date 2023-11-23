document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('frase').addEventListener('submit', function() {
        let nomeFrases = document.getElementById('nome-frases').value

        alert('Olá seja bem vindo:  ' + nomeFrases )
    }); 
})