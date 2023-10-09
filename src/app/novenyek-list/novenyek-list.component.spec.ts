import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovenyekListComponent } from './novenyek-list.component';

describe('NovenyekListComponent', () => {
  let component: NovenyekListComponent;
  let fixture: ComponentFixture<NovenyekListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovenyekListComponent]
    });
    fixture = TestBed.createComponent(NovenyekListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
