import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StavkaRacunAddComponent } from './stavka-racun-add.component';

describe('StavkaRacunAddComponent', () => {
  let component: StavkaRacunAddComponent;
  let fixture: ComponentFixture<StavkaRacunAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StavkaRacunAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StavkaRacunAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
