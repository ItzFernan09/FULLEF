import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { RouterTestingModule } from '@angular/router/testing';
=======
>>>>>>> 09ac0ce (Proyecto Página de Inicio FULLEF Versión 2)
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      imports: [
        RouterTestingModule
      ],
=======
>>>>>>> 09ac0ce (Proyecto Página de Inicio FULLEF Versión 2)
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have as title 'UFraternity'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('UFraternity');
=======
  it(`should have as title 'FULLEF'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('FULLEF');
>>>>>>> 09ac0ce (Proyecto Página de Inicio FULLEF Versión 2)
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD
    expect(compiled.querySelector('.content span')?.textContent).toContain('UFraternity app is running!');
=======
    expect(compiled.querySelector('.content span')?.textContent).toContain('FULLEF app is running!');
>>>>>>> 09ac0ce (Proyecto Página de Inicio FULLEF Versión 2)
  });
});
