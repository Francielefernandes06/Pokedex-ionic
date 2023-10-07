import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsPokePage } from './details-poke.page';

describe('DetailsPokePage', () => {
  let component: DetailsPokePage;
  let fixture: ComponentFixture<DetailsPokePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailsPokePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
