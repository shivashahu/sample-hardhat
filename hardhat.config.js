require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-truffle5');
require('@nomiclabs/hardhat-ethers');
require('hardhat-gas-reporter');
require('solidity-coverage');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
	const accounts = await hre.ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	solidity: '0.8.4',
	hardhat: {
		blockGasLimit: 12e6,
		allowUnlimitedContractSize: true,
		initialDate: new Date().toISOString(),
		initialBaseFeePerGas: (1e9).toString(), // 1 GWEI
		// Note: forking settings are injected at runtime by hardhat/tasks/task-node.js
	},
	localhost: {
		gas: 12e6,
		blockGasLimit: 12e6,
		url: 'http://localhost:8545',
	},
	gasReporter: {
		enabled: false,
		showTimeSpent: true,
		gasPrice: 20,
		currency: 'USD',
		maxMethodDiff: 25, // CI will fail if gas usage is > than this %
		outputFile: 'test-gas-used.log',
	},
};
