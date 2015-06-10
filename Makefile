include config/env.source

npm:
	npm install

setup:npm
	cp env.source.sample env.source

dev:
	DEBUG=wce:* nodemon --harmony index.js

start:
	DEBUG=wce:index node --harmony index.js