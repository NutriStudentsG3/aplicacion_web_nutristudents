import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetuserComponent } from './meetuser.component';

describe('MeetuserComponent', () => {
  let component: MeetuserComponent;
  let fixture: ComponentFixture<MeetuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeetuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
