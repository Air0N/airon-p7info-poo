export class Ponto {
    private x: number = 0
    private y: number = 0

    constructor(x: number, y:number){
        this.x = x
        this.y = y
    }

    get PontoX(){
        return this.x
    }

    get PontoY(){
        return this.y
    }

    set PontoX(x: number){
        this.x = x
    }

    set PontoY(y: number){
        this.y = y
    }
}