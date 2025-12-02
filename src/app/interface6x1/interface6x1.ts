import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interface6x1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interface6x1.html', 
  styleUrl: './interface6x1.scss'

})
export class Interface6x1Component {
  [x: string]: any;

constructor(private router: Router) {}

  agenda() {
    console.log('teste evento de clique')
    this.router.navigate(["/agenda"])
  }
  checklistsemanal(){
    this.router.navigate(["/checklist-semanal"])
  }
  rituais(){
    this.router.navigate(["/rituais"])
  }
  organizacao(){
    this.router.navigate(["/organizacao"])
  }
  rastreamento(){
    this.router.navigate(["/rastreamento"])
  }
}