import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contenedor5Component } from './contenedor5.component';

describe('Contenedor5Component', () => {
  let component: Contenedor5Component;
  let fixture: ComponentFixture<Contenedor5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Contenedor5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Contenedor5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
