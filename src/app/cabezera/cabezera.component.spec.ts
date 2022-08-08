/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CabezeraComponent } from './cabezera.component';

describe('CabezeraComponent', () => {
  let component: CabezeraComponent;
  let fixture: ComponentFixture<CabezeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabezeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabezeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
