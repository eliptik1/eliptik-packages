# Eliptik Packages

Eliptik Packages is a collection of reusable components in web applications.

## Installation

You can install the package using npm:

```sh
npm install eliptik-packages
```

Import the functions and style.css from the package
```js
import 'eliptik-packages/style.css'

import { createMenu, addMenuItem, createHamburger } from 'eliptik-packages';
```

For creating a dropdown menu button, 
Call the function as `createMenu(buttonContainer, menuText)`
```js 
const navbar = document.querySelector('nav')
createMenu(navbar, 'My Menu'); 
```

For adding a dropdown menu link,
Call the function as `addMenuItem(menuText, itemText, itemLink)`
```js 
addMenuItem('My Menu', 'Link-1', '#');
addMenuItem('My Menu', 'Link-2', '#');
```

For creating a hamburger menu button, 
Call the function as `createHamburger(buttonContainer, sidebarContainer, sidebarOptional)`
```js 
const navbar = document.querySelector('nav')
const main = document.querySelector('main')

createHamburger(navbar, main)
```
If you want to disable the sidebar, add ```false``` to the function,
```js 
createHamburger(navbar, main, false)
```

For creating a carousel, 
Call the function as `createCarousel(carouselContainer, imageLinks)`
```js 
const main = document.querySelector('main')

createCarousel(main, 
    "https://picsum.photos/id/58/450/300",
    "https://picsum.photos/id/208/450/300",
    "https://picsum.photos/id/239/450/300")
```
You can also add images using relative paths,
```js 
createCarousel(main, 
    src="./images/example-image.png",
    src="./images/another-image-2.png",
    )
```
## Contribute

[You can contribute here](https://github.com/eliptik1/eliptik-packages)