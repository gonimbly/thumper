#!/bin/bash
 
set -o errexit # Exit on error

export NODE_ENV=production
printf "\n~~Thumper says: Building app (this may take a few seconds) \n"
webpack --config webpackConfig.app.js
webpack --config webpackConfig.thumper.js
rm -rf deploy/
mkdir deploy
rsync -av --progress . deploy --exclude node_modules --exclude .git --exclude deploy --exclude .gitignore
cd deploy

printf "\n~~Thumper says: Deploying app\n"
git init
git add -A
git commit -m 'deploy'
git remote add staging https://git.heroku.com/nimbly-thumper.git
git push staging master -f
printf "\n~~Thumper says: Deployment complete, launching app\n"
open https://nimbly-thumper.herokuapp.com