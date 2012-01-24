Ext.data.JsonP.proxies({"title":"Using Proxies","guide":"<h1>Using Proxies</h1>\n\n<p>Proxies are used by stores to handle the loading and saving of model data. There are two types of proxy: client and server. Examples of client proxies include Memory for storing data in the browser's memory and Local Storage which uses the HTML 5 local storage feature when available. Server proxies handle the marshaling of data to some remote server and examples include Ajax, JsonP, and Rest.</p>\n\n<p>Proxies can be defined directly on a model, like so:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('User', {\n    extend: '<a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>',\n    fields: ['id', 'name', 'age', 'gender'],\n    proxy: {\n        type: 'rest',\n        url : 'data/users',\n        reader: {\n            type: 'json',\n            root: 'users'\n        }\n    }\n});\n\n// Uses the User Model's Proxy\n<a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('<a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a>', {\n    model: 'User'\n});\n</code></pre>\n\n<p>This helps in two ways. First, it's likely that every store that uses the User model will need to load its data the same way, so we avoid having to duplicate the proxy definition for each store. Second, we can now load and save model data without a store:</p>\n\n<pre><code>// Gives us a reference to the User class\nvar User = <a href=\"#!/api/Ext.data.ModelManager-method-getModel\" rel=\"Ext.data.ModelManager-method-getModel\" class=\"docClass\">Ext.ModelMgr.getModel</a>('User');\n\nvar ed = <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('User', {\n    name: 'Ed Spencer',\n    age : 25\n});\n\n// We can save Ed directly without having to add him to a Store first because we\n// configured a RestProxy this will automatically send a POST request to the url /users\ned.save({\n    success: function(ed) {\n        console.log(\"Saved Ed! His ID is \"+ ed.getId());\n    }\n});\n\n// Load User 1 and do something with it (performs a GET request to /users/1)\nUser.load(1, {\n    success: function(user) {\n        console.log(\"Loaded user 1: \" + user.get('name'));\n    }\n});\n</code></pre>\n\n<p>There are also proxies that take advantage of the new capabilities of HTML5 - <a href=\"#/api/Ext.data.proxy.LocalStorage\">LocalStorage</a> and <a href=\"#/api/Ext.data.proxy.SessionStorage\">SessionStorage</a>. Although older browsers don't support these new HTML5 APIs, they're so useful that a lot of applications will benefit enormously by using them.</p>\n\n<p><a href=\"guides/data/examples/model_with_proxy/index.html\">Example of a Model that uses a Proxy directly</a></p>\n"});