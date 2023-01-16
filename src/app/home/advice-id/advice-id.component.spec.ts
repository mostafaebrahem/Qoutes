import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceIDComponent } from './advice-id.component';

describe('AdviceIDComponent', () => {
  let component: AdviceIDComponent;
  let fixture: ComponentFixture<AdviceIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdviceIDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdviceIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
