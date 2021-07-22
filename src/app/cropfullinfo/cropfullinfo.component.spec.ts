import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropfullinfoComponent } from './cropfullinfo.component';

describe('CropfullinfoComponent', () => {
  let component: CropfullinfoComponent;
  let fixture: ComponentFixture<CropfullinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropfullinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropfullinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
