import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  itensCarrinho = 0;
  descricao: string = '';

  constructor(
    private carrinhoService: CarrinhoService,
    private router: Router
  ){}

  ngOnInit() {
    this.carrinhoService.getCarrinhoAtualizado().subscribe(() => {
      this.itensCarrinho = this.carrinhoService.obtemCarrinho().reduce((acumulador: any, item: { qtd: any; }) => acumulador + item.qtd, 0);
    });
  }

  contadorItens(){
    this.itensCarrinho = this.carrinhoService.obtemCarrinho().reduce((acumulador: any, item: { qtd: any; }) => acumulador + item.qtd, 0);
    return this.itensCarrinho;
  }

  buscar(descricao: string) {
    this.router.navigate(['produtos'], { queryParams: { descricao: descricao }});
  }

}
