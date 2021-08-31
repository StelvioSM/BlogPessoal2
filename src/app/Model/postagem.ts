import { Tema } from "./tema"
import { userLogin } from "./userLogin"

export class postagem{
    public id: number
    public titulo: number
    public descricao: string
    public dataPostagem: postagem
    public tema: Tema
    public usuario: userLogin

    
}