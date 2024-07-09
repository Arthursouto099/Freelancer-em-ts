import {Pessoa} from './pessoa'
import  {Projeto} from "./Projeto"

export class Freelancer extends Pessoa {
    private _areaDeEspecializacao: string
    private _projetos: Projeto[]

    constructor(nome: string, email: string,areaDeEspecializacao: string ) {
        super(nome, email)
        this._areaDeEspecializacao = areaDeEspecializacao
        this._projetos = []
    }

    obterTipo(): string {
        return 'Freelancer'
    }

    adicionarProjeto(valor: Projeto): void {
        this._projetos.push(valor)
        console.log(this._projetos)
    }

    removerProjeto(valor: number): void {
        this._projetos.splice(valor)
        console.log(this._projetos)
    }
}



