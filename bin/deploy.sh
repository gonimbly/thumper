#!/bin/bash

set -o errexit # Exit on error

printf "\n~~Thumper says: Deploying app\n"
git remote add heroku https://git.heroku.com/nimbly-thumper.git &> /dev/null
git push heroku master -f
printf "\n~~Thumper says: Deployment complete, launching app\n"
open https://nimbly-thumper.herokuapp.com
