import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbjComponent } from './ibj.component';

describe('IbjComponent', () => {
  let component: IbjComponent;
  let fixture: ComponentFixture<IbjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IbjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IbjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
