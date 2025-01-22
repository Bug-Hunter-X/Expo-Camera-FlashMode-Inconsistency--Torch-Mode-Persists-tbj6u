# Expo Camera FlashMode Inconsistency

This repository demonstrates a bug in the Expo Camera API where the flash mode, specifically when transitioning from `torch` to `off` or `auto`, doesn't always reliably update. The flash may remain active despite setting the `flashMode` prop to a different value.

## Reproducing the Bug

1. Clone this repository.
2. Run `npm install` to install the necessary packages.
3. Run `expo start` to start the Expo development server.
4. Open the app on your device or simulator.
5. Toggle the flash mode between `off`, `auto`, and `torch`. Observe that when switching from `torch` to other modes, the flash may stay on.

## Potential Causes

This inconsistent behavior may stem from:

* A race condition in the Expo Camera API's internal state management.
* Incorrect handling of the underlying camera hardware's flash control.
* Issues with asynchronous operations and their callbacks.

## Solution (Workaround)

While there's no perfect solution available, the workaround provided involves using `setTimeout` to delay the mode change. This is not ideal, but it provides a temporary fix until a more robust solution is implemented in the Expo API.

## Contributing

Feel free to contribute by providing potential solutions, alternative workarounds, or additional details to better understand the root cause of this bug.