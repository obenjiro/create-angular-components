var jsdom = require('jsdom');
var dashify = require('dashify');
var JSDOM = jsdom.JSDOM;

var getCss = function() {
    // TODO (we can use BEM here)
    return '';
}

var getTsCode = function(name, dashedName) {
    return `import { Component } from '@angular/core';

@Component({
    selector: '${dashedName}',
    templateUrl: './${dashedName}.component.html',
    styleUrls: ['./${dashedName}.component.css']
})
export class ${name}Component {
    constructor () {}
}
    `
}

var getSpec = function(name, dashedName) {
    return `import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ${name}Component } from './${dashedName}.component';

describe('${name}Component', () => {
    let component: ${name}Component;
    let fixture: ComponentFixture<${name}Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ${name}Component ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(${name}Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
    `
}

var generator = {

    getComponentsFromHtml: function(fileText) {
        var that = this;
        var dom = new JSDOM(fileText);
        var nodes = dom.window.document.querySelectorAll('[data-component]');
        var nodesArray = Array.prototype.slice.call(nodes);
        var components = nodesArray.reverse().map(function(node){
            return that.getComponentFromNode(node);
        });
        return components;
    },

    getComponentFromNode: function(node) {
        node = node.cloneNode(true);
        var name = node.getAttribute('data-component');
        var dashedName = dashify(name);

        var children = node.querySelectorAll('[data-component]');
        for (var i = 0; i < children.length; i++) {
            var cmp = this.getComponentFromNode(children[i]);
            children[i].outerHTML = '<' + cmp.dashedName + '>' + '</' + cmp.dashedName + '>';
        }

        node.removeAttribute('data-component');
        
        return {
            name: name,
            dashedName: dashedName,
            ts: getTsCode(name, dashedName),
            spec: getSpec(name, dashedName),
            css: getCss(),
            html: node.outerHTML,
        }
    }
};

module.exports = generator;