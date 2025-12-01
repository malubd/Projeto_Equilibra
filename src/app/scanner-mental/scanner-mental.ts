import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner-mental.html',
  styleUrls: ['./scanner-mental.scss']
})
export class Scanner{
  constructor(private router: Router){}
  mood: string | null = null;
  energia: string | null = null;
  mensagem: string = "";

  setMood(m: string) {
    this.mood = m;
  }

  setEnergia(e: string) {
    this.energia = e;
  }

  gerarMensagem() {
    if (this.mood === "triste" && this.energia === "baixa") {
      this.router.navigate(['/tela1'])
    }
    else if (this.mood === "feliz" && this.energia === "alta") {
      this.router.navigate(['/tela2'])
    }
    else if (this.mood === "neutro" && this.energia === "media") {
     this.router.navigate(['/tela3'])
    }
    else if (this.mood === "feliz") {
      this.mensagem = "Continue aproveitando esse sentimento positivo!";
    }
    else if (this.mood === "triste") {
      this.mensagem = "Tudo bem não estar bem. Uma música calma ou um descanso pode ajudar.";
    }
    else {
      this.mensagem = "Observe seu estado com carinho e tente fazer algo leve.";
    }
  }
}
