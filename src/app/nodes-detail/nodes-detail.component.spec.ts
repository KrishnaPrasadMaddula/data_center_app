import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodesDetailComponent } from './nodes-detail.component';

describe('NodesDetailComponent', () => {
  let component: NodesDetailComponent;
  let fixture: ComponentFixture<NodesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NodesDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
