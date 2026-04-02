import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painel-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './painel-principal.html',
  styleUrls: ['./painel-principal.css']
})
export class PainelPrincipal implements OnInit {

  produtos: any[] = [];

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.http.get<any[]>('http://localhost:3000/produtos')
      .subscribe({
        next: (res) => {
          console.log('Dados recebidos:', res);
          this.produtos = [...res];
          this.cdr.detectChanges();
        },
        error: (erro) => {
          console.error('Erro ao buscar produtos:', erro);
        }
      });
  }

  editarProduto(id: number) {
    this.router.navigate(['/editar-produto', id]);
  }

  excluirProduto(id: number) {
    this.http.delete(`http://localhost:3000/produtos/${id}`)
      .subscribe(() => {
        this.produtos = this.produtos.filter(p => p.id !== id);
        this.cdr.detectChanges();
      });
  }
}