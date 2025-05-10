import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongratulationsScreenComponent } from './congratulations-screen.component';

describe('CongratulationsScreenComponent', () => {
  let component: CongratulationsScreenComponent;
  let fixture: ComponentFixture<CongratulationsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CongratulationsScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CongratulationsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
