import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './agenda.html',
  styleUrl: './agenda.scss',
})
export class Agenda {

    constructor(private router: Router) {
      console.log("AGENDA CARREGOU");
    }
  
    agenda2() {
      console.log('teste evento de clique');
      this.router.navigate(["/agenda2"]);
    }
  }
  
