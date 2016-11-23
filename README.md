# Gmail Simple

## Building

To get started you'll need [`nvm`](https://github.com/creationix/nvm)
installed, then simply run `make setup` to install dependencies. Once complete
you can run `make all` to build the source and bundle it into a userscript in
the `dist/` directory. The `Makefile` also provides convenient targets for
linting and generating ctags for editors.

## Usage

To use simply load `dist/gmail-simple.user.js` (Created during the build
process) into Tampermonkey and navigate to the
[basic HTML version of gmail](https://mail.google.com/mail/h/u/0).

On mac you may wish to use a snippet like the following to quickly rebuild
changes and copy the updated userscript to the clipboard for pasting into
Tampermonkey:
```console
make all && pbcopy < dist/gmail-simple.user.js
```
