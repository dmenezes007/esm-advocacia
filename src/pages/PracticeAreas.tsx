import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // I need to create Badge component

const practiceAreas = [
  {
    id: 1,
    title: "Direito Empresarial",
    category: "Empresarial",
    description: "Assessoria completa para empresas, da constituição a operações estratégicas.",
    services: ["Constituição Societária", "Revisão Contratual", "M&A", "Compliance"],
  },
  {
    id: 2,
    title: "Contencioso Cível",
    category: "Contencioso",
    description: "Representação em disputas cíveis complexas e processos judiciais.",
    services: ["Resolução de Conflitos", "Arbitragem", "Atuação Processual"],
  },
  {
    id: 3,
    title: "Propriedade Intelectual",
    category: "Empresarial",
    description: "Proteção de ativos criativos, marcas, patentes e direitos autorais.",
    services: ["Registro de Marca", "Depósito de Patente", "Litígios em PI"],
  },
  {
    id: 4,
    title: "Direito Imobiliário",
    category: "Imobiliário",
    description: "Suporte jurídico em negociações imobiliárias e conflitos patrimoniais.",
    services: ["Fechamento de Negócios", "Contratos de Locação", "Questões Urbanísticas"],
  },
  {
    id: 5,
    title: "Direito de Família",
    category: "Pessoal",
    description: "Atuação técnica e sensível em divórcio, guarda e temas familiares.",
    services: ["Divórcio", "Guarda", "Pacto Antenupcial"],
  },
  {
    id: 6,
    title: "Direito Tributário",
    category: "Financeiro",
    description: "Planejamento tributário e defesa administrativa/judicial para pessoas e empresas.",
    services: ["Planejamento Tributário", "Defesa em Fiscalização", "Tributação Internacional"],
  },
  {
    id: 7,
    title: "Direito do Trabalho",
    category: "Empresarial",
    description: "Consultoria preventiva e contenciosa para relações trabalhistas.",
    services: ["Contratos", "Defesa em Reclamações", "Compliance Trabalhista"],
  },
  {
    id: 8,
    title: "Direito Digital",
    category: "Tecnologia",
    description: "Assessoria em internet, privacidade, proteção de dados e segurança da informação.",
    services: ["Privacidade de Dados", "Cibersegurança", "Responsabilidade Online"],
  },
];

const categories = ["Todas", "Empresarial", "Contencioso", "Imobiliário", "Pessoal", "Financeiro", "Tecnologia"];

const PracticeAreas = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAreas = practiceAreas.filter((area) => {
    const matchesCategory = selectedCategory === "Todas" || area.category === selectedCategory;
    const matchesSearch = area.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          area.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#ffffff] py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#091f1a] mb-4">Áreas de Atuação</h1>
          <p className="text-lg text-[#091f1a]/75 max-w-2xl mx-auto">
            Conheça nossas soluções jurídicas especializadas para diferentes cenários e setores.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
          <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto no-scrollbar">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
                className="whitespace-nowrap"
              >
                {cat}
              </Button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#091f1a]/50" />
            <Input
              placeholder="Buscar áreas..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAreas.length > 0 ? (
            filteredAreas.map((area) => (
              <Card key={area.id} className="flex flex-col h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="mb-2">{area.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                  <CardDescription className="line-clamp-2 mt-2">{area.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-1">
                    {area.services.slice(0, 3).map((service, idx) => (
                      <li key={idx} className="text-sm text-[#091f1a]/75 flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#f5af00]" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to={`/schedule?area=${area.id}`} className="w-full">
                    <Button variant="outline" className="w-full group">
                      Consultar Agora <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-[#091f1a]/65">
              Nenhuma área encontrada com os filtros selecionados.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;
