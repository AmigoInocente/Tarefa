class Cone{
    constructor(raioCone, alturaCone){
        this.raioCone = raioCone
        this.alturaCone = alturaCone
    }
    areaCone(){
        return (3.14 * (this.raio * this.raio) * this.altura) / 3
    }
}