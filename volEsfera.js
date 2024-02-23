class volumeEsfera{
    constructor(raio){
        this.raio = raio
    }


    calcVolume(){
        return (4/3)*Math.PI*this.raio**3
    }
}