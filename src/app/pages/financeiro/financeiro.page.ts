import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonContent,
  IonButton,
  IonIcon,
  IonBadge
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  walletOutline,
  checkmarkCircleOutline,
  timeOutline,
  alertCircleOutline,
  copyOutline,
  documentTextOutline,
  cardOutline
} from 'ionicons/icons';

interface Mensalidade {
  id: number;
  descricao: string;
  vencimento: string;
  valor: number;
  status: 'Pago' | 'Pendente' | 'Vencido';
  semestre: string;
  codigoBarras: string;
}

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.page.html',
  styleUrls: ['./financeiro.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonButton,
    IonIcon,
    IonBadge
  ]
})
export class FinanceiroPage {

  semestreSelecionado = '2026.2';
  copiadoId: number | null = null;

  mensalidades: Mensalidade[] = [
    {
      id: 1,
      descricao: 'Mensalidade - Agosto',
      vencimento: '10/08/2026',
      valor: 850,
      status: 'Pago',
      semestre: '2026.2',
      codigoBarras: '00190.00009 01234.567890 12345.678901 1 00000085000'
    },
    {
      id: 2,
      descricao: 'Mensalidade - Setembro',
      vencimento: '10/09/2026',
      valor: 850,
      status: 'Pago',
      semestre: '2026.2',
      codigoBarras: '00190.00009 01234.567890 12345.678902 1 00000085000'
    },
    {
      id: 3,
      descricao: 'Mensalidade - Outubro',
      vencimento: '10/10/2026',
      valor: 850,
      status: 'Pago',
      semestre: '2026.2',
      codigoBarras: '00190.00009 01234.567890 12345.678903 1 00000085000'
    },
    {
      id: 4,
      descricao: 'Mensalidade - Novembro',
      vencimento: '10/11/2026',
      valor: 850,
      status: 'Vencido',
      semestre: '2026.2',
      codigoBarras: '00190.00009 01234.567890 12345.678904 1 00000085000'
    },
    {
      id: 5,
      descricao: 'Mensalidade - Dezembro',
      vencimento: '10/12/2026',
      valor: 850,
      status: 'Pendente',
      semestre: '2026.2',
      codigoBarras: '00190.00009 01234.567890 12345.678905 1 00000085000'
    },
    {
      id: 6,
      descricao: 'Mensalidade - Janeiro',
      vencimento: '10/01/2026',
      valor: 850,
      status: 'Pago',
      semestre: '2026.1',
      codigoBarras: '00190.00009 01234.567890 12345.678906 1 00000085000'
    },
    {
      id: 7,
      descricao: 'Mensalidade - Fevereiro',
      vencimento: '10/02/2026',
      valor: 850,
      status: 'Pago',
      semestre: '2026.1',
      codigoBarras: '00190.00009 01234.567890 12345.678907 1 00000085000'
    },
    {
      id: 8,
      descricao: 'Mensalidade - Março',
      vencimento: '10/03/2026',
      valor: 850,
      status: 'Pago',
      semestre: '2026.1',
      codigoBarras: '00190.00009 01234.567890 12345.678908 1 00000085000'
    }
  ];

  constructor(private router: Router) {
    addIcons({
      arrowBackOutline,
      walletOutline,
      checkmarkCircleOutline,
      timeOutline,
      alertCircleOutline,
      copyOutline,
      documentTextOutline,
      cardOutline
    });
  }

  get mensalidadesFiltradas(): Mensalidade[] {
    return this.mensalidades.filter(
      mensalidade => mensalidade.semestre === this.semestreSelecionado
    );
  }

  get totalPago(): number {
    return this.mensalidadesFiltradas
      .filter(m => m.status === 'Pago')
      .reduce((total, m) => total + m.valor, 0);
  }

  get totalPendente(): number {
    return this.mensalidadesFiltradas
      .filter(m => m.status === 'Pendente' || m.status === 'Vencido')
      .reduce((total, m) => total + m.valor, 0);
  }

  get totalMensalidades(): number {
    return this.mensalidadesFiltradas
      .reduce((total, m) => total + m.valor, 0);
  }

  get quantidadePagas(): number {
    return this.mensalidadesFiltradas
      .filter(m => m.status === 'Pago').length;
  }

  get quantidadePendentes(): number {
    return this.mensalidadesFiltradas
      .filter(m => m.status === 'Pendente' || m.status === 'Vencido').length;
  }

  voltar(): void {
    this.router.navigate(['/noticias']);
  }

  async copiarCodigo(mensalidade: Mensalidade): Promise<void> {
    try {
      await navigator.clipboard.writeText(mensalidade.codigoBarras);

      this.copiadoId = mensalidade.id;

      setTimeout(() => {
        this.copiadoId = null;
      }, 2500);

    } catch {
      alert('Não foi possível copiar o código de barras.');
    }
  }

}