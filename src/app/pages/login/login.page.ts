import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton
} from '@ionic/angular';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton
  ]
})
export class LoginPage {

  matricula = '';
  senha = '';
  mensagemErro = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  fazerLogin(): void {
    this.mensagemErro = '';

    const autenticado = this.authService.autenticar(
      this.matricula,
      this.senha
    );

    if (autenticado) {
      this.router.navigate(['/noticias/']);
    } else {
      this.mensagemErro = 'Matrícula ou senha incorretas.';
    }
  }
}