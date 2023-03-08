import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPermissionComponent } from './list-of-permission.component';

describe('ListOfPermissionComponent', () => {
  let component: ListOfPermissionComponent;
  let fixture: ComponentFixture<ListOfPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfPermissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
