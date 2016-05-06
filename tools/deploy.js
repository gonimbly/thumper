/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import GitRepo from 'git-repository';
import task from './lib/task';

// TODO: Update deployment URL
const remote = {
  name: 'github',
  url: 'git@bitbucket.org:nimbly/thumper.git',
  branch: 'master',
};

/**
 * Deploy the contents of the `/build` folder to GitHub Pages.
 */
export default task(async function deploy() {
  // Initialize a new Git repository inside the `/build` folder
  // if it doesn't exist yet
  const repo = await GitRepo.open('./', { init: false });
  await repo.setRemote(remote.name, remote.url);

  // Build the project in RELEASE mode which
  // generates optimized and minimized bundles
  process.argv.push('release');
  await require('./build')();

  // Push the contents of the folder to the remote server via Git
  await repo.add('--all .');
  await repo.commit('Update ' + new Date().toISOString());
  await repo.push(remote.name, 'master:' + remote.branch);
});
