import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interface5x2',
  imports: [],
  templateUrl: './interface5x2.html',
  styleUrl: './interface5x2.scss',
  standalone: true,
})
export class Interface5x2 {
  constructor(private router: Router) {}
  

  scannerMental() {
    console.log('teste evento de clique')
    this.router.navigate(["/scanner-mental"])
  }
  checklist(){
    console.log('teste evento de clique')
    this.router.navigate(["/checklist"])
  }
}
