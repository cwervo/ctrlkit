🧠 ctrlkit ✨
---

# ⚠️ THIS PROJECT IS PRE-ALPHA, EVERYTHING WILL BREAK BECAUSE I'M STILL FIGURING OUT THE API SURFACE ⚠️

Exposes a few things useful for interacting with CTRL-Labs' CTRLKit.

- A `customEvents` object — currently only contains the `fingerTapped` event (listened for as `fingertapped`)
- A `Socket` class that starts up a WebSocket. You can customize how a `CTRL.Socket` responds to data & errors using the following methods:
    - setOnOpen(onOpenFunction)
    - setOnError(onErrorFunction)
    - setOnMessage(onMessageFunction)
- Finally, a rudimentary `parseTapData` function that parses tap data for you. Eventually this should be a function support all the gestures that CTRL supports, but I'm starting small.

To install all the dependencies run:

```
npm install
```

To update the examples:

```
npm run update-docs
```
