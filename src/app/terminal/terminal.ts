import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terminal',
  imports: [CommonModule],
  templateUrl: './terminal.html',
  styleUrl: './terminal.scss',
  standalone: true,
})
export class Terminal {
  
  constructor(private router: Router) {}

entrar() {
  console.log('teste evento de clique')
  this.router.navigate(["/usuarios"])
}
}
