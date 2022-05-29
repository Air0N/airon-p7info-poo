import { Ponto } from "./Ponto"
import { Quadrilatero } from "./Quadrilatero"

let A = new Ponto(0, 8)
let B = new Ponto(10, 0)

let C = new Ponto(4, 3)
let D = new Ponto(10, 5)
let E = new Ponto(11, 6)

let Verificar = new Quadrilatero(A, B)

console.log(Verificar.EstaDentro(C)? "O ponto C está dentro da area do Quadrilátero!": "O ponto C não está dentro da area do Quadrilátero!")
console.log(Verificar.EstaDentro(D)? "O ponto D está dentro da area do Quadrilátero!": "O ponto D não está dentro da area do Quadrilátero!")
console.log(Verificar.EstaDentro(E)? "O ponto E está dentro da area do Quadrilátero!": "O ponto E não está dentro da area do Quadrilátero!")