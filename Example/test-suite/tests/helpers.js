// @flow

import asyncRetry from 'async-retry';
import { isMatch } from 'lodash';
import React from 'react';
import { Alert } from 'react-native';

export const waitFor = (millis) =>
  new Promise((resolve) => setTimeout(resolve, millis));

export const alertAndWaitForResponse = async (message) => {
  return new Promise((resolve) =>
    Alert.alert(message, null, [{ text: 'OK', onPress: resolve }])
  );
};

export const retryForStatus = (object, status) =>
  asyncRetry(
    async (bail, retriesCount) => {
      const readStatus = await object.getStatusAsync();
      if (isMatch(readStatus, status)) {
        return true;
      } else {
        const stringifiedStatus = JSON.stringify(status);
        const desiredError = `The A/V instance has not entered desired state (${stringifiedStatus}) after ${retriesCount} retries.`;
        const lastKnownError = `Last known state: ${JSON.stringify(
          readStatus
        )}.`;
        throw new Error(`${desiredError} ${lastKnownError}`);
      }
    },
    { retries: 5, minTimeout: 100 }
  );

export const mount = (
  child: React.Node,
  setPortalChild: (React.Node) => void
) =>
  new Promise((resolve) => {
    const clonedChild = React.cloneElement(child);
    setPortalChild(clonedChild);
    resolve(clonedChild);
  });

export const mountAndWaitFor = (
  child: React.Node,
  propName = 'ref',
  setPortalChild: (React.Node) => void
) =>
  new Promise((resolve) => {
    // `ref` prop is set directly in the child, not in the `props` object.
    // https://github.com/facebook/react/issues/8873#issuecomment-275423780
    const previousPropFunc =
      propName === 'ref' ? child.ref : child.props[propName];
    const newPropFunc = (val) => {
      previousPropFunc && previousPropFunc(val);
      resolve(val);
    };
    const clonedChild = React.cloneElement(child, { [propName]: newPropFunc });
    setPortalChild(clonedChild);
  });

export class TimeoutError extends Error {
  constructor(...args) {
    super(...args);
    this.name = 'TimeoutError';
  }
}

export const mountAndWaitForWithTimeout = (
  child: React.Node,
  propName = 'ref',
  setPortalChild: (React.Node) => void,
  timeout
) =>
  Promise.race([
    mountAndWaitFor(child, propName, setPortalChild),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(
          new TimeoutError(
            `mountAndWaitFor did not resolve after ${timeout} ms.`
          )
        );
      }, timeout);
    }),
  ]);

export const waitForDetailed = async (
  conditionalCallback,
  errorMessage,
  timeout
) => {
  const MAX_WAIT_CYCLES = 10;
  let counter = 0;
  return new Promise((resolve, reject) => {
    const interv = setInterval(() => {
      if (conditionalCallback()) {
        resolve(true);
        clearInterval(interv);
      }
      if (++counter > MAX_WAIT_CYCLES) {
        clearInterval(interv);
        reject(new Error(errorMessage));
      }
    }, timeout / MAX_WAIT_CYCLES);
  });
};

export default {
  waitFor,
  TimeoutError,
  retryForStatus,
  mountAndWaitFor,
  mountAndWaitForWithTimeout,
};
