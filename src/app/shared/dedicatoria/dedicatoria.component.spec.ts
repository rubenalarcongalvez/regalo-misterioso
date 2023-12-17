import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DedicatoriaComponent } from './dedicatoria.component';

describe('DedicatoriaComponent', () => {
  let component: DedicatoriaComponent;
  let fixture: ComponentFixture<DedicatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DedicatoriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DedicatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
