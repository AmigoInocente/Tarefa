class Volumes {
    constructor(basePri,alturaPri,baseP,alturaP,raio){
        this.basePri = basePri
        this.alturaPri = alturaPri
        this.baseP = baseP
        this.alturaP = alturaP
        this.raio = raio
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

