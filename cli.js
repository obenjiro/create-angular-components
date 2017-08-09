#!/usr/bin/env node
var program = require('commander');
var process = require('process');
var path = require('path');
var fse = require('fs-extra');
var package = require('./package.json');
var cac = require('./index');

program
    .description(package.description)
    .arguments('<file>')
    .action(function (file) {
        var fileText = fse.readFileSync(file, 'utf8');
        var components = cac.getComponentsFromHtml(fileText);
        var generatedCount = 0;

        components.forEach(function(component){
            var targetPath = path.join(process.cwd(), component.dashedName);
            fse.removeSync(targetPath);
            fse.mkdirSync(targetPath);            
            
            var tsFilePath = path.join(targetPath, component.dashedName + '.component.ts');
            var cssFilePath = path.join(targetPath, component.dashedName + '.component.css');
            var htmlFilePath = path.join(targetPath, component.dashedName + '.component.html');
            var specFilePath = path.join(targetPath, component.dashedName + '.component.spec.ts');

            fse.writeFileSync(tsFilePath, component.ts, 'utf8');
            fse.writeFileSync(cssFilePath, component.css, 'utf8');
            fse.writeFileSync(htmlFilePath, component.html, 'utf8');
            fse.writeFileSync(specFilePath, component.spec, 'utf8');
            generatedCount++;
        });

        console.log('Generated ' + generatedCount + ' components, into ' + process.cwd());
    })
    .version(package.version)
    .parse(process.argv);

// Check the program.args obj - if none, show help
if (program.args.length === 0) {
  program.help();
}