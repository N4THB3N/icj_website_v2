import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvangelismComponent } from './evangelism.component';

describe('EvangelismComponent', () => {
  let component: EvangelismComponent;
  let fixture: ComponentFixture<EvangelismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvangelismComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvangelismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
