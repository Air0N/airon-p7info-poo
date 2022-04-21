class Stack{
    stack: number[] = []
    topo: number = -1
    maxStack = 4

    Vazio(): number{
        if(this.topo == -1){
            return 1
        }else{
            return 0
        }
    }

    Cheio(): number{
        if(this.topo == this.maxStack){
            return 1
        }else{
            return 0
        }
    }
    
    push(num: number): void{
        if(this.Cheio() == 1){
            console.log('A Pilha está cheia.')
        }else{
            this.topo++
            this.stack[this.topo] = num
            console.log('O elemento '+num+' foi adicionado.')
        }
    }
    
    pop(): number | void{
        if(this.Vazio() == 1){
            console.log('A Pilha está vazia')
        }else{
            let aux = this.stack[this.topo]
            console.log('O elemento '+aux+' foi retirado.')
            this.topo--
            return aux
        }
    }
    
    view(): void{
        if(this.Vazio() == 1){
            console.log('A Pilha está vazia')
         }else{
            for(let i = 0; i <= this.topo; i++)
            {
                console.log('Pilha tem o elemento '+this.stack[i])    
            }
        }
    }
}

let pilha: Stack = new Stack()

pilha.push(1)
pilha.push(2)
pilha.push(3)
pilha.push(4)
console.log('=-----------------------=')

pilha.view()
console.log('=-----------------------=')

pilha.pop()
pilha.pop()
console.log('=-----------------------=')

pilha.view()
console.log('=-----------------------=')

pilha.pop()
pilha.pop()
console.log('=-----------------------=')
pilha.view()