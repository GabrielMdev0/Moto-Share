"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bike, DollarSign, Edit, PlusCircle, Trash2 } from "lucide-react"

// Dados fictícios de motos para demonstração
const motosIniciais = [
  { id: 1, nome: "Honda CB 500", preco: 120, status: "disponível" },
  { id: 2, nome: "Yamaha MT-07", preco: 150, status: "alugada" },
  { id: 3, nome: "Kawasaki Ninja 400", preco: 130, status: "manutenção" },
]

export default function ProprietarioDashboard() {
  const [motos, setMotos] = useState(motosIniciais)
  const [novaMotoCadastro, setNovaMotoCadastro] = useState({ nome: "", preco: "" })

const adicionarMoto = () => {
  if (novaMotoCadastro.nome && novaMotoCadastro.preco) {
    setMotos([...motos, { ...novaMotoCadastro, id: Date.now(), status: "disponível", preco: Number(novaMotoCadastro.preco) }])
    setNovaMotoCadastro({ nome: "", preco: "" })
  }
}

  const removerMoto = (id: number) => {
    setMotos(motos.filter(moto => moto.id !== id))
  }

  const atualizarStatus = (id: number, novoStatus: string) => {
    setMotos(motos.map(moto => moto.id === id ? { ...moto, status: novoStatus } : moto))
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold mb-6">Painel do Proprietário</h1>

      <Tabs defaultValue="listagens">
        <TabsList className="mb-4">
          <TabsTrigger value="listagens">Minhas Listagens</TabsTrigger>
          <TabsTrigger value="adicionar">Adicionar Moto</TabsTrigger>
        </TabsList>

        <TabsContent value="listagens">
          <Card>
            <CardHeader>
              <CardTitle>Minhas Motos Listadas</CardTitle>
              <CardDescription>Gerencie suas motos disponíveis para aluguel</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Preço (R$/dia)</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {motos.map((moto) => (
                    <TableRow key={moto.id}>
                      <TableCell>{moto.nome}</TableCell>
                      <TableCell>{moto.preco}</TableCell>
                      <TableCell>
                        <Select defaultValue={moto.status} onValueChange={(value) => atualizarStatus(moto.id, value)}>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="disponível">Disponível</SelectItem>
                            <SelectItem value="alugada">Alugada</SelectItem>
                            <SelectItem value="manutenção">Em Manutenção</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="mr-2">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => removerMoto(moto.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="adicionar">
          <Card>
            <CardHeader>
              <CardTitle>Adicionar Nova Moto</CardTitle>
              <CardDescription>Cadastre uma nova moto para aluguel</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome da Moto</Label>
                  <Input
                    id="nome"
                    placeholder="Ex: Honda CB 500"
                    value={novaMotoCadastro.nome}
                    onChange={(e) => setNovaMotoCadastro({ ...novaMotoCadastro, nome: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="preco">Preço por Dia (R$)</Label>
                  <Input
                    id="preco"
                    type="number"
                    placeholder="Ex: 120"
                    value={novaMotoCadastro.preco}
                    onChange={(e) => setNovaMotoCadastro({ ...novaMotoCadastro, preco: e.target.value })}
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button onClick={adicionarMoto}>
                <PlusCircle className="mr-2 h-4 w-4" />
                Adicionar Moto
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Resumo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-4">
              <Bike className="h-10 w-10 text-primary" />
              <div>
                <p className="text-sm font-medium">Total de Motos</p>
                <p className="text-2xl font-bold">{motos.length}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <DollarSign className="h-10 w-10 text-green-500" />
              <div>
                <p className="text-sm font-medium">Receita Potencial/Dia</p>
                <p className="text-2xl font-bold">
                  R$ {motos.reduce((total, moto) => total + Number(moto.preco), 0)}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}