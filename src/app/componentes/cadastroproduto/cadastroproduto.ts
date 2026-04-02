import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastroproduto',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cadastroproduto.html',
  styleUrls: ['./cadastroproduto.css']
})
export class Cadastroproduto implements OnInit {

  produto: any = {
    produto: '',
    descricao: '',
    foto: '',
    preco: null
  };

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.http.get<any>(`http://localhost:3000/produtos/${id}`)
        .subscribe((dados: any) => {
          this.produto = dados;
        });
    }
  }

  salvarProduto(): void {
    if (this.produto.id) {
      this.http.put(`http://localhost:3000/produtos/${this.produto.id}`, this.produto)
        .subscribe(() => {
          alert('Produto atualizado com sucesso!');
          this.router.navigate(['/painel-principal']);
        });
    } else {
      this.http.post('http://localhost:3000/produtos', this.produto)
        .subscribe(() => {
          alert('Produto cadastrado com sucesso!');
          this.router.navigate(['/painel-principal']);
        });
    }
  }
}