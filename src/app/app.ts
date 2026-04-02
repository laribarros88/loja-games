import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { Rodape } from './rodape/rodape';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Menu,
    Rodape
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}