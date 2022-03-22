# Anclado

## What is?
Reads the Anchor Earn data from your account and writes to a CSV.

## How to?
Copy `.env.sample` and configure your address there.

Then run `NODE_ENV=production node src/index.js`. If `NODE_ENV` is not specified, it will use the testnet instead of the mainnet.

## Next steps
Configure a cron job to run the script daily.
Configure a datastudio report to better showcase the data.
