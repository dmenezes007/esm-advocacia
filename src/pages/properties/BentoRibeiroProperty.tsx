import { useEffect } from "react";
import { Bath, BedDouble, Building, CarFront, CheckCircle2, Home, MapPin, MessageCircle, Ruler, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileWhatsAppBar from "@/components/ui/MobileWhatsAppBar";

const WHATSAPP_URL =
  "https://whatsa.me/5521981125585/?t=Ol%C3%A1!%20Estou%20interessado%20no%20im%C3%B3vel%20da%20Estrada%20Henrique%20de%20Melo,%20em%20Bento%20Ribeiro";

const images = [
  new URL("../../../imoveis/bento-ribeiro/sala_foto1.jpg", import.meta.url).href,
  new URL("../../../imoveis/bento-ribeiro/sala_foto2.jpg", import.meta.url).href,
  new URL("../../../imoveis/bento-ribeiro/cozinha_foto1.jpg", import.meta.url).href,
  new URL("../../../imoveis/bento-ribeiro/quarto_casal_foto1.jpg", import.meta.url).href,
  new URL("../../../imoveis/bento-ribeiro/quarto_solteiro_foto1.jpg", import.meta.url).href,
  new URL("../../../imoveis/bento-ribeiro/banheiro_foto1.jpg", import.meta.url).href,
];

const BentoRibeiroProperty = () => {
  useEffect(() => {
    document.title = "Apartamento em Bento Ribeiro | ESM Advocacia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Apartamento de 52 m2 em Bento Ribeiro, Rio de Janeiro: 2 quartos, condominio fechado e suporte juridico completo da ESM Advocacia.",
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#fbfcfb] pb-24 text-[#091f1a] md:pb-0">
      <section className="relative overflow-hidden bg-[#091f1a] py-16 text-[#ffffff] md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(245,175,0,0.2),transparent_30%),radial-gradient(circle_at_90%_10%,rgba(11,135,103,0.35),transparent_35%),radial-gradient(circle_at_40%_90%,rgba(255,255,255,0.12),transparent_45%)]" />
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="max-w-4xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#f5af00]/40 bg-[#f5af00]/10 px-4 py-1 text-sm font-semibold text-[#f5af00]">
              <Home className="h-4 w-4" />
              Apartamento residencial em Bento Ribeiro
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Apto 52 m2 reformado, funcional e pronto para morar
            </h1>
            <p className="max-w-3xl text-lg text-[#ffffff]/80 md:text-xl">
              Solucao ideal para quem busca praticidade no dia a dia, com condominio acessivel e localizacao estrategica na Zona Norte do Rio.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#ffffff]/85">
              <span className="rounded-full border border-[#ffffff]/30 bg-[#ffffff]/10 px-3 py-1">Valor de venda: R$ 149.900,00</span>
              <span className="rounded-full border border-[#ffffff]/30 bg-[#ffffff]/10 px-3 py-1">Condominio: R$ 355,00</span>
              <span className="rounded-full border border-[#ffffff]/30 bg-[#ffffff]/10 px-3 py-1">IPTU: isento</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-4 md:grid-cols-12">
          <div className="md:col-span-8">
            <img src={images[0]} alt="Sala do apartamento em Bento Ribeiro" className="h-80 w-full rounded-2xl object-cover md:h-[520px]" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:col-span-4 md:grid-cols-1">
            {images.slice(1, 3).map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`Ambiente ${index + 2} do apartamento em Bento Ribeiro`}
                className="h-36 w-full rounded-2xl object-cover md:h-[252px]"
              />
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {images.slice(3).map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Detalhe ${index + 4} do apartamento em Bento Ribeiro`}
              className="h-48 w-full rounded-2xl object-cover"
            />
          ))}
        </div>
      </section>

      <section className="container mx-auto grid gap-8 px-4 pb-16 md:grid-cols-[1.3fr_1fr] md:px-6">
        <div className="space-y-6 rounded-2xl border border-[#091f1a]/10 bg-[#ffffff] p-7">
          <h2 className="text-3xl font-bold">Ficha do imovel</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { icon: Ruler, label: "Area util", value: "52 m2" },
              { icon: BedDouble, label: "Quartos", value: "2" },
              { icon: Bath, label: "Banheiro", value: "1" },
              { icon: CarFront, label: "Vaga", value: "0" },
              { icon: Building, label: "Andar", value: "1" },
              { icon: MapPin, label: "Bairro", value: "Bento Ribeiro - Rio de Janeiro/RJ" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-[#091f1a]/10 p-4">
                <p className="mb-2 inline-flex items-center gap-2 text-sm text-[#091f1a]/65">
                  <item.icon className="h-4 w-4 text-[#0b8767]" />
                  {item.label}
                </p>
                <p className="font-semibold">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-[#f7faf8] p-5">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0b8767]">Diferenciais</p>
            <div className="grid gap-2 text-sm text-[#091f1a]/80 sm:grid-cols-2">
              {["Aceita animais", "Area de servico", "Condominio fechado", "Portao eletronico", "Imovel regularizado", "Pronto para morar"].map((feature) => (
                <p key={feature} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#f5af00]" />
                  {feature}
                </p>
              ))}
            </div>
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-[#091f1a]/10 bg-[linear-gradient(145deg,#091f1a_0%,#0f3028_50%,#123d33_100%)] p-7 text-[#ffffff]">
          <p className="mb-2 text-sm uppercase tracking-[0.16em] text-[#f5af00]">Atendimento rapido</p>
          <h3 className="mb-3 text-2xl font-bold">Agende sua visita hoje</h3>
          <p className="mb-6 text-[#ffffff]/80">
            Fale agora com nosso time e receba atendimento completo para conhecer este apartamento e avancar com seguranca na negociacao.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <Button className="w-full bg-[#f5af00] text-[#091f1a] hover:bg-[#d99a00]">
              Quero visitar este imovel <MessageCircle className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <p className="mt-4 inline-flex items-center gap-2 text-xs text-[#ffffff]/70">
            <ShieldCheck className="h-4 w-4 text-[#f5af00]" />
            Suporte juridico do primeiro contato ao fechamento.
          </p>
        </aside>
      </section>

      <section className="container mx-auto px-4 pb-16 md:px-6">
        <div className="rounded-2xl border border-[#091f1a]/10 bg-[#ffffff] p-7 md:p-9">
          <h2 className="text-2xl font-bold md:text-3xl">Apartamento a venda em Bento Ribeiro com seguranca juridica</h2>
          <p className="mt-4 text-[#091f1a]/75">
            Este apartamento residencial em Bento Ribeiro, Rio de Janeiro, e uma opcao competitiva para quem busca imovel pronto para morar com custo mensal controlado.
            A localizacao na Estrada Henrique de Melo favorece deslocamentos e acesso a comercio, servicos e mobilidade urbana da Zona Norte.
          </p>
          <p className="mt-3 text-[#091f1a]/75">
            Para compradores e investidores, a ESM Advocacia oferece assessoria em due diligence imobiliaria, revisao contratual e validacao registral, com foco em reduzir riscos na compra e acelerar a conclusao do negocio.
          </p>
        </div>
      </section>

      <MobileWhatsAppBar href={WHATSAPP_URL} label="Falar no WhatsApp sobre Bento Ribeiro" />
    </div>
  );
};

export default BentoRibeiroProperty;
