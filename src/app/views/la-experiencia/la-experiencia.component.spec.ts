import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaExperienciaComponent } from './la-experiencia.component';

describe('LaExperienciaComponent', () => {
  let component: LaExperienciaComponent;
  let fixture: ComponentFixture<LaExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaExperienciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
