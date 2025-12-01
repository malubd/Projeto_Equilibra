import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: true,  
  imports: [],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.scss',
})
export class Usuarios {
  constructor(private router: Router) {}

 
  interface5x2() {
    console.log('teste evento de clique')
    this.router.navigate(["/interface5x2"])
  }
  interface6x1() {
    console.log('teste evento de clique')
    this.router.navigate(["/interface6x1"])
  }
}
