import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubChildTest2Component } from './sub-child-test2.component';

describe('SubChildTest2Component', () => {
    let component: SubChildTest2Component;
    let fixture: ComponentFixture<SubChildTest2Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SubChildTest2Component ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SubChildTest2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
    