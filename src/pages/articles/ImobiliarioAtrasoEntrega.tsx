import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, CalendarDays, Download, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ImobiliarioAtrasoEntrega = () => {
  return (
    <div className="min-h-screen bg-[#ffffff] py-12">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <div className="mb-8">
          <Link to="/resources" className="inline-flex items-center gap-2 text-sm font-medium text-[#091f1a] hover:text-[#f5af00]">
            <ArrowLeft className="h-4 w-4" /> Voltar para Conteúdos Jurídicos
          </Link>
        </div>

        <div className="mb-8 space-y-4">
          <Badge className="bg-[#f5af00] text-[#091f1a] hover:bg-[#f5af00]">Direito Imobiliário</Badge>
          <h1 className="text-4xl font-bold tracking-tight text-[#091f1a] md:text-5xl">
            Atraso na entrega do imóvel na planta: quando o comprador pode rescindir e como reduzir prejuízos
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#091f1a]/70">
            <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" /> 09 Abr 2026</span>
            <span className="inline-flex items-center gap-2"><BookOpen className="h-4 w-4" /> 7 min de leitura</span>
          </div>
          <p className="text-lg leading-relaxed text-[#091f1a]/80">
            Entenda os principais pontos de atenção em casos de atraso da obra, os cuidados com o distrato e como agir com mais segurança para proteger seu patrimônio.
          </p>
        </div>

        <article className="space-y-8 text-[#091f1a]/85">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#091f1a]">Por que esse tema merece atenção?</h2>
            <p>
              Comprar um imóvel na planta costuma ser uma decisão de longo prazo, cercada de expectativa e planejamento.
              Quando a entrega atrasa, porém, o impacto vai muito além da frustração: o comprador pode continuar no aluguel,
              adiar a mudança, reorganizar o orçamento e passar a conviver com forte insegurança contratual.
            </p>
            <p>
              Em muitos casos, o problema não está apenas no atraso em si, mas no desconhecimento sobre as cláusulas assinadas,
              o alcance do prazo de tolerância e os efeitos patrimoniais de uma eventual rescisão.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#091f1a]">O que o comprador deve revisar primeiro</h2>
            <p>
              Antes de aceitar justificativas genéricas ou propostas rápidas de acordo, o ideal é reunir e revisar o contrato,
              os aditivos, os comprovantes de pagamento, os materiais publicitários do empreendimento e as comunicações da construtora.
            </p>
            <p>
              Esses documentos ajudam a compreender o prazo prometido, a eventual cláusula de tolerância e os impactos reais do atraso,
              permitindo uma avaliação mais estratégica sobre os próximos passos.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#091f1a]">Atenção ao distrato</h2>
            <p>
              O distrato muitas vezes é apresentado como solução simples, mas precisa ser lido com cuidado. Dependendo do caso,
              retenções, prazos de devolução e renúncias exigidas podem gerar um resultado mais prejudicial do que o comprador imagina.
            </p>
            <p>
              Por isso, a decisão entre manter o contrato, negociar ou discutir a rescisão deve considerar o estágio da obra,
              a urgência da moradia, o investimento já realizado e o nível de confiança ainda existente na relação contratual.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#091f1a]">Como reduzir prejuízos</h2>
            <div className="rounded-2xl bg-[#f5af00]/15 p-6">
              <ul className="space-y-3 text-sm md:text-base">
                <li>• organize contrato, aditivos, comprovantes e mensagens relevantes;</li>
                <li>• evite negociações exclusivamente verbais;</li>
                <li>• documente despesas extras relacionadas ao atraso;</li>
                <li>• avalie tecnicamente qualquer proposta de distrato;</li>
                <li>• defina uma estratégia compatível com seu objetivo patrimonial.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#091f1a]">Conclusão</h2>
            <p>
              Em Direito Imobiliário, decisões precipitadas costumam custar caro. Com análise técnica e boa organização documental,
              o comprador consegue agir de modo mais seguro, reduzir riscos e evitar que a insegurança contratual comprometa ainda mais o seu patrimônio.
            </p>
            <p className="text-sm text-[#091f1a]/65">
              Conteúdo informativo, sem substituir análise jurídica individualizada do caso concreto.
            </p>
          </section>
        </article>

        <Card className="mt-10 border-none bg-[#091f1a] text-[#ffffff] shadow-xl">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-[#f5af00]"><Scale className="h-4 w-4" /> Material complementar</div>
                <h3 className="text-2xl font-bold">Quer se aprofundar antes de decidir?</h3>
                <p className="text-[#ffffff]/80">
                  Baixe o nosso checklist do comprador de imóvel na planta e entenda os principais cuidados antes de aceitar atraso, acordo ou distrato.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/schedule?area=1">
                  <Button size="lg" className="w-full border-0 bg-[#f5af00] text-[#091f1a] hover:bg-[#d99a00] sm:w-auto">
                    Agendar Consulta
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="w-full border-[#ffffff]/30 bg-transparent text-[#ffffff] hover:bg-[#ffffff]/10 hover:text-[#ffffff] sm:w-auto">
                    <Download className="mr-2 h-4 w-4" /> Solicitar Material
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ImobiliarioAtrasoEntrega;
