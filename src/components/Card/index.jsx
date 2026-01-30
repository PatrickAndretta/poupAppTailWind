const Card = ({ children }) => {
  return (
    <div className="bg-neutral-surface rounded-3xl flex flex-col">
      {children}
    </div>
  )
}

export const CardHeader = ({ children }) => {
  return (
    <div className="bg-neutral-header rounded-t-3xl p-4 text-center text-neutral-text leading-[120%] text-xl font-bold">
      {children}
    </div>
  )
}

export const CardBody = ({ children }) => {
  return (
    <div className="px-4 py-6 flex flex-col justify-center grow">
      {children}
    </div>
  )
}

Card.Header = CardHeader
Card.Body = CardBody

export default Card