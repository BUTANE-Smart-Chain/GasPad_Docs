# Create a BuyBack Baby Token

Create a Buyback Baby Token
Check out the steps below on how to create a buyback baby token with PinkSale using MetaMask.
1. From the homepage: , click on “Create” – “Token”
2. You will be redirected to this link: ​
3. To create a standard type token, in the [Token Type] section, choose “Buyback Baby Token”
4. Input all necessary information. Before doing so, let's go over all the important fields that need to be filled:
Router: Select Flamez for the Butane Smart Chain; select UniSwap, SushiSwap or ShibaSwap for the Etherum Network; select QuickSwap for the Matic Chain; select KuSwap for the Kucoin Chain; select TradeJoe or Pangolin for AVAX.
Reward token: The contract address of the token that you want to use to reward your users. For example, you are creating a BuybackBabyDogeXXX token on the Butane Smart Chain and you want to reward your users with DOGE, enter DOGE token address in this field (Butane-Peg Dogecoin contract address).
Liquidity Fee(%): The % amount of tokens from every transaction that is automatically sent to the liquidity pool.
Buyback Fee (%): The % amount of BBC from every transaction that is used to buy back tokens. It will generate a contract address to store BBC. You need to call buy back function to start buying back tokens. 
Reflection Fee (%): The % amount of tokens from every transaction that is distributed to all token holders. If you choose DOGE as a reward token, your users will be rewarded in DOGE instead of the base token.
Marketing Fee (%): The % amount of BBC from every transaction that is sent to the owner wallet.
How to Call Buy Back Manually?
triggerZeusBuyback(uint256 amount, bool triggerBuybackMultiplier) 
This function is used to buy back manually with the BBC that has accumulated in the buyback wallet.
triggerBuybackMultiplier if “= true”, that means that after the buyback has taken place, and for a certain amount of time from that moment (default 30 minutes), when traders sell their tokens they will be charged double the normal tax rate. The tax rate for selling will go back to normal after 30 minutes.