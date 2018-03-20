# Website for Machine Learning Camp Jeju<a id="website-for-machine-learning-camp-jeju"></a>

- [Website for Machine Learning Camp Jeju](#website-for-machine-learning-camp-jeju)
  - [Requirements](#requirements)
  - [Development](#development)
  - [Deployment](#deployment)
  - [Project Structures](#project-structures)

## Requirements<a id="requirements"></a>

1.  Install [bundler](http://bundler.io/)
2.  Run `bundle install`

## Development<a id="development"></a>

```bash
# Run local server
$ make serve
```

## Deployment<a id="deployment"></a>

-   Install ghp-import (`pip install ghp-import`)

```bash
# it will push everything inside of _site to origin/master_
make github
```

## Project Structures<a id="project-structures"></a>

-   `_includes` contains components
-   `_layouts` contains page template
-   `_sass` contains sass
-   `2018` contains actual contents

```bash
tree -L 1 -I '*.org' .
```

    .
    ├── 2017
    ├── 2018
    ├── assets
    ├── _config_dev.yml
    ├── _config.yml
    ├── favicon.ico
    ├── Gemfile
    ├── Gemfile.lock
    ├── _includes
    ├── index.md
    ├── _layouts
    ├── Makefile
    ├── README.md
    ├── _sass
    └── _site

    7 directories, 8 files
