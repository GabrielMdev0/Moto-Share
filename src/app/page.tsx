import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bike, DollarSign, Shield, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="py-6 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">MotoShare</h1>
          <p className="mt-2">Alugue motos de particulares ou disponibilize a sua para aluguel</p>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Bike className="w-10 h-10 mb-2 text-primary" />
              <CardTitle>Variedade de Motos</CardTitle>
              <CardDescription>Escolha entre diversos modelos de motos disponíveis para aluguel.</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <DollarSign className="w-10 h-10 mb-2 text-primary" />
              <CardTitle>Renda Extra</CardTitle>
              <CardDescription>Ganhe dinheiro alugando sua moto nos momentos em que não estiver usando.</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Shield className="w-10 h-10 mb-2 text-primary" />
              <CardTitle>Segurança</CardTitle>
              <CardDescription>Transações seguras e verificação de usuários para sua tranquilidade.</CardDescription>
            </CardHeader>
          </Card>
        </section>

        <section className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Cadastre-se</CardTitle>
              <CardDescription>Comece a alugar ou disponibilizar sua moto hoje mesmo!</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input placeholder="Nome completo" />
                <Input type="email" placeholder="E-mail" />
                <Input type="tel" placeholder="Telefone" />
                <Button className="w-full">Criar conta</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="py-6 px-4 bg-secondary text-secondary-foreground">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 MotoShare. Todos os direitos reservados.</p>
          <nav className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Sobre nós</a>
            <a href="#" className="hover:underline">Termos de uso</a>
            <a href="#" className="hover:underline">Privacidade</a>
            <a href="#" className="hover:underline">Contato</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}