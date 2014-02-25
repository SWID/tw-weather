TESTS = $(shell find test -type f -name "*.js")
REPORTER = spec

install:
	@npm install

test: install
	@NODE_ENV=test ./node_modules/mocha/bin/mocha \
		--reporter $(REPORTER) \
		 $(TESTS)

lib-cov:
	@rm -rf ./$@
	@jscoverage lib $@

test-cov: lib-cov
	@JSCOV=1 $(MAKE) test REPORTER=html-cov > coverage.html && open coverage.html
