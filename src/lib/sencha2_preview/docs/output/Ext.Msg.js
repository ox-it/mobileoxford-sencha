Ext.data.JsonP.Ext_Msg({"subclasses":[],"tagname":"class","singleton":true,"inheritdoc":null,"statics":{"cfg":[],"css_var":[],"css_mixin":[],"event":[],"method":[],"property":[]},"requires":[],"code_type":"assignment","superclasses":[],"mixins":[],"component":false,"uses":[],"meta":{},"members":{"css_var":[],"cfg":[],"css_mixin":[],"event":[],"method":[{"tagname":"method","owner":"Ext.Msg","meta":{},"name":"alert","id":"method-alert"},{"tagname":"method","owner":"Ext.Msg","meta":{},"name":"confirm","id":"method-confirm"},{"tagname":"method","owner":"Ext.Msg","meta":{},"name":"prompt","id":"method-prompt"},{"tagname":"method","owner":"Ext.Msg","meta":{},"name":"show","id":"method-show"}],"property":[]},"mixedInto":[],"html_meta":{},"private":false,"name":"Ext.Msg","aliases":{},"inheritable":false,"allMixins":[],"extends":null,"id":"class-Ext.Msg","html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/MessageBox.html#Ext-Msg' target='_blank'>MessageBox.js</a></div></pre><div class='doc-contents'><p>A global shared singleton instance of the <a href=\"#!/api/Ext.MessageBox\" rel=\"Ext.MessageBox\" class=\"docClass\">Ext.MessageBox</a> class.</p>\n\n<p>Allows for simple creation of various different alerts and notifications.</p>\n\n<h1>Examples</h1>\n\n<h3>Alert</h3>\n\n<p>Use the <a href=\"#!/api/Ext.Msg-method-alert\" rel=\"Ext.Msg-method-alert\" class=\"docClass\">alert</a> method to show a basic alert:</p>\n\n<pre class='inline-example preview'><code><a href=\"#!/api/Ext.Msg-method-alert\" rel=\"Ext.Msg-method-alert\" class=\"docClass\">Ext.Msg.alert</a>('Title', 'The quick brown fox jumped over the lazy dog.', <a href=\"#!/api/Ext-property-emptyFn\" rel=\"Ext-property-emptyFn\" class=\"docClass\">Ext.emptyFn</a>);\n</code></pre>\n\n<h3>Prompt</h3>\n\n<p>Use the <a href=\"#!/api/Ext.Msg-method-prompt\" rel=\"Ext.Msg-method-prompt\" class=\"docClass\">prompt</a> method to show an alert which has a textfield:</p>\n\n<pre class='inline-example preview'><code><a href=\"#!/api/Ext.Msg-method-prompt\" rel=\"Ext.Msg-method-prompt\" class=\"docClass\">Ext.Msg.prompt</a>('Name', 'Please enter your name:', function(text) {\n    // process text value and close...\n});\n</code></pre>\n\n<h3>Confirm</h3>\n\n<p>Use the <a href=\"#!/api/Ext.Msg-method-confirm\" rel=\"Ext.Msg-method-confirm\" class=\"docClass\">confirm</a> method to show a confirmation alert (shows yes and no buttons).</p>\n\n<pre class='inline-example preview'><code><a href=\"#!/api/Ext.Msg-method-confirm\" rel=\"Ext.Msg-method-confirm\" class=\"docClass\">Ext.Msg.confirm</a>(\"Confirmation\", \"Are you sure you want to do that?\", <a href=\"#!/api/Ext-property-emptyFn\" rel=\"Ext-property-emptyFn\" class=\"docClass\">Ext.emptyFn</a>);\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-alert' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Msg'>Ext.Msg</span><br/><a href='source/MessageBox.html#Ext-Msg-method-alert' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Msg-method-alert' class='name expandable'>alert</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> title, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> message, <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> fn, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> scope</span> ) : <a href=\"#!/api/Ext.Msg\" rel=\"Ext.Msg\" class=\"docClass\">Ext.Msg</a></div><div class='description'><div class='short'>Displays a standard read-only message box with an OK button (comparable to the basic JavaScript alert prompt). ...</div><div class='long'><p>Displays a standard read-only message box with an OK button (comparable to the basic JavaScript alert prompt). If\na callback function is passed it will be called after the user clicks the button, and the itemId of the button\nthat was clicked will be passed as the only parameter to the callback.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The title bar text</p>\n</div></li><li><span class='pre'>message</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The message box body text</p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>A callback function which is called when the dialog is dismissed by clicking on the configured buttons.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>buttonId</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The itemId of the button pressed, one of: 'ok', 'yes', 'no', 'cancel'.</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Value of the input field if either <code>prompt</code> or <code>multiline</code> option is true.</p>\n</div></li><li><span class='pre'>opt</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The config object passed to show.</p>\n</div></li></ul></div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The scope (<code>this</code> reference) in which the callback is executed.\nDefaults to: the browser window</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Msg\" rel=\"Ext.Msg\" class=\"docClass\">Ext.Msg</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-confirm' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Msg'>Ext.Msg</span><br/><a href='source/MessageBox.html#Ext-Msg-method-confirm' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Msg-method-confirm' class='name expandable'>confirm</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> title, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> message, <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> fn, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> scope</span> ) : <a href=\"#!/api/Ext.Msg\" rel=\"Ext.Msg\" class=\"docClass\">Ext.Msg</a></div><div class='description'><div class='short'>Displays a confirmation message box with Yes and No buttons (comparable to JavaScript's confirm). ...</div><div class='long'><p>Displays a confirmation message box with Yes and No buttons (comparable to JavaScript's confirm). If a callback\nfunction is passed it will be called after the user clicks either button, and the id of the button that was\nclicked will be passed as the only parameter to the callback (could also be the top-right close button).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The title bar text</p>\n</div></li><li><span class='pre'>message</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The message box body text</p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>A callback function which is called when the dialog is dismissed by clicking on the configured buttons.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>buttonId</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The itemId of the button pressed, one of: 'ok', 'yes', 'no', 'cancel'.</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Value of the input field if either <code>prompt</code> or <code>multiline</code> option is true.</p>\n</div></li><li><span class='pre'>opt</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The config object passed to show.</p>\n</div></li></ul></div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The scope (<code>this</code> reference) in which the callback is executed.</p>\n\n<p>Defaults to: the browser window</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Msg\" rel=\"Ext.Msg\" class=\"docClass\">Ext.Msg</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-prompt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Msg'>Ext.Msg</span><br/><a href='source/MessageBox.html#Ext-Msg-method-prompt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Msg-method-prompt' class='name expandable'>prompt</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> title, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> message, <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> fn, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> scope, <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> multiLine, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> value, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> prompt</span> ) : <a href=\"#!/api/Ext.Msg\" rel=\"Ext.Msg\" class=\"docClass\">Ext.Msg</a></div><div class='description'><div class='short'>Displays a message box with OK and Cancel buttons prompting the user to enter some text (comparable to\nJavaScript's p...</div><div class='long'><p>Displays a message box with OK and Cancel buttons prompting the user to enter some text (comparable to\nJavaScript's prompt). The prompt can be a single-line or multi-line textbox. If a callback function is passed it\nwill be called after the user clicks either button, and the id of the button that was clicked (could also be the\ntop-right close button) and the text that was entered will be passed as the two parameters to the callback.</p>\n\n<p>Example usage:</p>\n\n<pre><code>    <a href=\"#!/api/Ext.Msg-method-prompt\" rel=\"Ext.Msg-method-prompt\" class=\"docClass\">Ext.Msg.prompt</a>(\n        'Welcome!',\n        'What\\'s your name going to be today?',\n        function(buttonId, value) {\n            console.log(value)\n        },\n        null,\n        false,\n        null,\n        { autocapitalize : true, placeholder : 'First-name please...' }\n    );\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The title bar text</p>\n</div></li><li><span class='pre'>message</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The message box body text</p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>A callback function which is called when the dialog is dismissed by clicking on the configured buttons.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>buttonId</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The itemId of the button pressed, one of: 'ok', 'yes', 'no', 'cancel'.</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Value of the input field if either <code>prompt</code> or <code>multiline</code> option is true.</p>\n</div></li><li><span class='pre'>opt</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The config object passed to show.</p>\n</div></li></ul></div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The scope (<code>this</code> reference) in which the callback is executed.</p>\n\n<p>Defaults to: the browser window.</p>\n</div></li><li><span class='pre'>multiLine</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>True to create a multiline textbox using the defaultTextHeight property,\nor the height in pixels to create the textbox.</p>\n\n<p>Defaults to: <code>false</code></p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Default value of the text input element.</p>\n</div></li><li><span class='pre'>prompt</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The configuration for the prompt. See the <a href=\"#!/api/Ext.MessageBox-cfg-prompt\" rel=\"Ext.MessageBox-cfg-prompt\" class=\"docClass\">prompt</a> documentation in <a href=\"#!/api/Ext.MessageBox\" rel=\"Ext.MessageBox\" class=\"docClass\">Ext.MessageBox</a>\nfor more information.</p>\n\n<p>Defaults to: <code>true</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Msg\" rel=\"Ext.Msg\" class=\"docClass\">Ext.Msg</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Msg'>Ext.Msg</span><br/><a href='source/MessageBox.html#Ext-Msg-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Msg-method-show' class='name expandable'>show</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config</span> ) : <a href=\"#!/api/Ext.Msg\" rel=\"Ext.Msg\" class=\"docClass\">Ext.Msg</a></div><div class='description'><div class='short'>Displays the global shared Ext.Msg instance of Ext.MessageBox with a specified configuration. ...</div><div class='long'><p>Displays the global shared <a href=\"#!/api/Ext.Msg\" rel=\"Ext.Msg\" class=\"docClass\">Ext.Msg</a> instance of <a href=\"#!/api/Ext.MessageBox\" rel=\"Ext.MessageBox\" class=\"docClass\">Ext.MessageBox</a> with a specified configuration. All\ndisplay functions (e.g. <a href=\"#!/api/Ext.Msg-method-prompt\" rel=\"Ext.Msg-method-prompt\" class=\"docClass\">prompt</a>, <a href=\"#!/api/Ext.Msg-method-alert\" rel=\"Ext.Msg-method-alert\" class=\"docClass\">alert</a>, <a href=\"#!/api/Ext.Msg-method-confirm\" rel=\"Ext.Msg-method-confirm\" class=\"docClass\">confirm</a>) on MessageBox call this function internally, although those calls\nare basic shortcuts and do not support all of the config options allowed here.</p>\n\n<p>Example usage:</p>\n\n<pre><code><a href=\"#!/api/Ext.Msg-method-show\" rel=\"Ext.Msg-method-show\" class=\"docClass\">Ext.Msg.show</a>({\n   title: 'Address',\n   msg: 'Please enter your address:',\n   width: 300,\n   buttons: Ext.MessageBox.OKCANCEL,\n   multiLine: true,\n   prompt : { maxlength : 180, autocapitalize : true },\n   fn: function(buttonId) {\n       console.log('You pressed the \"' + buttonId + '\" button.');\n   },\n   iconCls: Ext.MessageBox.INFO\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>An object with the following config options:</p>\n<ul><li><span class='pre'>buttons</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>/<a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>A button config object or Array of the same(e.g., <code>Ext.MessageBox.OKCANCEL</code> or <code>{text:'Foo', itemId:'cancel'}</code>),\nor false to not show any buttons.</p>\n\n<p>Defaults to: <code>false</code></p>\n</div></li><li><span class='pre'>cls</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>A custom CSS class to apply to the message box's container element.</p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>A callback function which is called when the dialog is dismissed by clicking on the configured buttons.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>buttonId</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The itemId of the button pressed, one of: 'ok', 'yes', 'no', 'cancel'.</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Value of the input field if either <code>prompt</code> or <code>multiline</code> option is true.</p>\n</div></li><li><span class='pre'>opt</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The config object passed to show.</p>\n</div></li></ul></div></li><li><span class='pre'>width</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>A fixed width for the MessageBox.</p>\n\n<p>Defaults to: <code>auto</code></p>\n</div></li><li><span class='pre'>height</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>A fixed height for the MessageBox.</p>\n\n<p>Defaults to: <code>auto</code></p>\n</div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The scope of the callback function</p>\n</div></li><li><span class='pre'>icon</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>A CSS class that provides a background image to be used as the body icon for the dialog\n(e.g. Ext.MessageBox.WARNING or 'custom-class').</p>\n</div></li><li><span class='pre'>modal</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>False to allow user interaction with the page while the message box is displayed.</p>\n\n<p>Defaults to: <code>true</code></p>\n</div></li><li><span class='pre'>msg</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>A string that will replace the existing message box body text.\nDefaults to the XHTML-compliant non-breaking space character <code>&amp;#160;</code>.</p>\n</div></li><li><span class='pre'>defaultTextHeight</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The default height in pixels of the message box's multiline textarea if displayed.</p>\n\n<p>Defaults to: <code>75</code></p>\n</div></li><li><span class='pre'>prompt</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>True to prompt the user to enter single-line text. Please view the <a href=\"#!/api/Ext.MessageBox-cfg-prompt\" rel=\"Ext.MessageBox-cfg-prompt\" class=\"docClass\">Ext.MessageBox.prompt</a> documentation in <a href=\"#!/api/Ext.MessageBox\" rel=\"Ext.MessageBox\" class=\"docClass\">Ext.MessageBox</a>.\nfor more information.</p>\n\n<p>Defaults to: <code>false</code></p>\n</div></li><li><span class='pre'>multiline</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>True to prompt the user to enter multi-line text.</p>\n\n<p>Defaults to: <code>false</code></p>\n</div></li><li><span class='pre'>title</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The title text.</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The string value to set into the active textbox element if displayed.</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Msg\" rel=\"Ext.Msg\" class=\"docClass\">Ext.Msg</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div></div></div>","alternateClassNames":[],"files":[{"href":"MessageBox.html#Ext-Msg","filename":"MessageBox.js"}]});