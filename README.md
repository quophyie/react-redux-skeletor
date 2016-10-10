[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

# React Redux Skeletor (React Redux Boilerplate)
A **`react-redux skeletor`** is a starter kit (i.e. skeleton hence the name skeletor) to get you started started on creating 
react-redux applications without having to think about the basic structure of your app or the basic packages you require. 

This skeleton already comes pre-configured with some commonly used tools and packages such as react, redux, redux-thunk,webpack, webpack-dev-server, babel, eslint etc pre-configured. 
This skeleton favours a directory structure where components are grouped by features

# Usage
   1.  Install [Node.js](https://nodejs.org/en/download/) if you dont already have [Node.js](https://nodejs.org/en/download/) installed
   
   2.  Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) if you dont already have [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed and issue then issue the command
   
     **`$ git clone https://github.com/quophyie/react-redux-skeletor.git .`**
   
   3. Navigate to **`/src/app/app/modules`** and create a [Redux React component](http://redux.js.org/docs/basics/UsageWithReact.html)
   
   4. Run the dev server
   
     **`$ npm run dev`**
     
   5. From your browser, navigate to **`http://localhost:3000/webpack-dev-server/index.html`**
     
     Thats it!!


# File Structure

```javascript
    |_ .eslintrc
    |_ package.json
    |_ README.md
    |_ server.js
    |_ /config
    |_ _ _ _ .babelrc
    |_ _ _ _ webpack.config.js
    |_src/
    |_ _ _ _ /images
    |_ _ _ _ /styles
    |_ _ _ _ /dist
    |_ _ _ _ /app
    |_ _ _ _ _ _ _ _ app.js
    |_ _ _ _ _ _ _ _ index.html
    |_ _ _ _ _ _ _ _ /modules
    |_ _ _ _ _ _ _ _ _ _ /Dashboard
    |_ _ _ _ _ _ _ _ _ _ _ _ _ index.js
    |_ _ _ _ _ _ _ _ _ _ _ _ _ ducks.js
    |_ _ _ _ _  _ _ _ _ _ _ _ _ _ _ _ /MySuperCoolButtonComponent
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ index.js
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ducks.js
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /MySuperSliderComponent
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ index.js
    |_ _ _ _ _ _ _ _ _  _ _ _ __ _ _ _ _ _ _ ducks.js
    |_ _ _ _ _ _ _ _ _ _ /ProfilePage
    |_ _ _ _ _ _ _ _ _ _ _  _ _ index.js
    |_ _ _ _ _ _ _ _ _ _ _ _ _ ducks.js
    |_ _ _ _ _ _ _ _ _ _ _ _ /components
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /MySuperCoolProfileImageComponent
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ index.js
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ducks.js
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /MySuperCoolDateComponent
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _  _ _ _ index.js
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ducks.js
    |_ _ _ _ _ _ _ _ /shared
    |_ _ _ _ _ _ _ _ _ _ _ _ /modules
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /components
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ __/MySharedButtonComponent
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _index.js
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ducks.js
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _  _ _/MyShardedSliderComponent
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _index.js
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ducks.js
    |_ _ _ _ _ _ _ _ _ _ _ _/models
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _/UserModel
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _index.js
    |_ _ _ _ _ _ _ _ _ _ _ _/services
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _/UserService
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _index.js
    |_ _ _ _ _ _ _ _ _ _ _ _ /utils
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /SomeReallyCoolUtil
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ index.js
    |_ _ _ _/test
    |_ _ _ _ _ _ _ _ /modules
    |_ _ _ _ _ _ _ _ _ _ /DashboardTests
    |_ _ _ _ _ _ _ _ _ _ _ _ _ index.js
    |_ _ _ _ _ _ _ _ _ _ _ _ _ ducks.js
    |_ _ _ _ _  _ _ _ _ _ _ _ _ _ _ _ /MySuperCoolButtonComponentTests
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ index.js
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ducks.js
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /MySuperSliderComponentTests
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ index.js
    |_ _ _ _ _ _ _ _ _  _ _ _ __ _ _ _ _ _ _ ducks.js
    |_ _ _ _ _ _ _ _ _ _ /ProfilePageTests
    |_ _ _ _ _ _ _ _ _ _ _  _ _ index.js
    |_ _ _ _ _ _ _ _ _ _ _ _ _  ducks.js
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /MySuperCoolProfileImageComponentTests
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ index.js
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ducks.js
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /MySuperCoolDateComponentTests
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _  _ _ _ index.js
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ducks.js
    |_ _ _ _ _ _ _ _ /shared
    |_ _ _ _ _ _ _ _ _ _ _ _ /modules
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /components
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ __/MySharedButtonComponentTests
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _index.js
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ducks.js
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _  _ _/MyShardedSliderComponentTests
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _index.js
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ducks.js
    |_ _ _ _ _ _ _ _ _ _ _ _/models
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _/UserModelTests
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _index.js
    |_ _ _ _ _ _ _ _ _ _ _ _/services
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _/UserServiceTests
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _index.js
    |_ _ _ _ _ _ _ _ _ _ _ _ /utils
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /SomeReallyCoolUtilTests
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ index.js
``` 
    
 The  **`React Redux Skeletor`**  file structure is very simple to follow. The general idea is that we group  **`React Redux`**  components
 by  modules/features. Each module / feature contains one or more **`React Redux`**  component which may also contain further child
 **`React Redux`**  components and so on and so forth. 
 
 Generally speaking, the **`/src`** is the root of your application. The **`/src/app`** contains two main directories i.e. **`modules`** and **`shared`**. 
 The **`modules`** contains a **`components`**  that cannot be shared outside of their parent / containing component. In our example, 
 **`MySuperCoolButtonComponent`** can only be shared with its sibling components (i.e. **`MySuperSliderComponent`** can use an instance of **`MySuperCoolButtonComponent`**) 
 but cannot be cannot be shared outside its parent component (i.e.  **`MySuperCoolButtonComponent`** cannot be shared outside
  **`Dashboard`** component). 

 Each **`React Redux`**  component should be a self-contained. For this reason,  we recommend that the components that you 
 place in ithe  **`/src/app/modules`**  directory follows the **`Ducks`** file structure as we believe that the **`Ducks`** file
 structure lends itself very well to self-contained  **`React Redux`**  components. The **`Ducks`** file structure prescribes a
 structure to create isolated modules that are self contained, and can even be packaged easily into a library
 See [Ducks: Redux Reducer Bundles](https://github.com/erikras/ducks-modular-redux "Ducks: Redux Reducer Bundles") and [The Ducks File Structure for Redux](https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c#.q8o58pev7 "The Ducks File Structure for Redux") for more info on  **`Ducks`**  file structure.
 
  **`Ducks`** modules have four rules 
 
 A module...
 
   1. MUST export default a function called **`reducer()`**
   2. MUST export its action creators as functions
   3. MUST have action types in the form npm-module-or-app/reducer/ACTION_TYPE
   4. MAY export its action types as UPPER_SNAKE_CASE, if an external reducer needs to listen for them, or if it is a published reusable library

 These same guidelines are recommended for **`{actionType, action, reducer}`** bundles that are shared as reusable Redux libraries.
 
 An example of **`Ducks`** module
  
```javascript
  'use strict'
  // Actions
  const LOAD = 'my-react-redux-app/widgets/LOAD'
  const CREATE = 'my-react-redux-app/widgets/CREATE'
  const UPDATE = 'my-react-redux-app/widgets/UPDATE'
  const REMOVE = 'my-react-redux-app/widgets/REMOVE'
  
  // Reducer
  export default function reducer (state = {}, action = {}) {
    switch (action.type) {
      // do reducer stuff
      default:
        return state
    }
  }
  
  // Action Creators
  export function loadWidgets () {
    return { type: LOAD }
  }
  
  export function createWidget (widget) {
    return { type: CREATE, widget }
  }
  
  export function updateWidget (widget) {
    return { type: UPDATE, widget }
  }
  
  export function removeWidget (widget) {
    return { type: REMOVE, widget }
  }
 ```
  
 
The **`/src/app/shared`** directory contains resources and multi-purpose components and modules that can and should be shared by other components (irrespective or parents and siblings) 
and resources

The **`/src/app/app.js`** is the application entry point

The **`/src/app/index.html`** (optional). If you prefer to use html page as the application entry point, then this is your entry point

The **`/src/app/dist`** directory contains the built resources. In our example the **`bundle.js`** produced by **`webpack`** will be stored here 

The **`/src/app/test`** directory contains the tests. The folder structure should follow that found in **`/src/app/modules`** and **`/src/app/shared`** directories. 
However, test directories should end  with the suffix **`Tests`** e.g. **`MySuperCoolProfileImageComponentTests`**

The **`/config`** directory configurations and other other artifacts to aid in development and building the app. 
The items in the **`/config`**  folder are not to be included in the final build of the app. 
In **`React Redux Skeletor`** we store our **`webpack.config.js`** and **`.babelrc`** files in the **`/config`** directory   

# Pre-Configured Dev Tools

## Webpack and Webpack-dev-server

### Dev Environment

 **`React Redux Skeletor`** comes preconfigured with  **`webpack`** and **`webpack-dev-server`**  with Hot Module Reload in 
 a developemnt environment. To run the the dev sev  
 
 
#### Start Dev Server With Hot Module Relaod of JavaScript Modules only

When the command below is issued, **only Javascript** sources will be hot reloaded

  **`$ npm run dev`**
  
#### Start Dev Server With Hot Module Relaod of Both HTML and  JavaScript Modules

When the command below is issued, **HTML and  Javascript** sources will be hot reloaded (In this case the browser will refresh automatically)
   
   **`$ npm run dev_with_html_reload`**
   
#### Dev Server Environment Variables

The dev server can be passed environment variables that controls how the dev server is started / initiated

The following are supported


  **`HOST`** - The server host (default **`localhost`**) e.g. **`mydomain.com` or `127.0.0.1`**
  
  **`PORT`** - The server port (default **`3000`**) e.g. **`8080`**
  
  **`WEBPACK_HTML_HOT_RELOAD`** - If **`true`** then **`HTML Hot Reloading`** will be enbaled e.g. **`3000`**
  
  **`NODE_ENV`** - The environment to target. If **`production`** then **`web.config.production.js`** will be loaded e.g. **`3000`**
      
   `$ HOST=mydomain.com PORT=8080 npm run dev`
   
 If **`PORT`** and **`HOST`** are not provided then the defaults of **`3000`** and `localhost` are used as defaults for **`port`** and **`host`** respectively

   
### Building Production Artifact

  By default, you have two choices to build your production artifact (ie. the production build). You can build the
  artifact with linting enabled (i.e. using [Eslint](https://www.npmjs.com/package/eslint) with [eslint react standard rules](https://github.com/feross/eslint-config-standard-react))

#### Build with linting (Default)

  To build a a production artifact with linting enabled, use the following command 
  
  **`$ npm run build`**
  
#### Build without linting 
  
  To build a a production artifact without linting, use the following command 
    
  **`$ npm run build_nolinting`**
  
  In all cases, the built artifacts will be stored at  **`/src/app/dist`** 