import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cadastroproduto } from './cadastroproduto';

describe('Cadastroproduto', () => {
  let component: Cadastroproduto;
  let fixture: ComponentFixture<Cadastroproduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cadastroproduto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cadastroproduto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
