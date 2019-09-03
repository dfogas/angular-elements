const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/angular-elements/runtime-es2015.js',
        './dist/angular-elements/polyfills-es2015.js',
        './dist/angular-elements/scripts.js',
        './dist/angular-elements/main-es2015.js',
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/framework-poll.js');
    await fs.copyFile('./dist/angular-elements/styles.css', 'elements/styles.css')
    await fs.copy('./dist/angular-elements/assets/', 'elements/assets/')
})()
