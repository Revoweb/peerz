'use strict';

import {DataConnection} from '../src/dataconnection';

describe('DataConnection', function() {
	var dataConnection;

	beforeEach(function() {
		dataConnection = new DataConnection();
	});

	it('should import DataConnection', function() {
		expect(DataConnection).not.toBe(null);
	});

	it('should instantiate a DataConnection', function() {
		expect(dataConnection).not.toBe(null);
		expect(dataConnection._connection).not.toBe(null);
		expect(dataConnection._connection.localDescription.sdp).toEqual('');
		expect(dataConnection._dataChannel).not.toBe(null);
	});

	describe('Offer creation', function() {
		beforeEach(function(done) {
			dataConnection.createOffer(function() {
				done();
			});
		});
		it('should create an offer', function(done) {
			expect(dataConnection._connection.localDescription.sdp).not.toEqual('');
			done();
		});
	});
});