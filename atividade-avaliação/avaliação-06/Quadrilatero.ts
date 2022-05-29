import { Ponto } from './Ponto'
export class Quadrilatero {
    private A: Ponto
    private B: Ponto

    constructor(A: Ponto, B: Ponto) {
        this.A = A
        this.B = B
    }

    EstaDentro(ponto: Ponto): boolean{
        if(this.A.PontoX <= ponto.PontoX && ponto.PontoX <= this.B.PontoX
             && this.B.PontoY <= ponto.PontoY && ponto.PontoY <= this.A.PontoY) {
                 return true
             } else {
                 return false
             }
    }
}