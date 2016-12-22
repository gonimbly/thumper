#!/bin/bash
 
set -o errexit # Exit on error

printf "\n~~Thumper says: Setting env variables\n"
cat ./bin/env.sh # print out the env vars we're setting
source ./bin/env.sh # Set Env vars
printf "\n~~Thumper says: Running app"
printf "\n~~Thumper says: Building app\n"
webpack --config webpackConfig.app.js --watch & \
  webpack --config webpackConfig.thumper.js --watch & \
  nodemon server.js
