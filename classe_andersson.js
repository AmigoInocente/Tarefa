class Volumes {
    constructor(basePri,alturaPri,baseP,alturaP,raio){
        this.basePri = basePri
        this.alturaPri = alturaPri
        this.baseP = baseP
        this.alturaP = alturaP
        this.raio = raio
    }
    prisma(){
        if(prisma = cubo){
            let volumePRi = this.basePri * this.alturaPri
            return volumePRi
        }else{
            let volumePRi = (this.basePri * this.alturaPri) / 2
        }

    }
    piramide(){
        let volumeP = (this.baseP * this.alturaP) / 3
        return volumeP

    }
}
console.log(this.prisma,this.piramide)

