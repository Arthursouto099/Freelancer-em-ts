import {Pessoa} from './pessoa'
import {Freelancer} from "./Freelancer"
import  {Projeto} from "./Projeto"
import {Avaliacao} from "./Avaliacao"



const p1 = new Projeto('CALCULADORA', 'calculadoraaa pika', null)


const f1 = new Freelancer('BRUNO', 'BRUNOR@GMAIL', 'FRONTEND')

p1.atribuirFreelancer(f1)


const p3 = new Projeto('CALCULADORA', 'calculadoraaa pika', f1)

f1.adicionarProjeto(p3)

const sla = new Avaliacao(f1, p1, 10)

