console.info('%c ctrlkit - v 0.0.1', 'font-family: monospace; color: pink; background-color: black; font-size: 1.5em;')
let start_stream_request_poses = {
    "api_version": "0.12",
    "api_request": {
        "request_id": 13,
        "start_stream_request": {
            "stream_id": "test_stream_id",
            "app_id": "my-application",
            "poses": {}
        }
    }
}
let start_stream_request = {
    "api_version": "0.12",
    "api_request": {
        "request_id": 13,
        "start_stream_request": {
            "stream_id": "test_stream_id",
            "app_id": "my-application",
            "surface_tap": {}
        }
    }
}

let end_stream_msg = {
    "api_version": "0.12",
    "api_request": {
        "request_id": 13,
        "end_stream_request": {
            "stream_id": "test_stream_id",
        }
    }
}

function poseDataObjectToArray(poseDataObject) {
    let newArray = [
        poseDataObject.fist,
        poseDataObject.index_pinch,
        poseDataObject.middle_pinch,
        poseDataObject.open_hand,
        poseDataObject.pinky_pinch,
        poseDataObject.rest,
        poseDataObject.ring_pinch,
    ]
    return newArray
}

export var customEvents = {
    fingerTapped: new Event('fingertapped')
}

// Need to configure a way to have the constructor switch on input to open up either taps, poses, or really any of the 6 possible streams: https://developer.ctrl-labs.com/docs/api/resources/stream-batch/stream-batch/
export class Socket {
    constructor(HOST = 'localhost', PORT = '9999') {
        this.socket = new WebSocket(`ws://${HOST}:${PORT}`);
        console.log(`connecting to ${HOST}:${PORT}`)

        this.socket.onerror = event => {
            console.error(`Whoops! Is %cctrlservice%c running? Got an error connecting to ws://${HOST}:${PORT}`, "font-family: monospace; background-color: red; color: white; border-radius: 3px; padding: 0 2px;", event)
        }

        this.socket.onopen = function(event) {
            console.log("CTRL websocket open!")
            event.target.send(JSON.stringify(start_stream_request))
        };

        this.socket.onmessage = function(event) {
            console.log(event)
        };
    }

    setOnOpen(onOpenFunction) {
        this.socket.onopen = onOpenFunction
    }
    setOnError(onErrorFunction) {
        this.socket.onerror = onErrorFunction
    }
    setOnMessage(onMessageFunction) {
        this.socket.onmessage = onMessageFunction
    }
}

export function parseTapData(event) {
    if (JSON.parse(event.data).stream_batch != undefined) {
        return JSON.parse(event.data).stream_batch.surface_tap.samples[0].data
    } else {
        return {}
    }
}
