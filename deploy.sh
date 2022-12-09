#/bin/sh

cp ./404.html ./dist/spa/404.html
cp ./CNAME ./dist/spa/CNAME

push-dir --dir=dist/spa --branch=gh-pages
