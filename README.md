# Create Angular Components
Tool that allows you to create Angular (10+) components from HTML

# Install
```
npm install -g create-angular-components
```

# Prepare
Add *data-component* attribute for every component in your markup 
PS: Use CamelCase
```html
   <div data-component="Test">
        <h1>Test</h1>
        <div class="inside" data-component="InnerTest">
            <span>content</span>
            <div class="inside" data-component="SubChildTest">
                <span>content</span>
            </div>
            <div class="inside" data-component="SubChildTest2">
                <span>content2</span>
            </div>
        </div>
    </div>
```

# Use
```
cd example
cac index.html
# Generated 4 components, into /Users/UserName/example
```

