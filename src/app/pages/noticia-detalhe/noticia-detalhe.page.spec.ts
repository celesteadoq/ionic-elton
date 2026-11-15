import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoticiaDetalhePage } from './noticia-detalhe.page';

describe('NoticiaDetalhePage', () => {
  let component: NoticiaDetalhePage;
  let fixture: ComponentFixture<NoticiaDetalhePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
