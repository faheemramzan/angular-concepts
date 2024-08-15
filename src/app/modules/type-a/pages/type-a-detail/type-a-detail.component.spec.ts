import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeADetailComponent } from './type-a-detail.component';

describe('TypeADetailComponent', () => {
  let component: TypeADetailComponent;
  let fixture: ComponentFixture<TypeADetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeADetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeADetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
