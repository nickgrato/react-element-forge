# React Element Forge

React Component Library



## Installation

**npm:**

```sh
npm i react-element-forge
```

**yarn:**

```sh
yarn add react-element-forge
```

## Getting started 

Here is an example of a basic app using Element Forge's `Button` component:

```jsx
import * as React from 'react';
import { Button } from 'react-element-forge';

function App() {
  return (
    <Button category="primary_solid" icon="alert-circle" text="click me!!" />
  );
}
```

## Adding Styles

If you using NextJs it's better to import styles into a javascript file in the root of the project. However if you need to import the CSS
into a style sheet that will work as well.

```js
import 'react-element-forge/dist/style.css'
```

```jsx
  // Set to Light Theme,
  // Note: if a "data-theme" is not set on <main> it will default the "light" theme
 <main data-theme="light"></main>

 // Set to Dark Theme
 <main data-theme="dark"></main>

 // Get theme from users settings "dark" or "light"
 <main data-theme={themeFromUserSettings}></main>
```

 
 