import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraseComponent } from './frase.component';

describe('FraseComponent', () => {
  let component: FraseComponent;
  let fixture: ComponentFixture<FraseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FraseComponent]
    });
    fixture = TestBed.createComponent(FraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
