TESTS = $(shell find test -type f -name "*.js")
REPORTER = spec

install:
	@npm install

test: install
	@NODE_ENV=test ./node_modules/mocha/bin/mocha \
		--reporter $(REPORTER) \
		 $(TESTS)
