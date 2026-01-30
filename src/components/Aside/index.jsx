import logo from "../../assets/logo.svg"

export const Aside = () => {
  return (
    <aside className="bg-neutral-header max-w-[282px] min-h-[100vh] py-20 px-10 flex flex-col gap-[56px]">
      <img src={logo} alt="Logo PoupApp" />
      <p className="text-neutral-text text-[13px] leading-[120%] text-center">Devenvolvido por Patrick Andretta. Projeto fictício sem fins comerciais.</p>
    </aside> 
  )
}