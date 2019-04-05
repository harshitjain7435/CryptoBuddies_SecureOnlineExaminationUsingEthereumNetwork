const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3'); //W-> Constructor
const {interface, bytecode }=require('./compile');

const provider=new HDWalletProvider(
'deal mind bus bamboo planet say tool kid hollow primary invite oyster',
'rinkeby.infura.io/v3/fa4219d0d70045d089589760b343503d'
	);
const web = new Web3(provider);

const deploy =async()=> {
	const accounts = await web.eth.getAccounts();
	console.log('deploy from account', accounts[0]);


	const exam= await new web.eth.Contract(JSON.parse(interface))
	.deploy({data:bytecode, arguments:[accounts[0]]})
	.send({ gas:'1000000', from:accounts[0]});

	console(exam.options.address);
};
deploy();