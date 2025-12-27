import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaSelectorComponent } from './consulta-selector.component';

describe('ConsultaSelectorComponent', () => {
  let component: ConsultaSelectorComponent;
  let fixture: ComponentFixture<ConsultaSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
