import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPublico } from './menu-publico';

describe('MenuPublico', () => {
  let component: MenuPublico;
  let fixture: ComponentFixture<MenuPublico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPublico],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuPublico);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
