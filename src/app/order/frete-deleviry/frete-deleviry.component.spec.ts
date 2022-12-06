import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreteDeleviryComponent } from './frete-deleviry.component';

describe('FreteDeleviryComponent', () => {
  let component: FreteDeleviryComponent;
  let fixture: ComponentFixture<FreteDeleviryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreteDeleviryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreteDeleviryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
