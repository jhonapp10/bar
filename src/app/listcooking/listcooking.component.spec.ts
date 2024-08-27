import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcookingComponent } from './listcooking.component';

describe('ListcookingComponent', () => {
  let component: ListcookingComponent;
  let fixture: ComponentFixture<ListcookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListcookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListcookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
