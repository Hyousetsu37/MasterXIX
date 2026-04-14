import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraPrivada } from './cabecera-privada';

describe('CabeceraPrivada', () => {
  let component: CabeceraPrivada;
  let fixture: ComponentFixture<CabeceraPrivada>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabeceraPrivada],
    }).compileComponents();

    fixture = TestBed.createComponent(CabeceraPrivada);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
