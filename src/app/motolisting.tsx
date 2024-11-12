"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Bike, Calendar, DollarSign, Filter, MapPin, Search, Star } from "lucide-react"


// Dados fictícios de motos para demonstração
const motos = [
  { id: 1, nome: "Honda CB 500", localizacao: "São Paulo, SP", preco: 120, avaliacao: 4.5, imagem: "/placeholder.svg?height=200&width=300" },
  { id: 2, nome: "Yamaha MT-07", localizacao: "Rio de Janeiro, RJ", preco: 150, avaliacao: 4.8, imagem: "/placeholder.svg?height=200&width=300" },
  { id: 3, nome: "Kawasaki Ninja 400", localizacao: "Belo Horizonte, MG", preco: 130, avaliacao: 4.2, imagem: "/placeholder.svg?height=200&width=300" },
  { id: 4, nome: "BMW G 310 R", localizacao: "Curitiba, PR", preco: 140, avaliacao: 4.6, imagem: "/placeholder.svg?height=200&width=300" },
  { id: 5, nome: "Harley-Davidson Iron 883", localizacao: "Porto Alegre, RS", preco: 200, avaliacao: 4.9, imagem: "/placeholder.svg?height=200&width=300" },
  { id: 6, nome: "Suzuki GSX-S750", localizacao: "Brasília, DF", preco: 160, avaliacao: 4.4, imagem: "/placeholder.svg?height=200&width=300" },
]

export default function MotoListing() {
  const [precoMaximo, setPrecoMaximo] = useState(200)
  const [ordenacao, setOrdenacao] = useState("preco-asc")

  const motosFiltradas = motos
    .filter((moto) => moto.preco <= precoMaximo)
    .sort((a, b) => {
      if (ordenacao === "preco-asc") return a.preco - b.preco
      if (ordenacao === "preco-desc") return b.preco - a.preco
      if (ordenacao === "avaliacao-desc") return b.avaliacao - a.avaliacao
      return 0
    })

  return (
    <div className="min-h-screen bg-background">
      <header className="py-6 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">Motos Disponíveis para Aluguel</h1>
          <div className="flex gap-2">
            <Input placeholder="Buscar motos..." className="flex-grow" />
            <Button variant="secondary">
              <Search className="mr-2 h-4 w-4" />
              Buscar
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <aside className="w-full md:w-64 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="mr-2 h-5 w-5" />
                  Filtros
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Preço Máximo: R$ {precoMaximo}</label>
                  <Slider
                    min={50}
                    max={300}
                    step={10}
                    value={[precoMaximo]}
                    onValueChange={(value) => setPrecoMaximo(value[0])}
                  />
                </div>
                <Select value={ordenacao} onValueChange={setOrdenacao}>
                  <SelectTrigger>
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="preco-asc">Menor Preço</SelectItem>
                    <SelectItem value="preco-desc">Maior Preço</SelectItem>
                    <SelectItem value="avaliacao-desc">Melhor Avaliação</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          </aside>

          <section className="flex-grow grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {motosFiltradas.map((moto) => (
              <Card key={moto.id}>
                <CardHeader>
                  <img src={moto.imagem} alt={moto.nome} className="w-full h-48 object-cover rounded-t-lg" />
                </CardHeader>
                <CardContent>
                  <CardTitle>{moto.nome}</CardTitle>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="mr-2 h-4 w-4" />
                      {moto.localizacao}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="mr-2 h-4 w-4 text-primary" />
                      <span className="font-semibold">R$ {moto.preco}/dia</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="mr-2 h-4 w-4 text-yellow-500" />
                      <span>{moto.avaliacao.toFixed(1)}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Reservar
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </section>
        </div>

        <div className="mt-8 flex justify-center">
          <Button variant="outline" className="mx-1">Anterior</Button>
          <Button variant="outline" className="mx-1">1</Button>
          <Button variant="outline" className="mx-1">2</Button>
          <Button variant="outline" className="mx-1">3</Button>
          <Button variant="outline" className="mx-1">Próxima</Button>
        </div>
      </main>
    </div>
  )
}