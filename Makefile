BROWSERIFY=node_modules/.bin/browserify
ESLINT=node_modules/.bin/eslint
NODE-SASS=node_modules/.bin/node-sass
JSCTAGS=node_modules/.bin/jsctags

SRC_JS=$(shell find ./src -type f -name '*.js')
SRC_SCSS=$(shell find ./style -type f -name '*.scss' )

all: tags dist/gmail-simple.user.js

.PHONY: clean
clean:
	@rm -rf dist tags

.PHONY: lint
lint: $(SRC_JS)
	@$(ESLINT) $^

.PHONY: setup
setup:
	@. $(NVM_DIR)/nvm.sh && nvm use
	@npm install

tags: $(SRC_JS)
	@$(JSCTAGS) $(SRC_JS) -f | sed '/^$$/d' | sort > $@

dist/styles.css: style/index.scss $(SRC_SCSS)
	@mkdir -p $(@D)
	@$(NODE-SASS) -q $< $@

dist/bundle.js: src/index.js $(SRC_JS)
	@mkdir -p $(@D)
	@$(BROWSERIFY) $< -o $@ -t [ babelify --presets [ es2015 ] ]

dist/gmail-simple.user.js: dist/bundle.js dist/styles.css
	@mkdir -p $(@D)
	@scripts/render-userscript dist/styles.css dist/bundle.js > $@
