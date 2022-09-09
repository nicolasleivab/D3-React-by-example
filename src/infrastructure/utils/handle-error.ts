import type { TErrorWithMessage } from '../types';

function isErrorWithMessage(error: unknown): error is TErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}

function toErrorWithMessage(maybeError: unknown): TErrorWithMessage {
  if (isErrorWithMessage(maybeError)) {
    return maybeError;
  }

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    // fallback in case there's an error stringifying the maybeError
    // like with circular references for example.
    return new Error(String(maybeError));
  }
}

/** Returns the message of a given error. */
export function getErrorMessage(error: unknown) {
  return toErrorWithMessage(error).message;
}