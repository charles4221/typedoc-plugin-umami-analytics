/**
 * Configuration options for the Umami Analytics plugin.
 *
 * @see https://umami.is/docs/tracker-configuration
 */
export type Config = {
  /**
   * The URL of the Umami Analytics tracking script, e.g. "https://example.com/script.js"
   */
  umamiScriptURL: string;
  /**
   * The website ID for your Umami Analytics instance.
   * This is required to track analytics data.
   */
  umamiWebsiteID: string;
  /**
   * The URL of the Umami Analytics host, e.g. "https://example-other.com"
   *
   * Only use this if your Umami instance is hosted on a different domain than the script URL.
   * If not specified, the script URL's domain will be used.
   */
  umamiHostURL?: string;
  /**
   * Whether to automatically track page views and events.
   * Defaults to true.
   */
  umamiAutoTrack?: boolean;
  /**
   * A list of domains to track.
   * If specified, only these domains will be tracked.
   * If not specified, all domains where the script is loaded will be tracked.
   */
  umamiDomains?: string[];
  /**
   * A tag to associate with the analytics data.
   * This can be used to filter or categorize the data in your Umami Analytics dashboard.
   */
  umamiTag?: string;
  /**
   * Whether to exclude search parameters from the URL when tracking page views.
   */
  umamiExcludeSearch?: boolean;
  /**
   * Whether to exclude hash fragments from the URL when tracking page views.
   */
  umamiExcludeHash?: boolean;
  /**
   * Whether to respect the Do Not Track setting in the user's browser.
   * If true, no analytics data will be sent if the user has enabled Do Not Track.
   */
  umamiDoNotTrack?: boolean;
};
