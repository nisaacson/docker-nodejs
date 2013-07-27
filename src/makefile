MOCHA=node_modules/.bin/mocha
REPORTER?=spec
FLAGS=--reporter $(REPORTER)

test:
	$(MOCHA) $(shell find test/* -name "*-test.js") $(FLAGS)

.PHONY: test
