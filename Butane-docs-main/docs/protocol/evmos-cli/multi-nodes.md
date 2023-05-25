---
sidebar_position: 4
---

# Cancel a Launchpad

Here's how to cancel a Launchpad on GasPad:

## Step 1: Cancel Presale
1. Connect your wallet.
2. Visit your own presale pool on GasPad.
3. Click on the "Cancel Pool" button in the Owner Zone, then confirm the transaction on MetaMask.

## Step 2: Withdraw Tokens from Canceled Pool
If your token has fees, rewards, and max tx in the contract, you may need to exclude these functions for the presale address in order to withdraw tokens from the canceled pool.

Here's how to do it:

1. Access your contract address from a blockchain explorer like Etherscan or BscScan, or you can click on the token address on your Launchpad page.
2. Go to Contract -> Write Contract -> Connect to Web3 to connect your wallet. You need to use the owner address.
3. Using the search function (Ctrl + F), search for "exclude". Then input your presale address and click on "Write". This will exclude the fee, reward, and max tx for the presale address.
4. After clicking on the "Write" button, MetaMask will ask you to confirm the transaction. It will also show you the fee that you are required to pay for that transaction. If you agree, click on the "Confirm" button to finish the process. If you see "exclude" (bool), please input "True".
   Note: Sometimes the contract doesn’t have "exclude" but "exempt" instead, search for "exempt", then input your presale address, then click on Write, to exclude fee, reward, max tx for the presale address.
5. Finally, click on the "Withdraw canceled tokens" button.
