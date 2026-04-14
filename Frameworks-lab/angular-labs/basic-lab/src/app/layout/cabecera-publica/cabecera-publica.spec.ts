import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraPublica } from './cabecera-publica';

describe('CabeceraPublica', () => {
  let component: CabeceraPublica;
  let fixture: ComponentFixture<CabeceraPublica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabeceraPublica],
    }).compileComponents();

    fixture = TestBed.createComponent(CabeceraPublica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
