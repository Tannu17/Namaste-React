## Q-1 What is emmet?
Emmet is a plugin for text editors like VS Code that allows users to code faster.

For example in a HTML file:

`html:5`  gives :
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>

`div>div>p` gives :
<div>
    <div>
        <p></p>
    </div>
</div>

## Q-2 Difference between a Library and Framework?
**Library:**
 - A library is like a toolbox where we can pick and choose specific tools (functions) to use in our project.
 - We decide when and how to use each tool, and we remain in control of our project's structure.
**Framework:**
 - A framework is like a blueprint for building a house. It gives us a structure and guidelines.
 - We follow the blueprint, and the framework decides when to call our code. We work within the framework's structure.

In short, a `library` gives us tools to use as we see fit, while a `framework` gives us a structure to follow and works more like a guide for building our project.

## Q-3 What is CDN? Why do we use it?
CDN is known as Content delivery network that provides us different type of assets / features / libraries created by others over the internet. Using a CDN reduces our effort to implement a functionality that is already existing somewhere else that we can simply use via CDN.

## Q-4 Why react is called React?
React is called "React" because it reacts to changes in data. Instead of manually updating the web page when things change, React does it automatically. The name reflects its main job: reacting to updates and making sure the user interface stays in sync with the data in a smooth and efficient way.

## Q-5 What is crossorigin in React?
Cross-origin resource sharing (CORS) is an HTTP based mechanism that allows a server to indicate any origin other than its own from which the browser should permit loading the resources.

## Q-6 Difference between React and React DOM
- **React:**
 - Core library for building components and managing state.
 - Works for various platforms, not just the web.
- **ReactDOM:**
 - Specific to web development.
 - Helps React interact with and show components on a web page.

In short, `React` is the main tool for building things, and `ReactDOM` is the tool for putting those things on a web page.

## Q-7 What is difference between `react.development.js` and `react.production.js` files via CDN?
`react.development.js` is used for development purpose and the code is not compressed while `react.production.js` is used for production purposes and the code for this library is compressed.

## Q-8  What is the difference between async and defer ?
- **Async (`async`):**
  - Loads the script while not pausing the HTML parsing.
  - Executes as soon as it's downloaded, even if HTML parsing is still happening.
  - Useful for independent scripts that don't rely on the order of execution.
  <script async src="example.js"></script>
- **Defer (`defer`):**
  - Loads the script without pausing HTML parsing.
  - Waits to execute until HTML parsing is complete.
  - Multiple deferred scripts execute in the order they appear in the HTML.
  <script defer src="example.js"></script>

In short, `async` doesn't wait, while `defer` waits for HTML parsing to finish before running the script.






