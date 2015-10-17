module.exports = function(config) {
	config.set({
		frameworks: [
			'browserify',
			'jasmine'
		],
		plugins : [
			'karma-jasmine',
			'karma-chrome-launcher',
			'karma-browserify'
		],
		browsers : [
			'ChromeCanary'
		],
		files: [
			'src/**/*.js',
			'test/**/*.js'
		],
		preprocessors: {
			'src/**/*.js': ['browserify'],
			'test/**/*.js': ['browserify']
		},
		browserify: {
			debug: true,
			transform: ['babelify']			
		}
	});
};