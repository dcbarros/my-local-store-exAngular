import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: IProdutoCarrinho[] = [];
  private carrinhoAtualizado = new Subject<void>();

  constructor() { }

  obtemCarrinho(){
    const carrinho = localStorage.getItem('carrinho');
    if(carrinho){
      this.itens = JSON.parse(carrinho)
      return this.itens;
    }
    return [];
  }

  adicionarItem(produto: IProdutoCarrinho){
    const carrinhoSalvo = this.obtemCarrinho();
    const itemExiste = carrinhoSalvo.find((item: { id: number; }) => item.id === produto.id);

    if (carrinhoSalvo) {
      this.itens = carrinhoSalvo;
      if(itemExiste){
        let index = this.itens.findIndex((item: { id: number; }) => item.id === produto.id);
        this.itens[index].qtd += produto.qtd;
      }else{
        this.itens.push(produto);
      }
    }    
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
    this.carrinhoAtualizado.next();
  }

  atualizarItem(produto: IProdutoCarrinho, qtdAtualizada: number){
    const carrinhoSalvo = this.obtemCarrinho();
    const itemExiste = carrinhoSalvo.find((item: { id: number; }) => item.id === produto.id);

    if (carrinhoSalvo) {
      this.itens = carrinhoSalvo;
      if(itemExiste){
        let index = this.itens.findIndex((item: { id: number; }) => item.id === produto.id);
        this.itens[index].qtd += (qtdAtualizada - this.itens[index].qtd);
      }else{
        this.itens.push(produto);
      }
    }    
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
    this.carrinhoAtualizado.next();
  }

  limparCarrinho(){
    this.itens = [];
    localStorage.clear();
  }

  getCarrinhoAtualizado(): Observable<void> {
    return this.carrinhoAtualizado.asObservable();
  }

  removerProdutoCarrinho(produtoId: number){
    this.itens = this.itens.filter(item => item.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }
}
