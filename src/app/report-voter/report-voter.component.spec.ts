import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportVoterComponent } from './report-voter.component';

describe('ReportVoterComponent', () => {
  let component: ReportVoterComponent;
  let fixture: ComponentFixture<ReportVoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportVoterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportVoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
