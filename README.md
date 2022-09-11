# svelte-lightweight-router
A lightweight client-side router with guards for the Svelte framework.

## Setup

To setup the lightweight router, you first need to define a array of *routes*, containing all pages of your application:

```javascript
const routes = [
  {path: "", component: HomePageComponent},
  {path: "login", component: LoginPageComponent},
  {path: "user", component: UserPageComponent}
];
```

Each *route* consists of:
- `path` - URL path to the page (e.g. "home", "/user/details", etc.)
- `component` - reference to the Svelte component that gets displayed
- `guards` - array of function references to guard the access to a route _(optional)_

Then you need to provide the routes to the lightweight router:

```javascript
import * as Lightweightrouter from "svelte-lightweight-router";

...

Lightweightrouter.defineRoutes(routes);
```

## Navigating between pages

To navigate beetween pages with the lightweight router, either call the `navigate` function from script:

```javascript
import { navigate } from "svelte-lightweight-router";

navigate("home");
```

Or use the `href` attribute on a anchor element:

```html
<a href="#home">Home</a>
```

## Guarding routes

To guard a route and restrict access to a page (e.g. Login, Authentication etc.), provide a array of `guards` to your routes:

```javascript
routes = [
  {path: "user", component: UserPageComponent, guards:[authenticate]},
  {path: "admin", component: AdminPageComponent, guards: [authenticate, authorize]}
]
```

The route accepts a array of function references for guarding the route. Each function must return `true` if the route can be accessed, or a path as a string to reroute the user to a different page, if the guard has denied access to the route:

```javascript
function authenticate(path) {
  return isLoggedIn ? true : "login";
}
```

## Code Examples

For more code examples and demonstration of the lightweight router, see and try out the [sample projects](https://github.com/escheiermann/svelte-lightweight-router/tree/main/samples).

## Licence
The lightweight router is licensed under the MIT license. For more information see the [project license](https://github.com/escheiermann/svelte-lightweight-router/blob/main/LICENSE).

Copyright (c) 2022 Edgar Scheiermann
