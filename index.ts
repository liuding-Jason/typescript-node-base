#!/usr/bin/env node
const chalk = require('chalk');//颜色插件

const currentNodeVersion = process.versions.node ; // 返回Node版本信息，如果有多个版本返回多个版本
const semver = currentNodeVersion.split('.') ; // 所有Node版本的集合
const major : string = semver[0] ; // 取出第一个Node版本信息

// 如果当前版本小于4就打印以下信息并终止进程
if (Number(major) < 4) {
  console.error(
    chalk.red(
      'You are running Node ' +
        currentNodeVersion +
        '.\n' +
        'Create Self App requires Node 4 or higher. \n' +
        'Please update your version of Node.'
    )
  );
  process.exit(1); // 终止进程
}

// polyfill ES6 grammer
require("babel-register")({
  'presets': ["es2015", 'stage-3'] ,
}) ;
require('babel-polyfill') ;

// 没有小于4就引入以下文件继续执行
require('./createApp.ts') ;