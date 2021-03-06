/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarrucelComponent } from './carrucel.component';

describe('CarrucelComponent', () => {
  let component: CarrucelComponent;
  let fixture: ComponentFixture<CarrucelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrucelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrucelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
