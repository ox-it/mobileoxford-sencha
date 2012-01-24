Ext.data.JsonP.Ext_data_writer_Xml({"subclasses":[],"tagname":"class","singleton":false,"inheritdoc":null,"statics":{"cfg":[],"css_var":[],"css_mixin":[],"event":[],"method":[],"property":[]},"requires":[],"code_type":"ext_define","superclasses":["Ext.data.writer.Writer","Ext.data.writer.Xml"],"mixins":[],"component":false,"uses":[],"meta":{"author":["Ed Spencer"],"markdown":true},"members":{"css_var":[],"cfg":[{"tagname":"cfg","owner":"Ext.data.writer.Xml","meta":{},"name":"defaultDocumentRoot","id":"cfg-defaultDocumentRoot"},{"tagname":"cfg","owner":"Ext.data.writer.Xml","meta":{},"name":"documentRoot","id":"cfg-documentRoot"},{"tagname":"cfg","owner":"Ext.data.writer.Xml","meta":{},"name":"header","id":"cfg-header"},{"tagname":"cfg","owner":"Ext.data.writer.Writer","meta":{},"name":"nameProperty","id":"cfg-nameProperty"},{"tagname":"cfg","owner":"Ext.data.writer.Xml","meta":{},"name":"record","id":"cfg-record"},{"tagname":"cfg","owner":"Ext.data.writer.Writer","meta":{},"name":"writeAllFields","id":"cfg-writeAllFields"}],"css_mixin":[],"event":[],"method":[{"tagname":"method","owner":"Ext.data.writer.Writer","meta":{},"name":"constructor","id":"method-constructor"},{"tagname":"method","owner":"Ext.data.writer.Writer","meta":{},"name":"getRecordData","id":"method-getRecordData"},{"tagname":"method","owner":"Ext.data.writer.Writer","meta":{},"name":"write","id":"method-write"}],"property":[]},"mixedInto":[],"html_meta":{"author":null,"markdown":null},"private":false,"name":"Ext.data.writer.Xml","aliases":{"writer":["xml"]},"inheritable":false,"allMixins":[],"extends":"Ext.data.writer.Writer","id":"class-Ext.data.writer.Xml","html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>Ext.data.XmlWriter</div><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.data.writer.Writer' rel='Ext.data.writer.Writer' class='docClass'>Ext.data.writer.Writer</a><div class='subclass '><strong>Ext.data.writer.Xml</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Xml2.html#Ext-data-writer-Xml' target='_blank'>Xml.js</a></div></pre><div class='doc-contents'><p>This class is used to write <a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> data to the server in an XML format.\nThe <a href=\"#!/api/Ext.data.writer.Xml-cfg-documentRoot\" rel=\"Ext.data.writer.Xml-cfg-documentRoot\" class=\"docClass\">documentRoot</a> property is used to specify the root element in the XML document.\nThe <a href=\"#!/api/Ext.data.writer.Xml-cfg-record\" rel=\"Ext.data.writer.Xml-cfg-record\" class=\"docClass\">record</a> option is used to specify the element name for each record that will make\nup the XML document.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-defaultDocumentRoot' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.writer.Xml'>Ext.data.writer.Xml</span><br/><a href='source/Xml2.html#Ext-data-writer-Xml-cfg-defaultDocumentRoot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.writer.Xml-cfg-defaultDocumentRoot' class='name expandable'>defaultDocumentRoot</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The root to be used if documentRoot is empty and a root is required\nto form a valid XML document. ...</div><div class='long'><p>The root to be used if <a href=\"#!/api/Ext.data.writer.Xml-cfg-documentRoot\" rel=\"Ext.data.writer.Xml-cfg-documentRoot\" class=\"docClass\">documentRoot</a> is empty and a root is required\nto form a valid XML document.</p>\n<p>Defaults to: <code>&quot;xmlData&quot;</code></p></div></div></div><div id='cfg-documentRoot' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.writer.Xml'>Ext.data.writer.Xml</span><br/><a href='source/Xml2.html#Ext-data-writer-Xml-cfg-documentRoot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.writer.Xml-cfg-documentRoot' class='name expandable'>documentRoot</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The name of the root element of the document. ...</div><div class='long'><p>The name of the root element of the document. Defaults to <tt>'xmlData'</tt>.\nIf there is more than 1 record and the root is not specified, the default document root will still be used\nto ensure a valid XML document is created.</p>\n<p>Defaults to: <code>&quot;xmlData&quot;</code></p></div></div></div><div id='cfg-header' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.writer.Xml'>Ext.data.writer.Xml</span><br/><a href='source/Xml2.html#Ext-data-writer-Xml-cfg-header' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.writer.Xml-cfg-header' class='name expandable'>header</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>A header to use in the XML document (such as setting the encoding or version). ...</div><div class='long'><p>A header to use in the XML document (such as setting the encoding or version).\nDefaults to <tt>''</tt>.</p>\n<p>Defaults to: <code>&quot;&quot;</code></p></div></div></div><div id='cfg-nameProperty' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.writer.Writer' rel='Ext.data.writer.Writer' class='defined-in docClass'>Ext.data.writer.Writer</a><br/><a href='source/Writer.html#Ext-data-writer-Writer-cfg-nameProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.writer.Writer-cfg-nameProperty' class='name expandable'>nameProperty</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>This property is used to read the key for each value that will be sent to the server. ...</div><div class='long'><p>This property is used to read the key for each value that will be sent to the server.\nFor example:</p>\n\n<pre><code>    <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Person', {\n        extend: '<a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>',\n        fields: [{\n            name: 'first',\n            mapping: 'firstName'\n        }, {\n            name: 'last',\n            mapping: 'lastName'\n        }, {\n            name: 'age'\n        }]\n    });\n    new <a href=\"#!/api/Ext.data.writer.Writer\" rel=\"Ext.data.writer.Writer\" class=\"docClass\">Ext.data.writer.Writer</a>({\n        writeAllFields: true,\n        nameProperty: 'mapping'\n    });\n\n    // This will be sent to the server\n    {\n        firstName: 'first name value',\n        lastName: 'last name value',\n        age: 1\n    }\n\n</code></pre>\n\n\n<p>Defaults to <tt>name</tt>. If the value is not present, the field name will always be used.</p>\n<p>Defaults to: <code>&quot;name&quot;</code></p></div></div></div><div id='cfg-record' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.writer.Xml'>Ext.data.writer.Xml</span><br/><a href='source/Xml2.html#Ext-data-writer-Xml-cfg-record' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.writer.Xml-cfg-record' class='name expandable'>record</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The name of the node to use for each record. ...</div><div class='long'><p>The name of the node to use for each record. Defaults to <tt>'record'</tt>.</p>\n<p>Defaults to: <code>&quot;record&quot;</code></p></div></div></div><div id='cfg-writeAllFields' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.writer.Writer' rel='Ext.data.writer.Writer' class='defined-in docClass'>Ext.data.writer.Writer</a><br/><a href='source/Writer.html#Ext-data-writer-Writer-cfg-writeAllFields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.writer.Writer-cfg-writeAllFields' class='name expandable'>writeAllFields</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>True to write all fields from the record to the server. ...</div><div class='long'><p>True to write all fields from the record to the server. If set to false it\nwill only send the fields that were modified. Defaults to <tt>true</tt>. Note that any fields that have\n<a href=\"#!/api/Ext.data.Field-cfg-persist\" rel=\"Ext.data.Field-cfg-persist\" class=\"docClass\">Ext.data.Field.persist</a> set to false will still be ignored.</p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.writer.Writer' rel='Ext.data.writer.Writer' class='defined-in docClass'>Ext.data.writer.Writer</a><br/><a href='source/Writer.html#Ext-data-writer-Writer-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.data.writer.Writer-method-constructor' class='name expandable'>Ext.data.writer.Xml</a>( <span class='pre'>[<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config]</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>Creates new Writer. ...</div><div class='long'><p>Creates new Writer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>Config object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getRecordData' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.writer.Writer' rel='Ext.data.writer.Writer' class='defined-in docClass'>Ext.data.writer.Writer</a><br/><a href='source/Writer.html#Ext-data-writer-Writer-method-getRecordData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.writer.Writer-method-getRecordData' class='name expandable'>getRecordData</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> record</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>Formats the data for each record before sending it to the server. ...</div><div class='long'><p>Formats the data for each record before sending it to the server. This\nmethod should be overridden to format the data in a way that differs from the default.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The record that we are writing to the server.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>An object literal of name/value keys to be written to the server.\nBy default this method returns the data property on the record.</p>\n</div></li></ul></div></div></div><div id='method-write' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.writer.Writer' rel='Ext.data.writer.Writer' class='defined-in docClass'>Ext.data.writer.Writer</a><br/><a href='source/Writer.html#Ext-data-writer-Writer-method-write' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.writer.Writer-method-write' class='name expandable'>write</a>( <span class='pre'><a href=\"#!/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a> request</span> ) : <a href=\"#!/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a></div><div class='description'><div class='short'>Prepares a Proxy's Ext.data.Request object ...</div><div class='long'><p>Prepares a Proxy's <a href=\"#!/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a> object</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>request</span> : <a href=\"#!/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a><div class='sub-desc'><p>The request object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a></span><div class='sub-desc'><p>The modified request object</p>\n</div></li></ul></div></div></div></div></div></div></div>","alternateClassNames":["Ext.data.XmlWriter"],"files":[{"href":"Xml2.html#Ext-data-writer-Xml","filename":"Xml.js"}]});