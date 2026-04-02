import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
  ],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class Inicio {

  produtos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('http://localhost:3000/produtos')
      .subscribe(res => {
        this.produtos = res;
      });
  }
}