<h1>menufy.js</h1>

<h3>Less than 30 lines of code and comments to generate a dynamic html menu based on each id located in the page</h3>
<p>Menufy.js scrapes an html doc to find its ids, and generates a menu that allows you to move from section to section in the page seamlessly. The script is written in vanilla javascript requiring no libraries to run. All that is required in the HTML is:</p>

```
<ul id="mainNav"></ul>
```

<p>The menu will be appended to this element and will populate from top to bottom. Each id is cleaned up for display and appears without hyphens to improve readbility. a sample use of this code can be found at <a href="http://ideation.davidmoed.com" target="_blank"></a> and a sample css sheet can be found in this repository.</p>
