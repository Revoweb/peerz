'use strict';

import {DataConnection} from './dataconnection';

class Peer {
  constructor() {
    this._dataConnection = new DataConnection();
  }

}

export {Peer};
