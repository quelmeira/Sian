import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionIconComponent } from './collection-icon.component';

describe('CollectionIconComponent', () => {
  let component: CollectionIconComponent;
  let fixture: ComponentFixture<CollectionIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollectionIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
