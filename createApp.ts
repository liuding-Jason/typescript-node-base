/*
	intro : create app file
	Author : chenchao
	Date : 2020-03-18
*/
const commander = require("commander") ;
const ora = require("ora") ;
const path = require("path") ;
const rootPath = process.cwd() ;
const Log = require(path.join(rootPath , "/lib/log")) ;

// Welcome
Log.slog("🚀 Welcome to use create-com-npm cli !\n") ;

const spinner = ora({
	text : "project download start...\n" ,
});
//开始
spinner.start();
setTimeout(() => {
  spinner.color = 'yellow';
  spinner.text = 'Loading rainbows';
}, 1000);

setTimeout(() => {
	//结束
	spinner.succeed("download succeed！\n") ;
	spinner.fail("download failed! \n") ;
} , 3000);
