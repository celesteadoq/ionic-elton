import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonContent,
  IonButton,
  IonIcon,
  IonInput,
  IonLabel
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import {
  personOutline,
  mailOutline,
  callOutline,
  locationOutline,
  schoolOutline,
  arrowBackOutline,
  createOutline,
  saveOutline,
  closeOutline,
  logOutOutline
} from 'ionicons/icons';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonButton,
    IonIcon,
    IonInput,
    IonLabel
  ]
})
export class PerfilPage {

  nome = 'Aluno';
  matricula = '20261001';
  curso = 'Engenharia de Software';
  semestre = '5º semestre';

  email = 'aluno@ucsal.edu.br';
  telefone = '(71) 99999-9999';
  endereco = 'Salvador - BA';

  editando = false;

  dadosOriginais = {
    email: this.email,
    telefone: this.telefone,
    endereco: this.endereco
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    addIcons({
      personOutline,
      mailOutline,
      callOutline,
      locationOutline,
      schoolOutline,
      arrowBackOutline,
      createOutline,
      saveOutline,
      closeOutline,
      logOutOutline
    });

    const aluno = this.authService.obterAlunoLogado();

    if (aluno) {
      this.nome = aluno.nome;
      this.matricula = aluno.matricula;
      this.curso = aluno.curso;
    }
  }

  editar(): void {
    this.dadosOriginais = {
      email: this.email,
      telefone: this.telefone,
      endereco: this.endereco
    };

    this.editando = true;
  }

  salvar(): void {
    this.editando = false;

    this.dadosOriginais = {
      email: this.email,
      telefone: this.telefone,
      endereco: this.endereco
    };

    alert('Dados atualizados com sucesso!');
  }

  cancelar(): void {
    this.email = this.dadosOriginais.email;
    this.telefone = this.dadosOriginais.telefone;
    this.endereco = this.dadosOriginais.endereco;

    this.editando = false;
  }

  voltar(): void {
    this.router.navigate(['/noticias']);
  }

  sair(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}