# CS - Ticket System

This is a React-based Customer Support Zone application.

## What is JSX, and why is it used?
JSX is a syntax extension for JavaScript that allows writing HTML-like code within JavaScript. It is used in React to describe UI components in a more readable and expressive way, making it easier to visualize the structure.

## What is the difference between State and Props?
State is internal, mutable data managed within a component (using useState). Props are external, immutable data passed from parent to child components.

## What is the useState hook, and how does it work?
useState is a React hook that adds state to functional components. It returns an array with the current state value and a setter function. Calling the setter updates the state and re-renders the component.

## How can you share state between components in React?
Lift state up to a common parent component and pass it down via props. For complex apps, use Context API or state management libraries like Redux.

## How is event handling done in React?
Events are handled using camelCase attributes (e.g., onClick) that reference functions. React wraps native events in SyntheticEvents for consistency.
