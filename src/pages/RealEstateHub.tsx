import { useEffect } from "react";
import { Building2, ChevronRight, Home, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const bentoCover = new URL("../../imoveis/bento-ribeiro/sala_foto1.jpg", import.meta.url).href;
const taquaraCover = new URL("../../imoveis/taquara/894020836-742.63934051442965andar0001-processed.jpg", import.meta.url).href;

const listings = [
  {
    title: "Apartamento em Bento Ribeiro",
    subtitle: "52 m2 | 2 quartos | oportunidade para morar ou investir",
    price: "R$ 149.900,00",
    location: "Estrada Henrique de Melo, Bento Ribeiro - Rio de Janeiro/RJ",
    image: bentoCover,
    href: "/imoveis/bento-ribeiro",
  },
  {
    title: "Apartamento na Taquara",
    subtitle: "144 m2 | 3 quartos (1 suite) | vista panoramica",
    price: "R$ 449.900,00",
    location: "Estrada Rodrigues Caldas, Taquara - Rio de Janeiro/RJ",
    image: taquaraCover,
    href: "/imoveis/taquara",
  },
];

const RealEstateHub = () => {
  useEffect(() => {
    document.title = "Imoveis em destaque no Rio de Janeiro | ESM Advocacia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Vitrine de imoveis da ESM Advocacia com opcoes em Bento Ribeiro e Taquara, com consultoria juridica para compra segura no Rio de Janeiro.",
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f8faf9] text-[#091f1a]">
      <section className="relative overflow-hidden bg-[#091f1a] py-20 text-[#ffffff]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,175,0,0.22),transparent_35%),radial-gradient(circle_at_80%_15%,rgba(11,135,103,0.35),transparent_40%),radial-gradient(circle_at_40%_80%,rgba(255,255,255,0.08),transparent_50%)]" />
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#f5af00]/40 bg-[#f5af00]/15 px-4 py-1 text-sm font-medium text-[#f5af00]">
              <Building2 className="h-4 w-4" />
              Imoveis selecionados com suporte juridico completo
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Consultoria imobiliaria com visao juridica para uma compra segura
            </h1>
            <p className="max-w-3xl text-lg text-[#ffffff]/80 md:text-xl">
              A ESM Advocacia atua no processo imobiliario com estrategia, analise documental e acompanhamento tecnico para proteger seu patrimonio.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                "Analise de risco da negociacao",
                "Suporte contratual e registral",
                "Atendimento humanizado do inicio ao fechamento",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-[#ffffff]/15 bg-[#ffffff]/5 p-4 text-sm">
                  <ShieldCheck className="mb-2 h-4 w-4 text-[#f5af00]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#0b8767]">
              <Sparkles className="h-4 w-4" />
              Vitrine Imobiliaria
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">Imoveis em destaque</h2>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {listings.map((item) => (
            <Card key={item.href} className="group overflow-hidden border border-[#091f1a]/10 bg-[#ffffff] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-full bg-[#091f1a]/80 px-4 py-1 text-sm font-semibold text-[#f5af00]">
                  {item.price}
                </div>
              </div>
              <CardContent className="space-y-4 p-6">
                <h3 className="text-2xl font-bold text-[#091f1a]">{item.title}</h3>
                <p className="text-[#091f1a]/75">{item.subtitle}</p>
                <p className="inline-flex items-center gap-2 text-sm text-[#091f1a]/70">
                  <MapPin className="h-4 w-4 text-[#0b8767]" />
                  {item.location}
                </p>
                <Link to={item.href}>
                  <Button className="w-full bg-[#f5af00] text-[#091f1a] hover:bg-[#d99a00]">
                    Ver detalhes do imovel <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-[#ffffff] py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 rounded-2xl border border-[#091f1a]/10 bg-[linear-gradient(120deg,#ffffff_0%,#f4fbf8_45%,#fff5d9_100%)] p-8 md:grid-cols-[1.3fr_1fr] md:p-10">
            <div>
              <h3 className="mb-3 text-3xl font-bold">Assessoria para venda, compra e regularizacao</h3>
              <p className="max-w-2xl text-[#091f1a]/75">
                Nossa equipe oferece orientacao juridica e estrategica para negociacoes imobiliarias com transparencia e seguranca, desde a primeira visita ate a assinatura final.
              </p>
            </div>
            <div className="flex items-center justify-start md:justify-end">
              <Link to="/contact">
                <Button size="lg" className="bg-[#091f1a] text-[#ffffff] hover:bg-[#0f3028]">
                  Falar com consultor imobiliario <Home className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstateHub;
