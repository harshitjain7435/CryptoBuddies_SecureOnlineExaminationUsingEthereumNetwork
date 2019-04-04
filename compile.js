const path=require('path');//helps to generate current dir path
const fs=require('fs');//file system module to read  file containt
const solc=require('solc');
const examPath=path.resolve(__dirname,'Contracts','Exam.sol');
const source=fs.readFileSync(examPath, 'utf8');
module.exports=solc.compile(source,1).contracts[':Exam'];