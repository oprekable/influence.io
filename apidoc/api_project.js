define({
  "name": "Apidoc-UseInfluence",
  "version": "0.3.0",
  "title": "Custom apiDoc browser title",
  "url": "https://useinfluence.co",
  "description": "apidoc Influence project",
  "sampleUrl": "https://useinfluence.co",
  "header": {
    "title": "Influence",
    "content": "<h1>text from header.md</h1>\n<p>This text is from file &quot;header.md&quot;.</p>\n<h2><span id=\"api--for-a-submenu-entry\">HowTo include</span></h2>\n<p>In your projects &quot;package.json&quot; you can set &quot;apidoc.header&quot; with a title and a filename to include this file into your documentation.</p>\n<p>This  attempts to integrate &quot;header.md&quot; and &quot;footer.md&quot;.</p>\n<pre><code>{\n  &quot;name&quot;: &quot;&quot;,\n  &quot;version&quot;: &quot;0.3.0&quot;,\n  &quot;description&quot;: &quot;apidoc  project.&quot;,\n  &quot;apidoc&quot;: {\n    &quot;header&quot;: {\n      &quot;title&quot;: &quot;My Api's&quot;,\n      &quot;filename&quot;: &quot;header.md&quot;\n    },\n    &quot;footer&quot;: {\n      &quot;title&quot;: &quot;My own footer title&quot;,\n      &quot;filename&quot;: &quot;footer.md&quot;\n    }\n  }\n}\n</code></pre>\n"
  },
  "footer": {
    "title": "Influence",
    "content": "<h1>text from footer.md</h1>\n<p>This text is from file &quot;footer.md&quot;.</p>\n<h2>HowTo include</h2>\n<p>Watch header.md for further information.</p>\n"
  },
  "template": {
    "withCompare": true,
    "withGenerator": true
  },
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2018-08-06T13:28:07.132Z",
    "url": "http://apidocjs.com",
    "version": "0.17.6"
  }
});
