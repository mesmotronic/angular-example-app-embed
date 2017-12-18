# App embedding example for Angular

This project demonstrates the simplest possible method of embedding one of Mesmotronic's HTML5 web applications into a web page using an Angular 2+ component.

In this example, we embed an application called `HelloApp` from the `mesmotronic` namespace into a styled element.

For the purpose of this example, `HelloApp` is defined inside a `<script>` tag in `index.html`, but applications would normally be loaded via the `src` attribute, for example:

```HTML
<script "path/to/mesmotronic/app.js"></script>
```

## Significant files

- `index.html` where the application is loaded
- `app.component.js` where the application is embedded

## See it in action

To view this example in your browser:

1. Install Angular CLI globally, if you have not done so already: `npm i angular-cli -g`
1. In the project folder, run `npm i` to install project dependencies
1. Run `ng serve --open` to compile the project and open http://localhost:4200 in your browser
