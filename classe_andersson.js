class Valores {
    constructor(basePri,alturaPri,baseP,alturaP){
        this.basePri = basePri
        this.alturaPri = alturaPri
        this.baseP = baseP
        this.alturaP = alturaP
    }
    prisma(){
        let volumePRi = this.basePri * this.alturaPri
        return volumePRi

    }
    piramide(){
        let volumeP = (this.baseP * this.alturaP) / 3
        return volumeP

    }
}
console.log(this.prisma,this.piramide)

