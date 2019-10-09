🧠 ctrlkit ✨
---

# ⚠️ THIS PROJECT IS PRE-ALPHA, EVERYTHING WILL BREAK BECAUSE I'M STILL FIGURING OUT THE API SURFACE ⚠️


## Usage

For now this is just a static ES6 module so you can us it like this:

```html
<script type="module">
        import * as CTRL from 'https://unpkg.com/ctrlkit@0.0.2/index.js';
        let ctrlSocket = new CTRL.Socket();
        ctrlSocket.setOnMessage(event =>
            // parse the event response from CTRLKit
        )
</script>
```

Exposes a few things useful for interacting with CTRL-Labs' CTRLKit.

- A `customEvents` object — currently only contains the `fingerTapped` event (listened for as `fingertapped`)
- A `Socket` class that starts up a WebSocket. You can customize how a `CTRL.Socket` responds to data & errors using the following methods:
    - setOnOpen(onOpenFunction)
    - setOnError(onErrorFunction)
    - setOnMessage(onMessageFunction)
- Finally, a rudimentary `parseTapData` function that parses tap data for you. Eventually this should be a function support all the gestures that CTRL supports, but I'm starting small.

## Development

To install all the dependencies run:

```
npm install
```

To update the examples:

```
npm run update-docs
```
