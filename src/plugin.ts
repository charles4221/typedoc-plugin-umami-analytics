import { Application, JSX, ParameterType } from 'typedoc';

import { Config } from './config';
import { validateOptionTypes } from './validate-option-types';

const optionUmamiScriptURL = 'umamiScriptURL' as const;
const optionUmamiHostURL = 'umamiHostURL' as const;
const optionUmamiWebsiteID = 'umamiWebsiteID' as const;
const optionUmamiAutoTrack = 'umamiAutoTrack' as const;
const optionUmamiDomains = 'umamiDomains' as const;
const optionUmamiTag = 'umamiTag' as const;
const optionUmamiExcludeSearch = 'umamiExcludeSearch' as const;
const optionUmamiExcludeHash = 'umamiExcludeHash' as const;
const optionUmamiDoNotTrack = 'umamiDoNotTrack' as const;

/**
 * A TypeDoc plugin that injects the Umami Analytics tracking script into the generated documentation.
 *
 * @param app The Typedoc application instance.
 * @returns A JSX element that injects the Umami Analytics script into the document body.
 * @throws {TypeError} If the configuration options are not of the expected type.
 */
export function load(app: Application) {
  app.options.addDeclaration({
    name: optionUmamiScriptURL,
    type: ParameterType.String,
    help: 'The script URL for the Umami Analytics service.',
  });

  app.options.addDeclaration({
    name: optionUmamiWebsiteID,
    type: ParameterType.String,
    help: 'The website ID for the Umami Analytics service.',
  });

  app.options.addDeclaration({
    name: optionUmamiHostURL,
    type: ParameterType.String,
    help: 'The host URL for the Umami Analytics service, if different from the script URL.',
  });

  app.options.addDeclaration({
    name: optionUmamiAutoTrack,
    type: ParameterType.Boolean,
    defaultValue: true,
    help: 'Whether to automatically track page views and events.',
  });

  app.options.addDeclaration({
    name: optionUmamiDomains,
    type: ParameterType.Array,
    defaultValue: [],
    help: 'A list of domains to track. If specified, only these domains will be tracked.',
  });

  app.options.addDeclaration({
    name: optionUmamiTag,
    type: ParameterType.String,
    help: 'A tag to associate with the analytics data.',
  });

  app.options.addDeclaration({
    name: optionUmamiExcludeSearch,
    type: ParameterType.Boolean,
    defaultValue: false,
    help: 'Whether to exclude search parameters from the URL when tracking page views.',
  });

  app.options.addDeclaration({
    name: optionUmamiExcludeHash,
    type: ParameterType.Boolean,
    defaultValue: false,
    help: 'Whether to exclude hash fragments from the URL when tracking page views.',
  });

  app.options.addDeclaration({
    name: optionUmamiDoNotTrack,
    type: ParameterType.Boolean,
    defaultValue: true,
    help: "Whether to respect the Do Not Track setting in the user's browser.",
  });

  app.renderer.hooks.on('body.end', (context) => {
    const umamiScriptURL = context.options.getValue(
      optionUmamiScriptURL,
    ) as Config[typeof optionUmamiScriptURL];
    const umamiWebsiteID = context.options.getValue(
      optionUmamiWebsiteID,
    ) as Config[typeof optionUmamiWebsiteID];
    const umamiHostURL = context.options.getValue(
      optionUmamiHostURL,
    ) as Config[typeof optionUmamiHostURL];
    const umamiAutoTrack = context.options.getValue(
      optionUmamiAutoTrack,
    ) as Config[typeof optionUmamiAutoTrack];
    const umamiDomains = context.options.getValue(
      optionUmamiDomains,
    ) as Config[typeof optionUmamiDomains];
    const umamiTag = context.options.getValue(
      optionUmamiTag,
    ) as Config[typeof optionUmamiTag];
    const umamiExcludeSearch = context.options.getValue(
      optionUmamiExcludeSearch,
    ) as Config[typeof optionUmamiExcludeSearch];
    const umamiExcludeHash = context.options.getValue(
      optionUmamiExcludeHash,
    ) as Config[typeof optionUmamiExcludeHash];
    const umamiDoNotTrack = context.options.getValue(
      optionUmamiDoNotTrack,
    ) as Config[typeof optionUmamiDoNotTrack];

    validateOptionTypes({
      umamiScriptURL,
      umamiWebsiteID,
      umamiHostURL,
      umamiAutoTrack,
      umamiDomains,
      umamiTag,
      umamiExcludeSearch,
      umamiExcludeHash,
      umamiDoNotTrack,
    });

    if (!umamiScriptURL || !umamiWebsiteID) {
      return JSX.createElement(JSX.Fragment, {});
    }

    return JSX.createElement('script', {
      defer: true,
      src: umamiScriptURL,
      'data-website-id': umamiWebsiteID,
      ...(umamiHostURL ? { 'data-host': umamiHostURL } : {}),
      ...(umamiAutoTrack === false ? { 'data-auto-track': 'false' } : {}),
      ...(umamiDomains && umamiDomains.length > 0
        ? { 'data-domains': umamiDomains.join(',') }
        : {}),
      ...(umamiTag ? { 'data-tag': umamiTag } : {}),
      ...(umamiExcludeSearch ? { 'data-exclude-search': 'true' } : {}),
      ...(umamiExcludeHash ? { 'data-exclude-hash': 'true' } : {}),
      ...(umamiDoNotTrack ? { 'data-do-not-track': 'true' } : {}),
    });
  });
}
