'use strict';

import {Peer} from '../src/peer';

describe('Peer', function() {
	var peer;

	beforeEach(function() {
		peer = new Peer();
	});

	it('should import Peer', function() {
		expect(Peer).not.toBe(null);
	});

	it('should instantiate a Peer', function() {
		expect(peer).not.toBe(null);
		expect(peer._dataConnection).not.toBe(null);
	});
});