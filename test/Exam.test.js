const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //W-> Constructor
const web = new Web3(ganache.provider());
const {interface, bytecode }=require('../compile');
let accounts;
let exam;
beforeEach(async ()=>{
	 // Grtting a list of account 
	accounts= await web.eth.getAccounts();//if using await then function should be async
	exam= await new web.eth.Contract(JSON.parse(interface))
	.deploy({data:bytecode, arguments:[accounts[0]]})
	.send({from:accounts[0], gas:'1000000'});

}); 
describe('Exam',()=>{
	it('deploys a contract',()=>{
		//console.log(exam);
		//assert.ok(exam.options.address);

	});
	it('Permission given by',async() =>{
			
			await exam.methods.givePermission(accounts[1]).send({from:accounts[0]});
			await exam.methods.submitAns('123456',1,1).send({from:account[1]});
			await exam.methods.submitAns('123456',2,2).send({from:account[1]});
			await exam.methods.submitAns('123456',3,3).send({from:account[1]});
			await exam.methods.submitAns('123456',4,4).send({from:account[1]});
			await exam.methods.submitAns('123456',5,1).send({from:account[1]});
			const count= await exam.methods.students(accounts[1]).call();
			console.log(count.hasRight);
		});
});