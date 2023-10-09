import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovenyComponent } from './noveny.component';

describe('NovenyComponent', () => {
  let component: NovenyComponent;
  let fixture: ComponentFixture<NovenyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovenyComponent]
    });
    fixture = TestBed.createComponent(NovenyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
