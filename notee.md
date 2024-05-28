```
<sub> => subscript


<sup> => superscript


```

### How to set rem size in css?

_This is the best way_

```
html {
    font-size: 62.5%;
}

body {
    font-size: 2.1rem; /* 21px */

}
```

- font-size: rem
- width: % in combination with a max-width, ch
- height: question urself "do i rly need to set height" if yes -> use a min-height
- padding/margin: rem or em, kevin often uses em for padding of buttons
- media queries: em

- px only for little things like shadows, borders etc.

### use :root for best practice

```
:root {
--system-ui: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

.element {
font-family: var(--system-ui);
}
```

### Why we use many font-families?

To ensure a consistent appearance across different systems by using the first available font.

```
body {
  font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
```

### Child and sibling combinators

">" - the child combinator

"+" - the adjacent sibling combinator

"~" - the general sibling combinator

```
<div class="group1"></div> <!-- This is the first div with class "group1" -->
<div class="child group2"></div> <!-- This is the first div following ".group1" -->
<div class="child group3"></div> <!-- This is the second div following ".group1" -->

<style>
.group1 + div {
  background-color: lightblue; /* Applies style to the div immediately following ".group1" */
}

.group1 + div + div {
  background-color: lightgreen; /* Applies style to the second div following ".group1" */
}

.group1 ~ div {
  border: 1px solid black; /* Applies style to all siblings of ".group1" */
}
</style>

```

### What is a pseudo-element? VS pseudo-class

#### pseudo-class: a keyword added to a selector that specifies a special state of the selected element(s)

• eg: :hover, :focus, :first-child

• pseudo-classes let you style elements based on information outside the DOM

#### pseudo-element: a keyword added to a selector that lets you style a specific part of the selected element(s)

• eg: ::before, ::after, ::first-line, ::first-letter

• pseudo-elements let you style elements that don't exist in the DOM

```
  [src] {
    /* This will target any element that has a src attribute. */
  }

  img[src] {
    /* This will only target img elements that have a src attribute. */
  }

  img[src="puppy.jpg"] {
    /* This will target img elements with a src attribute that is exactly "puppy.jpg" */
  }

```

### What is the difference between static and relative positioning?

The key difference is that with relative positioning, you can adjust an element's position relative to where it would normally be, while with static positioning, elements are positioned according to the normal flow of the document.

### What is the difference between fixed and sticky positioning?

### clamp()

```
clamp() is a great way to make elements fluid and responsive. clamp() takes 3 values:

h1 {
  font-size: clamp(320px, 80vw, 60rem);
}
the smallest value (320px)
the ideal value (80vw)
the largest value (60rem)
The clamp() CSS function uses
```

### Using custom properties

```
.error-modal {
  --color-error-text: red;
  --modal-border: 1px solid black;
  --modal-font-size: calc(2rem + 5vw);

  color: var(--color-error-text);
  border: var(--modal-border);
  font-size: var(--modal-font-size);
}

```

### fallback values

_The first value is the preferred value, and the second value is the fallback value. If the preferred value is invalid, the fallback value will be used instead._

```
.fallback {
  --color-text: white;

  background-color: var(--undeclared-property, black);
  color: var(--undeclared-again, var(--color-text, yellow));
}
```

### What are the three types of buttons in HTML?

## Generic Buttons vs Submit Buttons vs Reset Buttons

```
<button type="button">Click to Toggle</button>  - Generic button

<button type="submit">Submit</button> - Submit button

<button type="reset">Reset</button>  - Reset button
```

### Pattern validations

```
<input type="text" id="zip_code" name="zip_code" pattern="(\d{5}([\-]\d{4})?)" required>
```

### What’s the difference between a flex container and a flex item?

A flex container is any element that has display: flex on it. A flex item is any element that lives directly inside of a flex container.

```
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

-----
We can also written like that

.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

---

```
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}

.grid-container {
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

.example {
  display: grid;
  width: 1000px;
  grid-template-columns: repeat(auto-fit, 200px);
}
```

### All objects in JavaScript have a prototype

# 27/5/2024

Do you know what is different between a and Link?
Link will not refresh every time you click the link
a will refresh every time you click the link

### if we want to add DefaultProfile as a child to the /profile route.

```

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "profile",
    element: <Profile />,
    children: [
      { index: true, element: <DefaultProfile /> },
      { path: "spinach", element: <Spinach /> },
      { path: "popeye", element: <Popeye /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

### if we want to add errorPage as a child to the / route.

```
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
```

### How to refactor the routes?

## Refactoring the routes

```

import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },
];

export default routes;

---------------

in main.js

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import routes from "./routes";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


```

### How to use `useOutletContext`?

```
import React from 'react';
import { useOutletContent } from 'react-router-dom';

function Layout() {
  const outletContent = useOutletContent();

  return (
    <div>
      <h1>Shared Layout Header</h1>
      {outletContent}
      <p>Shared Layout Footer</p>
    </div>
  );
}

function ProtectedRoute() {
  // Add your authentication logic here
  // For example, you might check if a user is logged in

  // If the user is not authenticated, you might redirect them to the login page
  // You can use the useNavigate hook to redirect the user

  // If the user is authenticated, render an Outlet
  return <Outlet />;
}
```

### What is <Navigate> element?

A <Navigate> element changes the current location when it is rendered. It's a component wrapper around useNavigate, and accepts all the same arguments as props.

### SPA? - Single Page Application

### React functional component that fetches data in parallel

```
const useAllData = () => {
  const [sidebar, setSidebar] = useState();
  const [comments, setComments] = useState();
  const [issue, setIssue] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      // waiting for allthethings in parallel
      const result = (
        await Promise.all([
          fetch(sidebarUrl),
          fetch(issueUrl),
          fetch(commentsUrl),
        ])
      ).map((r) => r.json());

      // and waiting a bit more - fetch API is cumbersome
      const [sidebarResult, issueResult, commentsResult] =
        await Promise.all(result);

      // when the data is ready, save it to state
      setSidebar(sidebarResult);
      setIssue(issueResult);
      setComments(commentsResult);
    };

    dataFetch();
  }, []);

  return { sidebar, comments, issue };
};

const App = () => {
  // all the fetches were triggered in parallel
  const { sidebar, comments, issue } = useAllData();

  // show loading state while waiting for all the data
  if (!sidebar || !comments || !issue) return 'loading';

  // render the actual app here and pass data from state to children
  return (
    <>
      <Sidebar data={state.sidebar} />
      <Issue
        comments={state.comments}
        issue={state.issue}
      />
    </>
  );
};
```

### Styling React application

### What Are CSS Modules?

The CSS modules docs describe a CSS module as a CSS file whose class names are locally scoped by default. This means you can address CSS variables with the same name in different CSS files. You write CSS module classes just like normal classes. Then the compiler generates unique class names before sending the CSS to the browser.

---

### What are semantic tag?

Semantic HTML tags are tags that define the meaning of the content they contain. For example, tags like <header>, <article>, and <footer> are semantic HTML tags. They clearly indicate the role of the content they contain. On the other hand, tags like <div> and <span> are typical examples of non-semantic HTML elements.

### What are different types of list in HTML?

Unordered List.
Ordered List.
Description List.
