import { AnchorEarn, CHAINS, DENOMS, NETWORKS } from '@anchor-protocol/anchor-earn';
import { balanceToCsv } from './balanceToCsv.js';
import 'dotenv/config';

const config = {
  chain: CHAINS.TERRA,
  address: process.env.ADDRESS
};

if (process.env.NODE_ENV === 'production') {
  config.network = NETWORKS.COLUMBUS_5; // Mainnet
} else {
  config.network = NETWORKS.BOMBAY_12; // Testnet
}

const anchorEarn = new AnchorEarn(config);

console.log("Requesting balance...");
const balanceOutput = await anchorEarn.balance({
  currencies: [DENOMS.UST]
});

console.log(balanceOutput);
balanceToCsv(balanceOutput);
