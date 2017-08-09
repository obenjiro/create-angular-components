import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubChildTestComponent } from './sub-child-test.component';

describe('SubChildTestComponent', () => {
    let component: SubChildTestComponent;
    let fixture: ComponentFixture<SubChildTestComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SubChildTestComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SubChildTestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
    