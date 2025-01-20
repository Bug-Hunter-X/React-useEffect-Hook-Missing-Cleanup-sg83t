# React useEffect Hook Missing Cleanup

This repository demonstrates a common error in React applications: a missing return statement in the `useEffect` hook. This can lead to memory leaks and unexpected behavior.

## Problem

The `bug.js` file contains a `useEffect` hook that fetches data from an API. However, it is missing a return statement which should contain a cleanup function to unsubscribe from any events or cancel any asynchronous operations. Without this cleanup, the component may continue to run unnecessary processes even after unmounting, potentially causing memory leaks.

## Solution

The `bugSolution.js` file shows the corrected code.  The solution adds a return statement to the `useEffect` hook that returns a function. This function is executed before the component is unmounted, allowing for the necessary cleanup before the component is removed from the DOM.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and run the code in a React environment. The component will make the API request. Upon unmounting (via rerender) there will be no cleanup.
3. Open `bugSolution.js` and run the code. The component will perform the fetch request, but before the component is unmounted the cleanup function will run properly.