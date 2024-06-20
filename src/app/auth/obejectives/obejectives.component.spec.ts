import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObejectivesComponent } from './obejectives.component';

describe('ObejectivesComponent', () => {
  let component: ObejectivesComponent;
  let fixture: ComponentFixture<ObejectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObejectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObejectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
