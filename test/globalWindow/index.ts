const jsdom = require('jsdom');
const {JSDOM} = jsdom;
const dom = new JSDOM(
	`<html>
         <body>
         </body>
       </html>`,
	{url: 'http://localhost'},
);
global.document = dom.window.document;
global.window = dom.window;
global.DOMParser = window.DOMParser;
export default global;
