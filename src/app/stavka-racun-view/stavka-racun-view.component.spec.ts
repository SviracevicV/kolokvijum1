import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StavkaRacunViewComponent } from './stavka-racun-view.component';

describe('StavkaRacunViewComponent', () => {
  let component: StavkaRacunViewComponent;
  let fixture: ComponentFixture<StavkaRacunViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StavkaRacunViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StavkaRacunViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
