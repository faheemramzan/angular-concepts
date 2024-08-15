import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeBComponent } from './type-b.component';

describe('TypeBComponent', () => {
  let component: TypeBComponent;
  let fixture: ComponentFixture<TypeBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
