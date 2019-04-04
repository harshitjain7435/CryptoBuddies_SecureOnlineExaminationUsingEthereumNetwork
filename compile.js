const path=require('path');//helps to generate current dir path
const fs=require('fs');//file system module to read  file containt
const solc=require('solc');
const examPath=path.resolve(__dirname,'Contracts','Exam.sol');
const sourc=fs.readFileSync(examPath, 'utf8');
console.log(solc.compile(sourc,1));