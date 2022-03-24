import * as fs from 'fs';

let outputFilename;
if (process.env.NODE_ENV === 'production') {
  outputFilename = 'production-data.csv';
} else {
  outputFilename = 'development-data.csv';
}

const initFile = () => {
  if (fs.existsSync(outputFilename)) {
    console.log('File already exists, appending');
    return false;
  } else {
    const headers = [
      'Timestamp',
      'Currency',
      'Account Balance',
      'Deposit Balance',
      'Total Account Balance in UST',
      'Total Deposit Balance in UST',
      'Chain',
      'Network',
      'Height',
      'Address',
    ];

    try {
      fs.writeFileSync(outputFilename, headers.join(',') + '\n');
      console.log('File created');
      return true;
    } catch (err) {
      console.error(err)
      return false;
    }
  }
}

// @param {BalanceOutput}
export const balanceToCsv = (balanceOutput) => {
  initFile();
  const csv = [];

  balanceOutput.balances.forEach((balance) => {
    const row = [
      balanceOutput.timestamp,
      balance.currency,
      balance.account_balance,
      balance.deposit_balance,
      balanceOutput.total_account_balance_in_ust,
      balanceOutput.total_deposit_balance_in_ust,
      balanceOutput.chain,
      balanceOutput.network,
      balanceOutput.height,
      balanceOutput.address,
    ];

    csv.push(row);
  });

  const content = csv.map((row) => row.join(',')).join('\n') + '\n';
  console.log(content);

  try {
    fs.appendFileSync(outputFilename, content)
  } catch (err) {
    console.error(err)
  }
}
