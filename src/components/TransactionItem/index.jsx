const formater = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
})

export const TransactionItem = ({ item }) => {

  const detailsAddicionalClassName = item.value > 0 ? "text-secondary-income" : "text-secondary-expense"


  return (
    <div className="flex justify-between p-4">
      <div className={detailsAddicionalClassName}>
        <p className="font-bold">{item.description}</p>
        <p>{formater.format(item.value)}</p>
      </div>
      <div className="text-neutral-text leading-[125%] text-base">
        {new Date(item.date).toLocaleDateString("pt-BR")}
      </div>
    </div>
  )
}