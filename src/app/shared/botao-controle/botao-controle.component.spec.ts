import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBotaoControleComponent } from './botao-controle.component';

describe('AppBotaoControleComponent', () => {
  let component: AppBotaoControleComponent;
  let fixture: ComponentFixture<AppBotaoControleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppBotaoControleComponent],
    });
    fixture = TestBed.createComponent(AppBotaoControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
