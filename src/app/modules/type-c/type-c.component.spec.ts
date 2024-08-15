import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCComponent } from './type-c.component';

describe('TypeCComponent', () => {
  let component: TypeCComponent;
  let fixture: ComponentFixture<TypeCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
