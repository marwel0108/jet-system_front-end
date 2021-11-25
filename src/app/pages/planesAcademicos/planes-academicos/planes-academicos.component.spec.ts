import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesAcademicosComponent } from './planes-academicos.component';

describe('PlanesAcademicosComponent', () => {
  let component: PlanesAcademicosComponent;
  let fixture: ComponentFixture<PlanesAcademicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanesAcademicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanesAcademicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
