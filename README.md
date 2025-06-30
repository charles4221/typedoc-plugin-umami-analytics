# typedoc-plugin-umami-analytics

A [TypeDoc](https://typedoc.org/) plugin for integrating [Umami Analytics](https://umami.is/docs) into your documentation.

This plugin automatically inserts the Umami Analytics tracking script into the generated TypeDoc HTML pages, allowing you to track page views and events on your documentation website.

## Why?

TypeDoc is a powerful tool for generating documentation from TypeScript code, but it does not include built-in analytics capabilities. If you want to track how users interact with your documentation, you typically need to integrate a third-party analytics solution.

Umami Analytics is a simple, open-source web analytics solution that provides insights into your website's traffic without compromising user privacy. It is 100% free when self-hosted and does not use cookies, making it a great choice for developers who want to track their documentation usage without the overhead of traditional analytics solutions.

Since I use both of these tools in my projects, I decided to create this plugin to make it easier for myself (and you!) to integrate Umami Analytics into TypeDoc-generated documentation.

## Installation

```
npm install --save-dev typedoc-plugin-umami-analytics
```

## Usage

This plugin can be used with TypeDoc either via command line argument, or programmatically via a TypeDoc config file.

### Command Line

```
typedoc --plugin typedoc-plugin-umami-analytics
```

### TypeDoc Config File

```jsonc
// typedoc.json
{
  "plugin": ["typedoc-plugin-umami-analytics"],
}
```

## Configuration Options

You can configure the plugin by passing options in your TypeDoc config file or via command line arguments.

### Required Options

In order to use this plugin, you must provide the following options:

```jsonc
{
  "plugin": ["typedoc-plugin-umami-analytics"],
  // Required: The URL of your Umami Analytics tracking script, e.g. "https://example.com/script.js"
  "umamiScriptURL": "https://example.com/script.js",
  // Required: The website ID for your Umami Analytics instance. You can find this in your Umami dashboard.
  "umamiWebsiteID": "your-website-id",
}
```

This input will result in the following HTML being added before the closing `</body>` tag of each generated HTML page:

```html
<script
  defer
  src="https://example.com/script.js"
  data-website-id="your-website-id"></script>
```

### Additional Options

You can also provide the following optional configuration options (in line with the [Umami Tracker Configuration options](https://umami.is/docs/tracker-configuration)):

```jsonc
{
  /**
   * The URL of the Umami Analytics host, e.g. "https://example-other.com"
   *
   * Only use this if your Umami instance is hosted on a different domain than the script URL.
   * If not specified, the script URL's domain will be used.
   */
  "umamiHostURL": "https://example-other.com",
  /**
   * Whether to automatically track page views and events.
   * Defaults to true.
   */
  "umamiAutoTrack": false,
  /**
   * A list of domains to track.
   * If specified, only these domains will be tracked.
   * If not specified, all domains where the script is loaded will be tracked.
   */
  "umamiDomains": ["example.com", "example.org"],
  /**
   * A tag to associate with the analytics data.
   * This can be used to filter or categorize the data in your Umami Analytics dashboard.
   */
  "umamiTag": "documentation",
  /**
   * Whether to exclude search parameters from the URL when tracking page views.
   * Defaults to false.
   */
  "umamiExcludeSearch": true,
  /**
   * Whether to exclude hash fragments from the URL when tracking page views.
   * Defaults to false.
   */
  "umamiExcludeHash": true,
  /**
   * Whether to respect the Do Not Track setting in the user's browser.
   * If true, no analytics data will be sent if the user has enabled Do Not Track.
   * Defaults to false.
   */
  "umamiDoNotTrack": true,
}
```

### Type-Checking Configuration

This plugin also exposes TypeScript types for the configuration options, so you can use them in your TypeDoc config file to enable type-checking and IDE intellisense. Simply switch from a `typedoc.json` file to a `typedoc.config.mjs` file and import the types like so:

```javascript
/** @type {Partial<import('typedoc').TypeDocOptions> & Partial<import('typedoc-plugin-umami-analytics').Config>} */
const config = {
  // ...other TypeDoc options
  plugin: [
    // ...other plugins,
    'typedoc-plugin-umami-analytics',
  ],
  umamiScriptURL: 'https://example.com/script.js',
  umamiWebsiteID: 'your-website-id',
};

export default config;
```

## Contributing

If you find a bug or have a feature request, please open an issue in [GitHub Issues](https://github.com/charles4221/typedoc-plugin-umami-analytics/issues).

If you want to contribute code, feel free to submit a pull request!

## License

This plugin is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0). See the [LICENSE](LICENSE) file for more details.
