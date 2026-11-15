import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import {
  IonContent,
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent,
  IonBadge
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import {
  logOutOutline,
  arrowForwardOutline,
  timeOutline,
  locationOutline,
  personOutline,
  walletOutline,
  newspaperOutline,
  chevronForwardOutline
} from 'ionicons/icons';

import { AuthService } from '../../core/services/auth.service';

interface Noticia {
  id: number;
  titulo: string;
  descricao: string;
  categoria: string;
  data: string;
  imagem: string;
}

interface Evento {
  titulo: string;
  data: string;
  horario: string;
  local: string;
}

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
  standalone: true,
 imports: [
  CommonModule,
  RouterLink,
  IonContent,
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent,
  IonBadge
]
})
export class NoticiasPage {

  nomeAluno = 'Aluno';

  noticias: Noticia[] = [
    {
      id: 1,
      titulo: 'UCSal abre inscrições para novos projetos de extensão',
      descricao: 'Estudantes já podem se inscrever nas atividades e projetos de extensão disponíveis neste semestre.',
      categoria: 'Universidade',
      data: '15 Nov, 2026',
      imagem: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900'
    },
    {
      id: 2,
      titulo: 'Biblioteca universitária divulga novos horários',
      descricao: 'Confira os horários de funcionamento da biblioteca durante o período letivo.',
      categoria: 'Comunicado',
      data: '12 Nov, 2026',
      imagem: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=900'
    },
    {
      id: 3,
      titulo: 'Semana de Tecnologia e Inovação',
      descricao: 'Evento reúne palestras, oficinas e atividades voltadas para tecnologia e inovação.',
      categoria: 'Eventos',
      data: '10 Nov, 2026',
      imagem: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900'
    }
  ];

  eventos: Evento[] = [
    {
      titulo: 'Semana de Tecnologia e Inovação',
      data: '20 NOV',
      horario: '14:00',
      local: 'Auditório UCSal'
    },
    {
      titulo: 'Palestra: Mercado de Tecnologia',
      data: '25 NOV',
      horario: '19:00',
      local: 'Sala de eventos'
    },
    {
      titulo: 'Mostra de Projetos Acadêmicos',
      data: '28 NOV',
      horario: '09:00',
      local: 'Campus Pituaçu'
    }
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    addIcons({
      logOutOutline,
      arrowForwardOutline,
      timeOutline,
      locationOutline,
      personOutline,
      walletOutline,
      newspaperOutline,
      chevronForwardOutline
    });

    const aluno = this.authService.obterAlunoLogado();

    if (aluno) {
      this.nomeAluno = aluno.nome;
    }
  }

  abrirNoticia(noticia: Noticia): void {
    this.router.navigate(['/noticia-detalhe'], {
      queryParams: { id: noticia.id }
    });
  }

  verTodasNoticias(): void {
    console.log('Exibindo todas as notícias');
  }

  sair(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}