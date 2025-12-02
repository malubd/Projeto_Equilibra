import { Routes } from '@angular/router';
import { Terminal } from './terminal/terminal';
import { Usuarios } from './usuarios/usuarios';
import { Interface5x2 } from './interface5x2/interface5x2';
import { Checklist } from './checklist/checklist';
import { Interface6x1Component } from './interface6x1/interface6x1';
import { Tela1 } from './tela1/tela1';
import { Tela2 } from './tela2/tela2';
import { Tela3 } from './tela3/tela3';
import { Agenda } from './agenda/agenda';
import { Sugestao } from './sugestao/sugestao';
import { Agenda2 } from './agenda2/agenda2';
import { Scanner } from './scanner-mental/scanner-mental';
import { Desafio } from './desafio/desafio';
import { Feedback } from './feedback/feedback';
import { Organizacao } from './organizacao/organizacao';
import { Rastreamento } from './rastreamento/rastreamento';
import { Rituais } from './rituais/rituais';
import { Painel } from './painel/painel';
import { ChecklistSemanal } from './checklist-semanal/checklist-semanal';


export const routes: Routes = [
{path: "", component: Terminal},
{path: "usuarios", component: Usuarios}, 
{path: "interface5x2", component:Interface5x2},
{path: "checklist", component: Checklist},
{path: "interface6x1", component: Interface6x1Component},
{path: "scanner-mental", component: Scanner},
{path: "tela1", component: Tela1},
{path: "tela2", component: Tela2},
{path: "tela3", component: Tela3},
{path:"agenda2", component: Agenda2},
{path: "agenda", component: Agenda},
{path: "sugestao", component: Sugestao},
{path: "desafio", component: Desafio},
{path:"feedback", component: Feedback},
{path: "organizacao", component: Organizacao},
{path:"rastreamento", component: Rastreamento},
{path:"rituais", component: Rituais},
{path:"painel", component: Painel},
{path: "checklist-semanal", component: ChecklistSemanal}
];
