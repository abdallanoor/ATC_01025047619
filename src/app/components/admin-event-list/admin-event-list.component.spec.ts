import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEventListComponent } from './admin-event-list.component';

describe('AdminEventListComponent', () => {
  let component: AdminEventListComponent;
  let fixture: ComponentFixture<AdminEventListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEventListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
