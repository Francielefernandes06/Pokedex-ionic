import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyPokemonsPage } from './my-pokemons.page';

describe('MyPokemonsPage', () => {
  let component: MyPokemonsPage;
  let fixture: ComponentFixture<MyPokemonsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyPokemonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
