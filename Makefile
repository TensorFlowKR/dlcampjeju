serve: clean
	bundle exec jekyll serve --config _config.yml,_config_dev.yml

build: clean
	bundle exec jekyll build --config _config.yml --incremental

github: build
	ghp-import -n -p -r origin -b gh-pages _site

clean:
	bundle exec jekyll clean
