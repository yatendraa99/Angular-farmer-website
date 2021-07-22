import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropinformationComponent } from './cropinformation.component';

describe('CropinformationComponent', () => {
  let component: CropinformationComponent;
  let fixture: ComponentFixture<CropinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
