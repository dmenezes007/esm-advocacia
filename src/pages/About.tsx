import { Users, Award, History, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-[#ffffff] py-12">
      {/* Hero */}
      <div className="container mx-auto px-4 md:px-6 mb-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-[#091f1a] mb-6">Sobre a ESM Advocacia Especializada</h1>
        <p className="text-xl text-[#091f1a]/75 max-w-3xl mx-auto">
          Somos um escritório focado em estratégia jurídica de alto nível, com atendimento próximo,
          visão de negócio e soluções eficientes para demandas complexas.
        </p>
      </div>

      {/* Mission & Values */}
      <div className="container mx-auto px-4 md:px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "Nossa Missão",
              desc: "Oferecer assessoria jurídica especializada, acessível e orientada a resultados concretos."
            },
            {
              icon: Award,
              title: "Excelência",
              desc: "Atuação técnica rigorosa, com qualidade, ética e precisão em cada entrega."
            },
            {
              icon: Users,
              title: "Cliente no Centro",
              desc: "Relacionamento de confiança, comunicação clara e atuação alinhada aos seus objetivos."
            }
          ].map((item, i) => (
            <Card key={i} className="text-center p-6">
              <div className="mx-auto h-12 w-12 bg-[#f5af00]/20 rounded-full flex items-center justify-center text-[#091f1a] mb-4">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#091f1a] mb-2">{item.title}</h3>
              <p className="text-[#091f1a]/75">{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-[#ffffff] py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#091f1a]">Nossa Trajetória</h2>
          <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#091f1a]/30 before:to-transparent">
            {[
              { year: "2015", title: "Fundação", desc: "Início das atividades com foco em consultoria empresarial estratégica." },
              { year: "2018", title: "Expansão", desc: "Ampliação do portfólio para contencioso e consultoria especializada." },
              { year: "2020", title: "Transformação Digital", desc: "Implantação do portal do cliente e rotinas jurídicas digitais." },
              { year: "2023", title: "Reconhecimento", desc: "Consolidação como referência em atendimento jurídico personalizado." }
            ].map((item, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#091f1a]/30 group-[.is-active]:bg-[#f5af00] text-[#091f1a] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <History className="h-4 w-4 text-[#091f1a]" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#ffffff] p-4 rounded border border-[#091f1a]/20 shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-[#091f1a]">{item.title}</div>
                    <time className="font-mono text-xs text-[#091f1a]/65">{item.year}</time>
                  </div>
                  <div className="text-[#091f1a]/70">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="container mx-auto px-4 md:px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#091f1a]">Nossa Liderança</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Sofia Mendes", role: "Sócia-Diretora", img: "https://i.pravatar.cc/300?u=1" },
            { name: "Ricardo Alves", role: "Líder de Contencioso", img: "https://i.pravatar.cc/300?u=2" },
            { name: "Camila Duarte", role: "Especialista em PI", img: "https://i.pravatar.cc/300?u=3" },
            { name: "Bruno Farias", role: "Líder Imobiliário", img: "https://i.pravatar.cc/300?u=4" }
          ].map((member, i) => (
            <div key={i} className="group relative overflow-hidden rounded-lg">
              <img src={member.img} alt={member.name} className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091f1a]/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-lg">{member.name}</h3>
                <p className="text-[#f5af00] text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
