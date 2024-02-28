class volumeEsfera{
    constructor(raioEsfera){
        this.raioEsfera = raioEsfera
    }


    calcVolume(){
        return (4/3)*Math.PI*this.raio**3
    }
}