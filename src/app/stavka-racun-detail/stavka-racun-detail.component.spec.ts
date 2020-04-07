import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StavkaRacunDetailComponent } from './stavka-racun-detail.component';

describe('StavkaRacunDetailComponent', () => {
  let component: StavkaRacunDetailComponent;
  let fixture: ComponentFixture<StavkaRacunDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StavkaRacunDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StavkaRacunDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
