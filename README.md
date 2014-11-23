# UI5 Boilerplate

UI5 Boilerplate is a template for building Apps based on OpenUI5 or SAPUI5.
The UI5 Boilerplate uses the sap.m.SplitApp which itself is especially designed for tablet usage (iPad), but is also usable on smartphones with iOS and Android (iPhone 4s/5/5s/6, Nexus 4/5, ....). 

It could be used as starting point for your own development.

* Source: [https://github.com/6of5/UI5SplitApp-Boilerplate](https://github.com/6of5/UI5SplitApp-Boilerplate)
```
git clone https://github.com/6of5/UI5SplitApp-Boilerplate.git
```

More Info can be found here:
* UI5 Boilerplate Wiki Page: [All Infos collected on dedicated 6of5 Wiki Page](https://www.6of5.com/6of5/go/show/1001/UI5/displaypage.htm?PAGE=UI5Boilerplate)  
* UI5 Boilerplate explained Part 1: [http://scn.sap.com/community/developer-center/front-end/blog/2014/02/01/ui5-boilerplate-explained-part-1](http://scn.sap.com/community/developer-center/front-end/blog/2014/02/01/ui5-boilerplate-explained-part-1)
* UI5 SplitApp Boilerplate [http://scn.sap.com/community/developer-center/front-end/blog/2014/01/13/ui5-mobile-splitapp-boilerplate/](http://scn.sap.com/community/developer-center/front-end/blog/2014/01/13/ui5-mobile-splitapp-boilerplate/)
* Blog Entries [http://blog.mypro.de/tag/ui5boilerplate/](http://blog.mypro.de/tag/ui5boilerplate/)
* Usage with Eclipse + SAP UI5 Toolkit see [http://blog.mypro.de/2014/01/14/ui5-boilerplate-with-eclipse/](http://blog.mypro.de/2014/01/14/ui5-boilerplate-with-eclipse/), use branch eclipseKepler
* Follow UI5 Boilerplate on Twitter: [@UI5bp](http://twitter.com/UI5bp)
* Contacts: Twitter [@hpseitz](http://twitter.com/hpseitz) or Email to information@6of5.com

## Features
* Based on OpenUI5, more Infos under [http://sap.github.io/openui5/](http://sap.github.io/openui5/)
* Based on sap.m library of UI5, which provide touch optimized controls
* Follows "Mobile First" approach, but App also works on Desktop (Chrome latest, Firefox latest, Safari, IE9 and IE10)
* Default file structure (i18n, model, view, css, js)
* Navigation via Launchpad (default) or LeftMenu navigation
* Automatic generation of navigation items (Launchpad or LeftMenu)
* i18n base model

## Local Development with Grunt
Assuming Node.js is already installed.
### Setup
Run the following commands once:
```
npm install -g grunt-cli
npm install
```
### Run Dev Server and Open UI5 Boilerplate in Browser
Execute following commands to start the dev server:
```
grunt server
```

## Usage with Eclipse 4.3 + SAP UI Development Toolkit for HTML5
* use branch eclipseKepler instead of master branch
* More Details under [http://blog.mypro.de/2014/01/14/ui5-boilerplate-with-eclipse/](http://blog.mypro.de/2014/01/14/ui5-boilerplate-with-eclipse/)
```
git clone -b eclipseKepler https://github.com/6of5/UI5SplitApp-Boilerplate.git
```

## License
Apache License, Version 2.0

![ui5 Logo](http://blog.mypro.de/wp-content/uploads/2014/01/ui5_144.jpg)