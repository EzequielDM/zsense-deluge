#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({});

const getLatestRelease = async () => {
  try {
    const latest = await octokit.repos.getLatestRelease({
      owner: "EzequielDM",
      repo: "zsense-deluge",
    });

    if (!latest) throw "Failed to fetch";

    return latest.data.name;
  } catch (e) {
    return "Failed to fetch GitHub data";
  }
};

const welcome = {
  title: chalk.greenBright("ZSense for DelugeRPG"),
  subtitle: `${chalk.green(`Version: ${process.version} | Latest: ${getLatestRelease()}`)}`,
};

console.log(boxen(`${welcome.title}\n${welcome.subtitle}`));
