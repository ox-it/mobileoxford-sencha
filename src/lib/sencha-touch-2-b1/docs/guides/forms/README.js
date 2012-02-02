Ext.data.JsonP.forms({"title":"Using Forms","guide":"<h1>Using Forms in Sencha Touch 2</h1>\n<p><strong>Contents</strong></p>\n<ul class='toc'>\n<li><a href='#!/guide/forms-section-1'>Creating a form</a></li>\n<li><a href='#!/guide/forms-section-2'>Loading data</a></li>\n<li><a href='#!/guide/forms-section-3'>Retrieving form data</a></li>\n<li><a href='#!/guide/forms-section-4'>Submitting forms</a></li>\n</ul>\n\n<p>Most apps that require user input will make use of forms. Forms in Sencha Touch are a wrapper around normal HTML5 forms, with additional options for validating and submitting data, plus an easy way to lay fields out in a pleasing visual style.</p>\n\n<h2 id='forms-section-1'>Creating a form</h2>\n\n<p>The Form panel presents a set of form fields and provides convenient ways to load and save data. Usually a form panel just contains the set of fields you want to display, ordered inside the items configuration like this:</p>\n\n<pre class='inline-example preview'><code><a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('<a href=\"#!/api/Ext.form.Panel\" rel=\"Ext.form.Panel\" class=\"docClass\">Ext.form.Panel</a>', {\n    fullscreen: true,\n\n    items: [\n        {\n            xtype: 'textfield',\n            name : 'name',\n            label: 'Name'\n        },\n        {\n            xtype: 'emailfield',\n            name : 'email',\n            label: 'Email'\n        },\n        {\n            xtype: 'passwordfield',\n            name : 'password',\n            label: 'Password'\n        }\n    ]\n});\n</code></pre>\n\n<p>Here we just created a simple form panel which could be used as a registration form to sign up to your service. We added a plain <a href=\"#!/api/Ext.field.Text\" rel=\"Ext.field.Text\" class=\"docClass\">text field</a> for the user's Name, an <a href=\"#!/api/Ext.field.Email\" rel=\"Ext.field.Email\" class=\"docClass\">email field</a> and finally a <a href=\"#!/api/Ext.field.Password\" rel=\"Ext.field.Password\" class=\"docClass\">password field</a>. In each case we provided a <a href=\"#!/api/Ext.field.Field-cfg-name\" rel=\"Ext.field.Field-cfg-name\" class=\"docClass\">name</a> config on the field so that we can identify it later on when we load and save data on the form.</p>\n\n<h2 id='forms-section-2'>Loading data</h2>\n\n<p>Using the form we created above, we can load data into it in a few different ways, the easiest is to use <a href=\"#!/api/Ext.form.Panel-method-setValues\" rel=\"Ext.form.Panel-method-setValues\" class=\"docClass\">setValues</a>:</p>\n\n<pre><code>form.setValues({\n    name: 'Ed',\n    email: 'ed@sencha.com',\n    password: 'secret'\n});\n</code></pre>\n\n<p>It's also easy to load <a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> instances into a form - let's say we have a User model and want to load a particular instance into our form:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('MyApp.model.User', {\n    fields: ['name', 'email', 'password']\n});\n\nvar ed = <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('MyApp.model.User', {\n    name: 'Ed',\n    email: 'ed@sencha.com',\n    password: 'secret'\n});\n\nform.setRecord(ed);\n</code></pre>\n\n<h2 id='forms-section-3'>Retrieving form data</h2>\n\n<p>Getting data out of the form panel is simple and is usually achieve vai the <a href=\"#!/api/Ext.form.Panel-method-getValues\" rel=\"Ext.form.Panel-method-getValues\" class=\"docClass\">getValues</a> method:</p>\n\n<pre><code>var values = form.getValues();\n\n//values now looks like this:\n{\n    name: 'Ed',\n    email: 'ed@sencha.com',\n    password: 'secret'\n}\n</code></pre>\n\n<p>It's also possible to listen to the change events on individual fields to get more timely notification of changes that the user is making. Here we expand on the example above with the User model, updating the model as soon as any of the fields are changed:</p>\n\n<pre><code>var form = <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('<a href=\"#!/api/Ext.form.Panel\" rel=\"Ext.form.Panel\" class=\"docClass\">Ext.form.Panel</a>', {\n    listeners: {\n        '&gt; field': {\n            change: function(field, newValue, oldValue) {\n                ed.set(field.getName(), newValue);\n            }\n        }\n    },\n    items: //as before\n});\n</code></pre>\n\n<p>The above used a new capability of Touch 2.0, which enables you to specify listeners on child components of any container. In this case, we attached a listener to the <a href=\"#!/api/Ext.field.Text-event-change\" rel=\"Ext.field.Text-event-change\" class=\"docClass\">change</a> event of each form field that is a direct child of the form panel. Our listener gets the name of the field that fired the change event, and updates our <a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> instance with the new value. For example, changing the email field in the form will update the Model's email field.</p>\n\n<h2 id='forms-section-4'>Submitting forms</h2>\n\n<p>There are a few ways to submit form data. In our example above we have a Model instance that we have updated, giving us the option to use the Model's <a href=\"#!/api/Ext.data.Model-method-save\" rel=\"Ext.data.Model-method-save\" class=\"docClass\">save</a> method to persist the changes back to our server, without using a traditional form submission. Alternatively, we can send a normal browser form submit using the <a href=\"#!/api/Ext.form.Panel-method-submit\" rel=\"Ext.form.Panel-method-submit\" class=\"docClass\">submit</a> method:</p>\n\n<pre><code>form.submit({\n    url: 'url/to/submit/to',\n    method: 'POST',\n    success: function() {\n        alert('form submitted successfully!');\n    }\n});\n</code></pre>\n\n<p>In this case we provided the url to submit the form to inside the submit call - alternatively you can just set the <a href=\"#!/api/Ext.form.Panel-cfg-url\" rel=\"Ext.form.Panel-cfg-url\" class=\"docClass\">url</a> configuration when you create the form. We can specify other parameters (see <a href=\"#!/api/Ext.form.Panel-method-submit\" rel=\"Ext.form.Panel-method-submit\" class=\"docClass\">submit</a> for a full list), including callback functions for success and failure, which are called depending on whether or not the form submission was successful. These functions are usually used to take some action in your app after your data has been saved to the server side.</p>\n"});