import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAOverviewComponent } from './type-a-overview.component';

describe('TypeAOverviewComponent', () => {
  let component: TypeAOverviewComponent;
  let fixture: ComponentFixture<TypeAOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeAOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeAOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
