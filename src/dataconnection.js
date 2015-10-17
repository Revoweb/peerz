'use strict';

import {RTCPeerConnection} from '../node_modules/webrtc-adapter-test/adapter';

class DataConnection {
  constructor() {
    this._connection = new RTCPeerConnection(null, null);
    this._dataChannel = this._connection.createDataChannel('dataChannel');

    this._dataChannel.onopen = this._onDataChannelStatusChange;
    this._dataChannel.onclose = this._onDataChannelStatusChange;
  }

  createOffer(callback) {
    let self = this;
    this._connection.createOffer(function(description) {
      self._connection.setLocalDescription(description);
      return callback(description);
    });
  }

  acceptOffer(description, answerCallback) {
    this._connection.setRemoteDescription(description);
    this._connection.createAnswer(function(description) {
      this._connection.setLocalDescription(description);
      answerCallback(description);
    });
  }

  sendData(data) {
    this._dataChannel.send(data);
  }

  _onIceCandidate(event) {
    if(event.candidate) {
      console.log('candidate: ' + event.candidate.candidate);
      this._connection.addIceCandidate(event.candidate);
    }
  }

  _onDataChannelReceived(event) {
    this._dataChannel = event.channel;
    this._dataChannel.onopen = this._onDataChannelStatusChange;
    this._dataChannel.onclose = this._onDataChannelStatusChange;
  }

  _onDataChannelStatusChange() {
    var readyState = this._dataChannel.readyState;
    console.log('send channel state: ' + readyState);
  }
}

export {DataConnection};