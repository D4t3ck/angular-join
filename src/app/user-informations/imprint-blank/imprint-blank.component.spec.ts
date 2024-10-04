import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprintBlankComponent } from './imprint-blank.component';

describe('ImprintBlankComponent', () => {
  let component: ImprintBlankComponent;
  let fixture: ComponentFixture<ImprintBlankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImprintBlankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImprintBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
