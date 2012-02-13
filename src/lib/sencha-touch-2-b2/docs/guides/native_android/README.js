Ext.data.JsonP.native_android({"title":"Native Android Packaging","guide":"<h1>Sencha Touch 2 Native Packaging for Android</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/native_android-section-1'>Requirements</a></li>\n<li><a href='#!/guide/native_android-section-2'>Steps to package your Android application</a></li>\n</ol>\n</div>\n\n<h2 id='native_android-section-1'>Requirements</h2>\n\n<ul>\n<li><a href=\"http://developer.android.com/sdk/index.html\">Android SDK Tools</a> (Revisions 13+)</li>\n<li>Optional. <a href=\"http://www.eclipse.org/\">Eclipse</a></li>\n</ul>\n\n\n<h2 id='native_android-section-2'>Steps to package your Android application</h2>\n\n<ol>\n<li>Prerequisite: Obtain an appropriate Android ready certificate (debug or release) for signing the application</li>\n<li>Install <a href=\"http://www.sencha.com/products/sdk-tools/\">Sencha SDK Tools</a> (SenchaSDKTools 2.0).</li>\n<li>Create a packaging configuration file to be use with the packager.</li>\n<li>Run the packager to create a packaged <application>.apk.</li>\n</ol>\n\n\n<h3>Step 1: Android certification generation</h3>\n\n<p>The Android Keytool included in the Android SDK tools is one way of creating certificate for signing Android applications. Below is an example of a Keytool command that generates a private key:</p>\n\n<pre><code>$ keytool -genkey -v -keystore my-release-key.keystore -alias alias_name\n    -keyalg RSA -keysize 2048 -validity 10000\n</code></pre>\n\n<p>Follow the steps on the Android developers guide “<a href=\"http://developer.android.com/guide/publishing/app-signing.html\">Signing Your Applications</a>” for more information about creating certificates and signing applications.</p>\n\n<h3>Step 2: Install the Sencha SDK Tools.</h3>\n\n<ul>\n<li>Run the Sencha SDK installation: SenchaSDKTools (SenchaSDKTools-2.0.0-Beta)</li>\n<li>The <code>sencha</code> command that includes the package option will be installed to the\nspecified location during installation (default: Applications/SenchaSDKTools-2.0.0-Beta/command).</li>\n</ul>\n\n\n<h3>Step 3: Create a packaging configuration file to be used with the native packager.</h3>\n\n<p>The configuration file has the following format:</p>\n\n<pre><code>{\n    \"applicationName\": \"&lt;AppName&gt;\",\n    \"applicationId\": \"&lt;AppID&gt;\",\n    \"outputPath\": \"&lt;AppPackageOutputPath&gt;\",\n    \"iconName\": \"&lt;AppIconName&gt;\",\n    \"versionString\": \"&lt;AppVersion&gt;\",\n    \"webAppPath\": \"&lt;PathToWebApp&gt;\",\n    \"configuration\": \"&lt;Release | Debug&gt;\",\n    \"platform\": \"&lt;Android | AndroidEmulator&gt;\",\n    \"certificatePath\": \"&lt;certificatePath&gt;\",\n    \"certificateAlias\": \"&lt;certificateAlias&gt;\",\n    \"sdkPath\": \"/android-sdk-mac_86\",\n    \"orientations\": [\n        \"portrait\",\n        \"landscapeLeft\",\n        \"landscapeRight\",\n        \"portraitUpsideDown\"\n    ],\n    \"deviceType\": \"&lt;Not applicable for Android&gt;\"\n}\n</code></pre>\n\n<p>A configuration file template can be created by running the following command:</p>\n\n<pre><code>sencha package generate &lt;configTemplate.json&gt;\n</code></pre>\n\n<p><code>&lt;configTemplate.json&gt;</code> is the name of the configuration template file.</p>\n\n<p><em>Note:</em> the <code>&lt;configTemplate.json&gt;</code> path or filename cannot contain any space.</p>\n\n<p>The following parameters are applicable to Android packages:</p>\n\n<pre><code>\"applicationName\":\"&lt;AppName&gt;\"\n</code></pre>\n\n<p>Specifies the name of your application (<code>AppName</code>). The output file will have the name <code>&lt;AppName&gt;.apk</code>.</p>\n\n<pre><code>\"applicationId\":\"&lt;AppID&gt;\"\n</code></pre>\n\n<p>Specifies an ID given to your application. It's suggested that you use a nameSpace for your app, such as <code>com.sencha.Touch2Package</code>.</p>\n\n<pre><code>\"outputPath\":\"&lt;AppPackageOutputPath&gt;\"\n</code></pre>\n\n<p>Specifies the output location of the packaged application <code>&lt;application.apk&gt;</code>.</p>\n\n<pre><code>\"iconName\":\"&lt;AppIconName&gt;\"\n</code></pre>\n\n<p>Specifies the launcher icon file to be used for your application. Refer to the Android <a href=\"http://developer.android.com/guide/practices/ui_guidelines/icon_design_launcher.html\">Launcher Icons</a> guide for further information on icon file specifications.</p>\n\n<pre><code>\"versionString\":\"&lt;AppVersion&gt;\",\n</code></pre>\n\n<p>Specifies the version of the application.</p>\n\n<pre><code>\"webAppPath\":\"&lt;PathToWebApp&gt;\"\n</code></pre>\n\n<p>Specifies the path of the web application to be packaged.</p>\n\n<pre><code>\"configuration\":\"&lt;Release | Debug&gt;\"\n</code></pre>\n\n<p>Specifies the build type from either <code>Release</code> or <code>Debug</code>.</p>\n\n<pre><code>\"platform\":\"&lt;Android | AndroidEmulator&gt;\"\n</code></pre>\n\n<p>Specifies if the build is for the Android device (Android) or the Android Emulator (AndroidEmulator).</p>\n\n<pre><code>\"certificatePath\":\"&lt;certificatePath&gt;\",\n</code></pre>\n\n<p>Specifies a specific Certificate location for the certificate used for signing your application.</p>\n\n<pre><code>\"certificateAlias\":\"&lt;CertificateAlias&gt;\"\n</code></pre>\n\n<p>Specifies a specific Certificate Alias to use for signing your application.</p>\n\n<pre><code>\"orientations\": [\"portrait\", \"landscapeLeft\", \"landscapeRight\", \"portraitUpsideDown\"\n</code></pre>\n\n<p>Optional parameter. Specifies the orientations of the application. Available options: <code>portrait</code>, <code>landscape</code>, <code>landscapeRight</code>, and <code>portraitUpsideDown</code>. If omitted, defaults to all four orientations mode.</p>\n\n<pre><code>\"deviceType\"\n</code></pre>\n\n<p>This is not applicable for Android applications. This config parameter is ignored when building an Android application.</p>\n\n<h4>Sample debug configuration file</h4>\n\n<pre><code>{\n    \"applicationName\":\"SenchaTouch2Package\",\n    \"applicationId\":\"com.sencha.Touch2Package\",\n    \"iconName\":\"icon.png\",\n    \"versionString\":\"1.0\",\n    \"outputPath\":\"~/Desktop/STBuild-Android\",\n    \"webAppPath\":\"~/Desktop/www/\",\n    \"configuration\":\"Debug\",\n    \"platform\":\"Android\",\n    \"deviceType\":\"Universal\",\n    \"certificatePath\":\"~/Desktop/debug.keystore\",\n    \"certificateAlias\":\"androiddebugkey\",\n    \"sdkPath\":\"~/Desktop/android-sdk-mac_x86\",\n    \"orientations\": [\n        \"portrait\",\n        \"landscapeLeft\",\n        \"landscapeRight\",\n        \"portraitUpsideDown\"\n    ]\n}\n</code></pre>\n\n<h4>Sample release configuration file</h4>\n\n<pre><code>{\n    \"applicationName\":\"SenchaTouch2Package\",\n    \"applicationId\":\"com.sencha.Touch2Package\",\n    \"iconName\":\"icon.png\",\n    \"versionString\":\"1.0\",\n    \"outputPath\":\"~/Desktop/STBuild-Android\",\n    \"webAppPath\":\"~/Desktop/www/\",\n    \"configuration\":\"Release\",\n    \"platform\":\"Android\",\n    \"deviceType\":\"Universal\",\n    \"certificatePath\":\"~/Desktop/senchatouch-key.keystore\",\n    \"certificateAlias\":\"senchatouch\",\n    \"sdkPath\":\"~/Desktop/android-sdk-mac_x86\",\n    \"orientations\": [\n        \"portrait\",\n        \"landscapeLeft\",\n        \"landscapeRight\",\n        \"portraitUpsideDown\"\n    ]\n}\n</code></pre>\n\n<h3>Step 4: Run the packager to create a packaged <code>&lt;application&gt;.apk</code></h3>\n\n<p><strong>Packaging a debug application and run it on an Android Emulator</strong></p>\n\n<p>Prerequisite: The Platform and Configuration setting needs to be set in the config file, for example</p>\n\n<pre><code>platform: AndroidEmulator\nconfiguration: Debug\n</code></pre>\n\n<p>To package a debug application to run on the Android Emulator, do the following:</p>\n\n<ul>\n<li>Start the Android Emulator</li>\n<li><p>Issue the following command:</p>\n\n<pre><code>sencha package run &lt;configFile.json&gt;\n</code></pre></li>\n</ul>\n\n\n<p>The application will start in the already running Android Emulator after successful execution of this command. If Android Emulator is not started before issuing the command,  Android Emulator will not start automatically. If package is successful, an <AppName>.apk is available in the application output\nlocation for you to manually test it on an Android Emulator or a device.</p>\n\n<p>More info about Android Emulator can be found on the Android Developer Guide: <a href=\"http://developer.android.com/guide/developing/devices/emulator.html\">Using the Android Emulator</a>.</p>\n\n<h3>Packaging the application for distribution</h3>\n\n<p>To package a signed application to run on the device, issue the following command:</p>\n\n<pre><code>sencha package &lt;configFile.json&gt;\n</code></pre>\n\n<p>An <code>&lt;AppName.apk&gt;</code> is created in the specified output location. This is the application that you can use to release for distribution.</p>\n\n<h3>See Also</h3>\n\n<ol>\n<li><a href=\"http://developer.android.com/guide/publishing/app-signing.html\">Signing Your Applications</a></li>\n<li><a href=\"http://developer.android.com/sdk/eclipse-adt.html\">Installing the ADT Plugin for Eclipse</a></li>\n<li><a href=\"http://www.eclipse.org/\">Eclipse</a></li>\n<li><a href=\"http://developer.android.com/guide/publishing/app-signing.html%23setup\">Managing Virtual Devices for Android Emulator</a></li>\n</ol>\n\n"});