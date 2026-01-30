import { Button } from "../Button"
import { IconWallet } from "../Icons"
import { MyAccountsItem } from "../MyAccountsItem"

export const MyAccounts = () => {

  const accounts = [ 
    { "bank": "Anybank", "balance": 1200 }, 
    { "bank": "Bytebank", "balance": 800 }, 
    { "bank": "Switch Bank", "balance": 1800 } 
  ]
  
  return (
    <>
      <ul className="divide-y divide-solid divide-neutral-header grow ">
        {accounts.map((myAccountsItem, index) => {
          return (
            <li key={index}>
              <MyAccountsItem account={myAccountsItem} />
            </li>
          )
        })}
      </ul>

      <Button>
        <IconWallet/> Adicionar conta
      </Button>
    </>
  )
}