import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailboxElementComponent } from './mailbox-element.component';

describe('MailboxElementComponent', () => {
  let component: MailboxElementComponent;
  let fixture: ComponentFixture<MailboxElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailboxElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailboxElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
