class Queue{
    People: string[] = []
    maxQueue = 5
    Primeiro = 0
    Fim = 0
    Items = 0

    Vazio(): number{
        if(this.Items == 0){
            return 1
        }else{
            return 0
        }
    }
    Cheio(): number{
        if(this.Fim == this.maxQueue){
            return 1
        }else{
            return 0
        }
    }

    AddQueue(nome: string): void{
        if(this.Cheio() == 1){
            console.log('Fila está cheia!')
        }else{
            this.People[this.Fim] = nome
            console.log(nome+' entrou na fila')
            this.Fim++
            this.Items++
        }
    }
    RemoverQueue():string | void {
        if(this.Vazio() == 1){
            console.log('A fila está vazia.')
        }else{
            let temp = this.People[this.Primeiro]
            console.log(this.People[this.Primeiro]+' saiu da fila')
            this.Primeiro++
            this.Items--
            return temp
        }
    }
    viewQueue(): void{
        if(this.Vazio() == 1){
            console.log('Não tem ninguém na Fila.')
        }else{
            let np = this.Primeiro
            for(let i=0; i < this.Items; i++){
                console.log(this.People[np]+' está na fila')
                np++
            }
        }
    }
}

let fila: Queue = new Queue()

fila.AddQueue('Carlos')
fila.AddQueue('Mauricio')
fila.AddQueue('Paulo')
fila.AddQueue('Ana')
console.log('-------------------------')

fila.RemoverQueue()
fila.RemoverQueue()
fila.RemoverQueue()
console.log('-------------------------')

fila.AddQueue('Cristina')
console.log('-------------------------')

fila.viewQueue()
console.log('-------------------------')

fila.RemoverQueue()
fila.RemoverQueue()
console.log('-------------------------')
fila.viewQueue()