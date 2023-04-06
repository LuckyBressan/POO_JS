/**
 * Classe de Pessoa
 */
class Pessoa {
    constructor(sNome, iIdade, sSexo, iAltura, iPeso) {
        this.nome = sNome;
        this.idade = iIdade,
        this.sexo = sSexo;
        this.altura = iAltura;
        this.peso = iPeso;
    }
    calcularIMC() {
        var oDiv = document.getElementById('conteudo');
        var IMC = this.peso / (Math.pow(this.altura, 2));
        var sMsg = '';
        if(IMC < 18.5) {
            sMsg = 'Abaixo do peso';
        } else if(IMC < 24.9) {
            sMsg = 'Peso normal';
        } else if(IMC < 29.9) {
            sMsg = 'Sobrepeso';
        } else if(IMC < 34.9) {
            sMsg = 'Obesidade grau I';
        } else if(IMC < 39.9) {
            sMsg = 'Obesidade grau 2';
        } else {
            sMsg = 'Obesidade grau 3';
        }
        return oDiv.innerHTML = sMsg;
    }
    fazerAniversario() {
        var div = document.getElementById('idade')
        this.idade++;
        div.innerHTML = this.idade;
    }
};
let lucas = new Pessoa('Lucas', 17, 'M', 1.74, 64);