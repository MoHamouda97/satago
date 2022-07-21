import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverCommisionComponent } from './over-commision.component';

describe('OverCommisionComponent', () => {
  let component: OverCommisionComponent;
  let fixture: ComponentFixture<OverCommisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverCommisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverCommisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
