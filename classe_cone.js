class Cone{
    constructor(raioCone, alturaCone){
        this.raio = raioCone
        this.altura = alturaCone
    }
    areaCone(){
        return (3.14 * (this.raio * this.raio) * this.altura) / 3
    }
}