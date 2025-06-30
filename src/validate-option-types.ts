import { Config } from './config';

export function validateOptionTypes({
  umamiScriptURL,
  umamiWebsiteID,
  umamiHostURL,
  umamiAutoTrack,
  umamiDomains,
  umamiTag,
  umamiExcludeSearch,
  umamiExcludeHash,
  umamiDoNotTrack,
}: Config) {
  if (typeof umamiScriptURL !== 'string') {
    throw new TypeError(
      `Unexpected 'umamiScriptURL' type: ${JSON.stringify(umamiScriptURL)}`,
    );
  }

  if (typeof umamiWebsiteID !== 'string') {
    throw new TypeError(
      `Unexpected 'umamiWebsiteID' type: ${JSON.stringify(umamiWebsiteID)}`,
    );
  }

  if (umamiHostURL !== undefined && typeof umamiHostURL !== 'string') {
    throw new TypeError(
      `Unexpected 'umamiHostURL' type: ${JSON.stringify(umamiHostURL)}`,
    );
  }

  if (typeof umamiAutoTrack !== 'boolean') {
    throw new TypeError(
      `Unexpected 'umamiAutoTrack' type: ${JSON.stringify(umamiAutoTrack)}`,
    );
  }

  if (umamiDomains !== undefined && !Array.isArray(umamiDomains)) {
    throw new TypeError(
      `Unexpected 'umamiDomains' type: ${JSON.stringify(umamiDomains)}`,
    );
  }

  if (umamiTag !== undefined && typeof umamiTag !== 'string') {
    throw new TypeError(
      `Unexpected 'umamiTag' type: ${JSON.stringify(umamiTag)}`,
    );
  }

  if (typeof umamiExcludeSearch !== 'boolean') {
    throw new TypeError(
      `Unexpected 'umamiExcludeSearch' type: ${JSON.stringify(umamiExcludeSearch)}`,
    );
  }

  if (typeof umamiExcludeHash !== 'boolean') {
    throw new TypeError(
      `Unexpected 'umamiExcludeHash' type: ${JSON.stringify(umamiExcludeHash)}`,
    );
  }

  if (typeof umamiDoNotTrack !== 'boolean') {
    throw new TypeError(
      `Unexpected 'umamiDoNotTrack' type: ${JSON.stringify(umamiDoNotTrack)}`,
    );
  }
}
