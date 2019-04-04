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
		console.log(exam);
	});
});