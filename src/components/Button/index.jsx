export const Button = ({children}) => {
  return (
    <button className="flex justify-end items-center self-center w-fit gap-2 py-[10.5px] px-12 text-neutral-text border-color-neutral-text rounded-3xl border mt-6">
      {children}
    </button>
  )
}