#!/bin/bash
 
set -o errexit # Exit on error

npm run build
rm -rf deploy/
mkdir deploy
rsync -av --progress . deploy --exclude node_modules --exclude .git --exclude deploy --exclude .gitignore
cd deploy
git init
git add -A
git commit -m 'deploy'
git remote add staging https://git.heroku.com/nimbly-thumper.git
git push staging master -f