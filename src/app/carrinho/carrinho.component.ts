import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';
import { NotificacaoService } from '../notificacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit{
  
  itensCarrinho: IProdutoCarrinho[] = [];
  subtotal: number = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private notificacaoService: NotificacaoService,
    private router: Router
  ){}

  ngOnInit():void{
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.subtotalCarrinho();
  }
  removeProdutoCarrinho(produtoId: number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.subtotalCarrinho();
  }
  carrinhoEstaVazio(){
    return this.itensCarrinho.length === 0;
  }
  subtotalCarrinho(){
    this.subtotal = this.carrinhoService.obtemCarrinho().reduce((acumulador: any, item: { qtd: any; preco: any }) => acumulador + item.qtd*item.preco, 0);
  }
  adicionarItensCarrinho(produtoId: number){
    let itemEncontrado = this.itensCarrinho.find(item => item.id === produtoId);
    if(itemEncontrado){
      this.carrinhoService.atualizarItem(itemEncontrado, itemEncontrado.qtd);
    }
    this.subtotalCarrinho();
  }
  comprar(){
    this.notificacaoService.notificar("Parabéns você comprou os itens do carrinho!!!!!");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
  }
}
