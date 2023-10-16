import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonDetailsUserPage } from './pokemon-details-user.page';

describe('PokemonDetailsUserPage', () => {
  let component: PokemonDetailsUserPage;
  let fixture: ComponentFixture<PokemonDetailsUserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PokemonDetailsUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
