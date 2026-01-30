import { IconBank } from "../Icons"

const formater = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
})

export const MyAccountsItem = ({ account }) => {
  return (
    <div className="flex justify-between items-start p-4 text-neutral-text" >
      <div className="flex items-center gap-2">
      <IconBank/> {account.bank}
      </div>
      <div className="flex flex-col items-start">
        <p className="font-bold">Saldo</p>
        <p>{formater.format(account.balance)}</p>
      </div>
    </div>
  )
}