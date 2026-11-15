import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import {
  IonContent,
  IonButton,
  IonIcon,
  IonBadge
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  calendarOutline,
  shareSocialOutline,
  timeOutline
} from 'ionicons/icons';

interface Noticia {
  id: number;
  titulo: string;
  descricao: string;
  categoria: string;
  data: string;
  imagem: string;
  conteudo: string[];
}

@Component({
  selector: 'app-noticia-detalhe',
  templateUrl: './noticia-detalhe.page.html',
  styleUrls: ['./noticia-detalhe.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonButton,
    IonIcon,
    IonBadge
  ]
})
export class NoticiaDetalhePage {

  noticia: Noticia | undefined;

  noticias: Noticia[] = [
    {
      id: 1,
      titulo: 'UCSal abre inscrições para novos projetos de extensão',
      descricao: 'Estudantes já podem se inscrever nas atividades e projetos de extensão disponíveis neste semestre.',
      categoria: 'Universidade',
      data: '15 de Novembro de 2026',
      imagem: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200',
      conteudo: [
        'A Universidade Católica do Salvador está com inscrições abertas para novos projetos de extensão. A iniciativa busca aproximar os estudantes da comunidade por meio de atividades acadêmicas, culturais e sociais.',
        'Os projetos oferecem aos alunos a oportunidade de aplicar os conhecimentos adquiridos em sala de aula, desenvolver habilidades profissionais e participar de experiências que contribuem para sua formação.',
        'Os interessados devem acompanhar os comunicados institucionais para consultar os requisitos, prazos e procedimentos de inscrição.',
        'A participação nas atividades de extensão representa uma oportunidade de aprendizado e integração entre universidade e sociedade.'
      ]
    },
    {
      id: 2,
      titulo: 'Biblioteca universitária divulga novos horários',
      descricao: 'Confira os horários de funcionamento da biblioteca durante o período letivo.',
      categoria: 'Comunicado',
      data: '12 de Novembro de 2026',
      imagem: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200',
      conteudo: [
        'A Biblioteca Universitária informa aos estudantes os novos horários de funcionamento durante o período letivo.',
        'A atualização busca facilitar o acesso dos alunos ao acervo físico e aos espaços de estudo, oferecendo mais possibilidades para a organização da rotina acadêmica.',
        'Os estudantes devem consultar os canais institucionais para verificar os horários específicos de cada unidade.'
      ]
    },
    {
      id: 3,
      titulo: 'Semana de Tecnologia e Inovação',
      descricao: 'Evento reúne palestras, oficinas e atividades voltadas para tecnologia e inovação.',
      categoria: 'Eventos',
      data: '10 de Novembro de 2026',
      imagem: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200',
      conteudo: [
        'A Semana de Tecnologia e Inovação reunirá estudantes, professores e profissionais para discutir tendências e oportunidades no setor tecnológico.',
        'A programação contará com palestras, oficinas práticas e momentos de integração entre os participantes.',
        'O evento busca incentivar a criatividade, o desenvolvimento de projetos e o compartilhamento de conhecimentos.'
      ]
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    addIcons({
      arrowBackOutline,
      calendarOutline,
      shareSocialOutline,
      timeOutline
    });

    this.route.queryParams.subscribe(params => {
      const id = Number(params['id']);

      this.noticia = this.noticias.find(n => n.id === id);
    });
  }

  voltar(): void {
    this.router.navigate(['/noticias']);
  }

  compartilhar(): void {
    if (navigator.share && this.noticia) {
      navigator.share({
        title: this.noticia.titulo,
        text: this.noticia.descricao,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  }

}