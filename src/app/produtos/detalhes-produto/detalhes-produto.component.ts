import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit{

  produto: IProduto | undefined;
  qtd = 1;

  constructor(
    private produtosService: ProdutosService,
    private router: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService,
    //private routerTransfer: Router
  ){};
  
  ngOnInit(): void {
      const routeParams = this.router.snapshot.paramMap;
      const produtoId = routeParams.get("id");

      this.produto = this.produtosService.getOne(Number(produtoId))
    }

  adicionarAoCarrinho() {
    
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      qtd: this.qtd
    }
    this.carrinhoService.adicionarItem(produto);
    //this.routerTransfer.navigateByUrl('/produtos');
    this.notificacaoService.notificar(`Foram adicionado(s) ${produto.qtd} produto(s) ao carrinho`);
  }
  
}
