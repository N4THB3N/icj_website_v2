import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcjkidsComponent } from './icjkids.component';

describe('IcjkidsComponent', () => {
  let component: IcjkidsComponent;
  let fixture: ComponentFixture<IcjkidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcjkidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcjkidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
