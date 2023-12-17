import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DedicatoriasComponent } from './dedicatorias.component';

describe('DedicatoriasComponent', () => {
  let component: DedicatoriasComponent;
  let fixture: ComponentFixture<DedicatoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DedicatoriasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DedicatoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
