import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Scale, Shield, Clock, Users, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#091f1a] text-[#ffffff] py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#091f1a]/80 to-[#091f1a]"></div>
        
        <div className="container relative mx-auto px-4 md:px-6 z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center rounded-full border border-[#f5af00]/40 bg-[#f5af00]/15 px-3 py-1 text-sm font-medium text-[#f5af00] backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#f5af00] mr-2"></span>
              Soluções Jurídicas Estratégicas para a Nova Economia
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Defesa dos seus direitos com <span className="text-[#f5af00]">precisão</span> e <span className="text-[#f5af00]">integridade</span>
            </h1>
            <p className="text-lg md:text-xl text-[#ffffff]/80 max-w-2xl leading-relaxed">
              A ESM Advocacia Especializada combina excelência técnica e tecnologia para oferecer
              soluções jurídicas claras, ágeis e orientadas a resultado para empresas e pessoas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/schedule">
                <Button size="lg" className="w-full sm:w-auto bg-[#f5af00] hover:bg-[#d99a00] text-[#091f1a] border-0">
                  Agendar Consulta <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-[#ffffff]/35 text-[#ffffff] hover:bg-[#ffffff]/10 hover:text-[#ffffff] bg-transparent">
                  Falar com Especialista
                </Button>
              </Link>
            </div>
            
            <div className="pt-8 flex items-center gap-8 text-[#ffffff]/75 text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#f5af00]" />
                <span>Atendimento Especializado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#f5af00]" />
                <span>Atuação Nacional</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#f5af00]" />
                <span>Portal do Cliente</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Why Choose Us */}
      <section className="py-20 bg-[#ffffff]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#091f1a] sm:text-4xl">Por que empresas confiam na ESM</h2>
            <p className="mt-4 text-lg text-[#091f1a]/75">
              Nosso modelo de trabalho une estratégia jurídica, comunicação clara e foco em resultado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Proteção Jurídica Sólida",
                desc: "Estratégias de defesa personalizadas conforme os riscos e objetivos do seu caso."
              },
              {
                icon: Clock,
                title: "Agilidade e Eficiência",
                desc: "Fluxos digitais e atendimento objetivo para reduzir burocracia e acelerar decisões."
              },
              {
                icon: Users,
                title: "Atendimento Próximo",
                desc: "Acompanhamento contínuo com equipe experiente e informações centralizadas no portal."
              }
            ].map((feature, idx) => (
              <Card key={idx} className="border-none shadow-lg bg-[#ffffff] hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-[#f5af00]/20 flex items-center justify-center mb-4 text-[#091f1a]">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#091f1a]/75 leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas Preview */}
      <section className="py-20 bg-[#ffffff]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-[#091f1a] sm:text-4xl">Nossas Especialidades</h2>
              <p className="mt-4 text-lg text-[#091f1a]/75">Atuação completa em áreas estratégicas do Direito.</p>
            </div>
            <Link to="/practice-areas" className="hidden md:flex items-center text-[#091f1a] font-medium hover:text-[#f5af00]">
              Ver todas as áreas <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Direito Empresarial", "Propriedade Intelectual", "Contencioso Cível", "Direito Imobiliário", "Direito Tributário", "Direito Digital"].map((area, i) => (
              <Link key={i} to="/practice-areas" className="group">
                <Card className="h-full hover:border-[#f5af00]/50 hover:shadow-md transition-all duration-200">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {area}
                      <ArrowRight className="h-4 w-4 text-[#091f1a]/40 group-hover:text-[#f5af00] transition-colors" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[#091f1a]/65">
                      Assessoria especializada em {area.toLowerCase()}, com estratégia, segurança e previsibilidade.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 md:hidden">
            <Link to="/practice-areas" className="flex items-center justify-center text-[#091f1a] font-medium hover:text-[#f5af00]">
              Ver todas as áreas <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#ffffff]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center text-[#091f1a] mb-16">Resultados de Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "A ESM reorganizou nossos contratos com segurança e agilidade. A diferença foi imediata.",
                author: "Paula Nunes",
                role: "CEO, TechStart Brasil"
              },
              {
                quote: "Fui acompanhada em cada etapa do processo. Atendimento humano e extremamente técnico.",
                author: "Renata Lima",
                role: "Empresária do Setor Imobiliário"
              },
              {
                quote: "A equipe de direito digital protegeu nossa marca em um momento crítico.",
                author: "Tiago Martins",
                role: "Fundador, Estúdio Criativo"
              }
            ].map((t, i) => (
              <Card key={i} className="bg-[#ffffff] border-[#091f1a]/10">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-4 w-4 fill-[#f5af00] text-[#f5af00]" />
                    ))}
                  </div>
                  <blockquote className="text-[#091f1a]/85 mb-6 italic">"{t.quote}"</blockquote>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#091f1a]/15 flex items-center justify-center text-[#091f1a] font-bold">
                      {t.author[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-[#091f1a]">{t.author}</div>
                      <div className="text-xs text-[#091f1a]/65">{t.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#091f1a] text-[#ffffff]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para proteger seus interesses?</h2>
          <p className="text-[#ffffff]/80 text-lg max-w-2xl mx-auto mb-10">
            Agende uma consulta e receba um plano jurídico objetivo para o seu cenário.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/schedule">
              <Button size="lg" className="bg-[#f5af00] text-[#091f1a] hover:bg-[#d99a00] w-full sm:w-auto">
                Agendar Agora
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-[#ffffff]/40 text-[#ffffff] hover:bg-[#ffffff]/10 hover:text-[#ffffff] bg-transparent w-full sm:w-auto">
                Fale Conosco
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
