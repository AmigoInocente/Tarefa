class Volumes {
    constructor(basePrisma,alturaPrisma,basePiramide,alturaPiramide,raio){
        this.basePrisma = basePrisma
        this.alturaPrisma = alturaPrisma
        this.basePiramide = basePiramide
        this.alturaPiramide = alturaPiramide
        this.raio = raio
    }
    prisma(){
        if(prisma = cubo){
            let volumePrisma = this.basePrisma * this.alturaPrisma
            return volumePrisma
        }else{
            let volumePrisma = (this.basePrisma * this.alturaPrisma) / 2
            return volumePrisma
        }

    }
    piramide(){
        let volumePiramide = (this.basePiramide * this.alturaPiramide) / 3
        return volumePiramide

    }
}
console.log(this.prisma,this.piramide)

