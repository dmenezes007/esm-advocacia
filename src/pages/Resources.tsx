import { useState } from "react";
import { Search, FileText, BookOpen, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const articles = [
  {
    id: 1,
    title: "Direitos de Propriedade Intelectual na Era Digital",
    category: "Propriedade Intelectual",
    date: "15 Out 2023",
    readTime: "5 min de leitura",
    excerpt: "Guia prático para proteger ativos digitais e criações no ambiente online.",
  },
  {
    id: 2,
    title: "Mudanças Tributárias para Empresas: O que observar",
    category: "Direito Tributário",
    date: "28 Set 2023",
    readTime: "8 min de leitura",
    excerpt: "Principais alterações legais com impacto direto em pequenas e médias empresas.",
  },
  {
    id: 3,
    title: "Como negociar contratos de locação comercial",
    category: "Direito Imobiliário",
    date: "10 Set 2023",
    readTime: "6 min de leitura",
    excerpt: "Riscos frequentes e pontos de atenção em contratos de locação empresarial.",
  },
  {
    id: 4,
    title: "Empregado x Prestador: diferenças jurídicas essenciais",
    category: "Direito do Trabalho",
    date: "22 Ago 2023",
    readTime: "7 min de leitura",
    excerpt: "Como classificar corretamente vínculos para reduzir passivos trabalhistas.",
  },
  {
    id: 5,
    title: "Privacidade de Dados para startups de tecnologia",
    category: "Direito Digital",
    date: "05 Ago 2023",
    readTime: "10 min de leitura",
    excerpt: "Passos essenciais para estruturação de governança de dados e conformidade.",
  },
  {
    id: 6,
    title: "Planejamento sucessório: como proteger seu patrimônio",
    category: "Direito de Família",
    date: "18 Jul 2023",
    readTime: "4 min de leitura",
    excerpt: "Estratégias para organizar a sucessão patrimonial com segurança jurídica.",
  },
];

const categories = ["Todas", "Propriedade Intelectual", "Direito Tributário", "Direito Imobiliário", "Direito do Trabalho", "Direito Digital", "Direito de Família"];

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === "Todas" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#ffffff] py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#091f1a] mb-4">Conteúdos Jurídicos</h1>
          <p className="text-lg text-[#091f1a]/75 max-w-2xl mx-auto">
            Acompanhe artigos e materiais práticos para decisões jurídicas mais seguras.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-6 mb-10 items-center justify-between">
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
              placeholder="Buscar artigos..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <Card key={article.id} className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300 border-none shadow-sm">
                <div className="h-48 bg-[#091f1a]/15 rounded-t-xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[#091f1a]/10 group-hover:bg-[#091f1a]/20 transition-colors" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#ffffff]/90 text-[#091f1a] hover:bg-[#ffffff]">{article.category}</Badge>
                  </div>
                  {/* Placeholder Image Pattern */}
                  <div className="w-full h-full bg-gradient-to-br from-[#ffffff] to-[#f5af00]/30 flex items-center justify-center text-[#091f1a]/45">
                    <FileText className="h-12 w-12 opacity-20" />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-xs text-[#091f1a]/65 mb-2">
                    <span className="flex items-center gap-1"><BookOpen className="h-3 w-3" /> {article.readTime}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight group-hover:text-[#f5af00] transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-[#091f1a]/75 text-sm line-clamp-3">{article.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="p-0 h-auto text-[#091f1a] hover:text-[#f5af00] font-semibold group">
                    Ler Artigo <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-[#091f1a]/65">
              Nenhum artigo encontrado para a pesquisa informada.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resources;
