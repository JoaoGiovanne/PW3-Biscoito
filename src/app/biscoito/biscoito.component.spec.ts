import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiscoitoComponent } from './biscoito.component';

describe('BiscoitoComponent', () => {
  let component: BiscoitoComponent;
  let fixture: ComponentFixture<BiscoitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiscoitoComponent]
    });
    fixture = TestBed.createComponent(BiscoitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
