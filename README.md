# Custom Instant Results Template

This repository represents a barebones starting point for a plugin that filters the template used for results in ElasticPress's Instant Results feature.

The Instant Results feature of ElasticPress is based on [React](https://reactjs.org/), and each search result is rendered using a React component. This component can be replaced from a theme or plugin using the [`ep.InstantResults.Result`](https://10up.github.io/ElasticPress/tutorial-theme-integration.html) JavaScript hook to return a new component. This plugin includes a script file that uses this hook to provide its own component for rendering results.

As is standard for React components, the component is written using [JSX](https://reactjs.org/docs/introducing-jsx.html) for readability. JSX is not understood by browsers so a build step is required to convert it to regular JavaScript. This plugin uses [`@wordpress/scripts`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) for that purpose. The template can be built by running these commands:

```console
$ npm install
$ npm run build
```

After running these commands a new script will be created in a `/build` directory. The plugin uses `wp_enqueue_script()` to enqueue this file. Any time a change is made the template will need to be built by running `npm run build` again.
