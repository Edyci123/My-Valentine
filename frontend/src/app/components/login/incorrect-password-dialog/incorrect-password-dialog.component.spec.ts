import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorrectPasswordDialogComponent } from './incorrect-password-dialog.component';

describe('IncorrectPasswordDialogComponent', () => {
  let component: IncorrectPasswordDialogComponent;
  let fixture: ComponentFixture<IncorrectPasswordDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncorrectPasswordDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncorrectPasswordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
