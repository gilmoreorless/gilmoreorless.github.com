# Welcome to my place

This is the source code for [gilmoreorless.github.io][home] — a showcase of my open source projects on GitHub (well, the ones worth sharing, at least).

This repository also contains common styles and scripts required for the documentation of other repositories. This means I can have individual documentation specific to each project (e.g. [jQuery nearest][jquery-nearest]), but only need to update one file here to change the styling across all of them.

## Structure

There are two main sections in the file structure. I am not expecting anyone else to care about this. What I _am_ doing is documenting this for myself, so that I don’t come back to this in 6 months and wonder what goes where.

### `shared/`

This is where shared documentation themes live. Only remove a theme if you’re absolutely, positively certain that nothing is using it.

* `theme-v1/` — white background, black/green terminal-style code snippets.
* `theme-v2/` — teal background, Raleway font, properly-aligned typography.


### `gilhub/`

This contains all the files needed for the home page at [gilmoreorless.github.io][home].

* `img/` — project thumbnails.
* `lib/` — auto-generated files, do not edit these manually.
* `src/` — main source files, these are the ones to edit.

#### Build process

[Gulp](http://gulpjs.com/) is required for building the site files. The following tasks are available:

##### `gulp html` — generate the index page

Takes the project definitions from `gilhub/src/projects.json`, feeds them into `gilhub/src/index.html` using [Moustache](https://github.com/janl/mustache.js/), and generates the root `index.html`.

##### `gulp prefix` — add vendor prefixes to CSS

Runs `gilhub/src/home.css` through [Autoprefixer](https://github.com/postcss/autoprefixer) and saves it as `gilhub/lib/home.css`.

##### `gulp scripts` — generate single JS bundle

Takes any required dependencies (at the moment, that’s just [fontfaceobserver](https://github.com/bramstein/fontfaceobserver)), adds JS files from `gilhub/src/`, and concatenatess them together as `gilhub/lib/home.js`.

##### `gulp` — everything together

Runs the `html`, `prefix` and `scripts` tasks. This should always be run just before committing and pushing live.



[home]: https://gilmoreorless.github.io/
[jquery-nearest]: https://gilmoreorless.github.io/jquery-nearest/
