# Redux DevTools

## Important Components
- State Monitor
- Action List
- Dispatch & Action Replay
- Time Travel Debugging
- Custom Action Loggers
- State Diffing (Redux State Diffing)

### What is Redux DevTools ?
    * Redux DevTools is a powerful toolset that allows developers to inspect, track, and debug the state of a Redux application in real-time.
    * Why we use it - 
        Helps in inspecting and debugging the state changes in the Redux store.
        Provides powerful features like time travel debugging, state persistence, and action replay.
        Gives a graphical interface to monitor state changes, dispatched actions, and the flow of data through reducers.
    * How we use it -
        Redux DevTools is typically used in a browser environment (via the Redux DevTools browser extension or embedded in your app).

### 1. State Monitor
    * What it is - Displays the entire state of the Redux store.
	* Why we use it -
	    To observe how the state of the application evolves after each action.
	* How we use it -
	    Every time an action is dispatched, the state changes and is reflected in the state monitor.
	* Example -
	    When you dispatch an action like ADD_TODO, the state monitor will show the updated state with the new todo item.

### 2. Action List
    * What it is - Shows all the actions dispatched in the application.
	* Why we use it -
	    To track which actions are being fired and analyze the payload or data they carry.
	* How we use it -
	    You can click on an action to see its details, including the type of action and the data passed to it.
	* Example -
	    After dispatching an action like ADD_TODO, the action list will show the ADD_TODO action along with its payload.

### 3. Dispatch & Action Replay
	* What it is -
	    Dispatch allows you to send actions manually to Redux from the DevTools.
	    Action replay lets you replay a sequence of actions that have been dispatched previously.
	* Why we use it -
	    Dispatching actions helps in testing specific behavior without interacting with the UI.
	    Action replay is useful for debugging or reproducing bugs.
	* How we use it -
	    You can use the Dispatch tab to send new actions (with or without payload).
	    The Action Replay tab allows you to go through previously dispatched actions, as if you’re “rewinding” or “fast-forwarding” the app.
	* Example -
	    If you made a mistake in a feature, you can replay the previous actions step-by-step to debug and identify where things went wrong.

### 4. Time Travel Debugging
	* What it is -
	    A feature that allows you to move through previous states and see the application as it was at any point in time.
	* Why we use it -
	    To inspect the app’s behavior at different points in time, which is especially useful in debugging issues.
	* How we use it -
	    Using the time travel buttons (back, forward), you can go through different states that were captured by Redux.
    * Example -
	    If you’re testing a feature where you change the app state over several actions, you can travel backward to see the previous state and how it evolved.

### 5. Custom Action Loggers
	* What it is -
	    Custom logs can be added to track specific actions or states.
	* Why we use it -
	    To monitor specific parts of the state or actions without cluttering the general log.
	* How we use it -
	    You can modify your app to include custom loggers or middleware to log specific actions for debugging.
	* Example -
	    You might create a custom logger that only tracks ERROR actions for debugging a specific feature.

### 6. State Diffing (Redux State Diffing)
	* What it is -
	    Displays the difference between the previous and current states.
	* Why we use it -
	    Helps in understanding how the state has changed due to a specific action.
	* How we use it -
	    After dispatching an action, DevTools shows the state before and after the action in a diff format.
	* Example -
	    For an action like ADD_TODO, the state diff will show how the todos array has changed with the new todo item.