import { Injectable } from '@angular/core';

interface Aluno {
  matricula: string;
  nome: string;
  curso: string;
}

interface AlunoMock extends Aluno {
  senha: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private alunos: AlunoMock[] = [
    {
      matricula: '200028786',
      senha: '123456',
      nome: 'David Vilas',
      curso: 'Engenharia de Software'
    },
    {
      matricula: '20261002',
      senha: '654321',
      nome: 'Maria Silva',
      curso: 'Direito'
    }
  ];

  private alunoLogado: Aluno | null = null;

  autenticar(matricula: string, senha: string): boolean {
    const aluno = this.alunos.find(
      aluno =>
        aluno.matricula === matricula &&
        aluno.senha === senha
    );

    if (!aluno) {
      return false;
    }

    const { senha: senhaRemovida, ...dadosAluno } = aluno;
    this.alunoLogado = dadosAluno;

    return true;
  }

  obterAlunoLogado(): Aluno | null {
    return this.alunoLogado;
  }

  logout(): void {
    this.alunoLogado = null;
  }
}