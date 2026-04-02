import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatToolbarModule,
    RouterModule
  ],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class Menu {}
