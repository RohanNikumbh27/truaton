import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Internships } from './internships';

describe('Internships', () => {
  let component: Internships;
  let fixture: ComponentFixture<Internships>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Internships]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Internships);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
