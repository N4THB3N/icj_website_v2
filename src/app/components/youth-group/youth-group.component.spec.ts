import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthGroupComponent } from './youth-group.component';

describe('YouthGroupComponent', () => {
  let component: YouthGroupComponent;
  let fixture: ComponentFixture<YouthGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YouthGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YouthGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
