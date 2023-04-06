class Pessoa2 {
    constructor(sNome, iIdade, sSexo, iAltura, iPeso) {
        this.nome = sNome;
        this.idade = iIdade,
        this.sexo = sSexo;
        this.altura = iAltura;
        this.peso = iPeso;
    }
    /**
     * Imprime os dados da pessoa no console
     */
    imprimirDados() {
        return console.log(this.nome, this.idade, this.sexo, this.altura, this.peso);
    }
};
class Atleta extends Pessoa2 {
    constructor(sNome, iIdade, sSexo, iAltura, iPeso, sEsporte) {
        super(sNome,iIdade, sSexo, iAltura, iPeso);
        this.esporte = sEsporte;
    }
    /**
     * Retorna no console qual esporte o atleta está praticando
     */
    praticarEsporte() {
        return console.log('O atleta está praticando: ' + this.esporte);
    }
}
let larissa = new Pessoa2('Larissa', 18, 'F', 1.61, 50);
let lucas = new Pessoa2('Lucas', 17, 'M', 1.74, 64);
let lucasJogador = new Atleta('Lucas', 17, 'M', 1.74, 64, 'Basquete');