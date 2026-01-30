import logo from './assets/logo.svg'
import { Aside } from './components/Aside'
import Card from './components/Card'

import { Container } from './components/Container'
import { Main } from './components/Main'
import { SearchInput } from './components/SearchInput'
import { Typography } from './components/Typography'
import { DailyBudget } from './components/DailyBudget'
import { SavingsStatus } from './components/SavingsStatus'
import { Transactions } from './components/Transactions'
import { MyAccounts } from './components/MyAccounts'


function App() {
  return (
    <div className="bg-neutral-background min-h-screen">
      <Container>
      <Aside/>
      <Main>
        <SearchInput name="q"/>
        <div>
          <Typography variant="h1">Olá, Patrick</Typography>
          <Typography>Veja como estão suas finanças hoje</Typography>
        </div>
        <section className="grid grid-cols-2 items-stretch gap-6">
          <Card>
            <Card.Header>
            Orçamento diário disponível:
            </Card.Header>
            <Card.Body>
              <DailyBudget value={42}></DailyBudget>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
            Progresso da meta financeira
            </Card.Header>
            <Card.Body>
              <SavingsStatus/>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
            Movimentação financeira
            </Card.Header>
            <Card.Body>
              <Transactions/>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
            Minhas contas
            </Card.Header>
            <Card.Body>
              <MyAccounts/>
            </Card.Body>
          </Card>
        </section>
      </Main>
      </Container>
    </div>
  )
}
export default App