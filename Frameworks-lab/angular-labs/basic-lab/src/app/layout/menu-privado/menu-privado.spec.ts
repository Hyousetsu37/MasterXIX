import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrivado } from './menu-privado';

describe('MenuPrivado', () => {
  let component: MenuPrivado;
  let fixture: ComponentFixture<MenuPrivado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPrivado],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuPrivado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
