import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerTestComponent } from './inner-test.component';

describe('InnerTestComponent', () => {
    let component: InnerTestComponent;
    let fixture: ComponentFixture<InnerTestComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ InnerTestComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InnerTestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
    