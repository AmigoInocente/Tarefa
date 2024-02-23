class Cone{
    constructor(raio, altura){
        this.raio = raio
        this.altura = altura
    }
    areaCone(){
        return (3.14 * (this.raio * this.raio) * this.altura) / 3
    }
}