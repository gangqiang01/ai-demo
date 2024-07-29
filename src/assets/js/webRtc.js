function Utf8ArrayToStr(array) {
  var out, i, len, c;
  var char2, char3;
  out = "";
  len = array.length;
  i = 0;
  while (i < len) {
    c = array[i++];
    switch (c >> 4) {
      case 7:
        out += String.fromCharCode(c);
        break;
      case 13:
        char2 = array[i++];
        out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
        break;
      case 14:
        char2 = array[i++];
        char3 = array[i++];
        out += String.fromCharCode(((c & 0x0F) << 12) |
          ((char2 & 0x3F) << 6) |
          ((char3 & 0x3F) << 0));
        break;
    }
  }
  return out;
}

export default class WebSocketClient {
  constructor(path, elemment, ms) {
    let host = "";
    if (location.protocol.indexOf('s') >= 0) {
        host = 'wss://'+window.location.host
    }else{
        host = 'ws://'+window.location.host
    }
    this.url = host+path
    this.ws = null
    this.connected = false
    this.messages = []
    this.error = null
    this.queue = []
    this.ms = ms;
    this.sourceBuffer = null;
    this.streamingStarted = false;
    this.hidden = "hidden";
    this.livestream = elemment;
    if (typeof document.hidden !== "undefined") {
      this.hidden = "hidden";
    } else if (typeof document.msHidden !== "undefined") {
      this.hidden = "msHidden";
    } else if (typeof document.webkitHidden !== "undefined") {
      this.hidden = "webkitHidden";
    }
    this.ms.addEventListener('sourceopen', this.connect.bind(this), false);
    this.livestream.src = window.URL.createObjectURL(this.ms);
  }
 
  connect() {
    let self = this
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      return
    }
    this.ws = new WebSocket(this.url)
    this.ws.binaryType = "arraybuffer";
    this.ws.addEventListener('open', () => {
      console.log('WebSocket connected')
      self.connected = true
      // 连接成功后发送 API 请求
      // this.sendApiRequest()
    })
    this.ws.addEventListener('message', (event) => {
      console.log(this)
      var data = new Uint8Array(event.data);
      if (data[0] == 9) {
        let decoded_arr = data.slice(1);
        let mimeCodec = null
        if (window.TextDecoder) {
          mimeCodec = new TextDecoder("utf-8").decode(decoded_arr);
        } else {
          mimeCodec = Utf8ArrayToStr(decoded_arr);
        }
        console.log('first packet with codec data: ' + mimeCodec);
        
        this.sourceBuffer = this.ms.addSourceBuffer('video/mp4; codecs="' + mimeCodec + '"');
        this.sourceBuffer.mode = "segments"
        this.sourceBuffer.addEventListener("updateend", this.loadPacket.bind(this));
      } else {
        this.pushPacket(event.data);
      }
      if (document[this.hidden] && this.livestream.buffered.length) {//fix pause on hidden tabs
        this.livestream.currentTime = this.livestream.buffered.end((this.livestream.buffered.length - 1)) - 1;
      }

      // const message = JSON.parse(event.data)
      // this.messages.push(message)
    })
    this.ws.addEventListener('error', (event) => {
      console.error('WebSocket error:', event)
    })
    this.ws.addEventListener('close', () => {
      console.log('WebSocket closed')
      this.connected = false
    })
  }
  disconnect() {
    if (this.ws) {
      this.ws.close()
    }
  }
 
  sendMessage(message) {
    if (this.ws.readyState !== WebSocket.OPEN) {
      return
    }
    this.ws.send(JSON.stringify(message))
  }

  pushPacket(arr) {
    var view = new Uint8Array(arr);
    console.log("got", arr.byteLength, "bytes.  Values=", view[0], view[1], view[2], view[3], view[4]);
    
    let data = arr;
    if (!this.streamingStarted) {
      this.sourceBuffer.appendBuffer(data);
      this.streamingStarted = true;
      return;
    }
  
    this.queue.push(data);
    console.log("queue push:", this.queue.length);
    
    if (!this.sourceBuffer.updating) {
      this.loadPacket(this.queue);
    }
  }

  loadPacket() {
    if (!this.sourceBuffer.updating) {
      if (this.queue.length > 0) {
        let inp = this.queue.shift();
        console.log("queue PULL:", this.queue.length);
        
        var view = new Uint8Array(inp);
        console.log("writing buffer with", view[0], view[1], view[2], view[3], view[4]);
        
        this.sourceBuffer.appendBuffer(inp);
      } else {
        this.streamingStarted = false;
      }
    }
  }
}
