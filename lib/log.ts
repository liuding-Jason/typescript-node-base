/*
	intro : chalk log defination
	Author : chenchao
	Date : 2020-03-20
*/
import chalk from "chalk" ;

// log utils interface define
interface LogFunction {
  (message : string): void ;
}
interface LogUtils {
	log : LogFunction ,
	slog : LogFunction ,
	elog : LogFunction ,
	wlog : LogFunction
}

// log
const log = (message : string) => {
	console.log(
		message
	) ;
}
// success log
const slog = (message : string) => {
	console.log(
		chalk.green(message) 
	);
}
// error log
const elog = (message : string) => {
	console.log(
		chalk.red(message) 
	) ;
}
// warn log
const wlog = (message : string) => {
	console.log(
		chalk.yellow(message) 
	) ;
}

// single object save memory
const Log : LogUtils = {
	log ,
	slog ,
	elog ,
	wlog
} ;

module.exports = Log ;