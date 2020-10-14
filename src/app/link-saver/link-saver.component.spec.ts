import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkSaverComponent } from './link-saver.component';

describe('LinkAdderComponent', () => {
  let component: LinkSaverComponent;
  let fixture: ComponentFixture<LinkSaverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkSaverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkSaverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
