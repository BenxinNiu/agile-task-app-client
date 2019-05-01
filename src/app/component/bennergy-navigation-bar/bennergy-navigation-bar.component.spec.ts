import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BennergyNavigationBarComponent } from './bennergy-navigation-bar.component';

describe('BennergyNavigationBarComponent', () => {
  let component: BennergyNavigationBarComponent;
  let fixture: ComponentFixture<BennergyNavigationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BennergyNavigationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BennergyNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
