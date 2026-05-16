import { useEffect } from "react";
import { Bath, BedDouble, Building, CarFront, CheckCircle2, Home, MapPin, MessageCircle, Ruler, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileWhatsAppBar from "@/components/ui/MobileWhatsAppBar";

const WHATSAPP_URL =
  "https://whatsa.me/5521981125585/?t=Ol%C3%A1!%20Estou%20interessado%20no%20im%C3%B3vel%20da%20Estrada%20Rodrigues%20Caldas,%20na%20Taquara";

const images = [
  new URL("../../../imoveis/taquara/894020836-742.63934051442965andar0001-processed.jpg", import.meta.url).href,
  new URL("../../../imoveis/taquara/894020836-220.245899546368635andar0033-processed.jpg", import.meta.url).href,
  new URL("../../../imoveis/taquara/894020836-341.817311993646745andar0002-processed.jpg", import.meta.url).href,
  new URL("../../../imoveis/taquara/894020836-397.762605060700935andar0040-processed.jpg", import.meta.url).href,
  new URL("../../../imoveis/taquara/894020836-658.34706581667795andar0015-processed.jpg", import.meta.url).href,
  new URL("../../../imoveis/taquara/894020836-985.15912058965165andar0017-processed.jpg", import.meta.url).href,
];

const TaquaraProperty = () => {
  useEffect(() => {
    document.title = "Apartamento na Taquara | ESM Advocacia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Apartamento de 144 m2 na Taquara, Rio de Janeiro: 3 quartos, suite, varanda e suporte juridico da ESM Advocacia.",
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#fbfcfb] pb-24 text-[#091f1a] md:pb-0">
      <section className="relative overflow-hidden bg-[#091f1a] py-16 text-[#ffffff] md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(245,175,0,0.24),transparent_32%),radial-gradient(circle_at_88%_15%,rgba(11,135,103,0.35),transparent_40%),radial-gradient(circle_at_45%_88%,rgba(255,255,255,0.12),transparent_45%)]" />
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="max-w-4xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#f5af00]/40 bg-[#f5af00]/10 px-4 py-1 text-sm font-semibold text-[#f5af00]">
              <Home className="h-4 w-4" />
              Apartamento premium na Taquara
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              144 m2 de conforto, varanda ampla e vista panoramica
            </h1>
            <p className="max-w-3xl text-lg text-[#ffffff]/80 md:text-xl">
              Um imovel espacoso para familias e investidores que buscam localizacao valorizada, planta generosa e excelente potencial de qualidade de vida.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#ffffff]/85">
              <span className="rounded-full border border-[#ffffff]/30 bg-[#ffffff]/10 px-3 py-1">Valor de venda: R$ 449.900,00</span>
              <span className="rounded-full border border-[#ffffff]/30 bg-[#ffffff]/10 px-3 py-1">Condominio: R$ 1.135,00</span>
              <span className="rounded-full border border-[#ffffff]/30 bg-[#ffffff]/10 px-3 py-1">IPTU: R$ 1.200,00</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-4 md:grid-cols-12">
          <div className="md:col-span-8">
            <img src={images[0]} alt="Sala principal do apartamento na Taquara" className="h-80 w-full rounded-2xl object-cover md:h-[520px]" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:col-span-4 md:grid-cols-1">
            {images.slice(1, 3).map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`Ambiente ${index + 2} do apartamento na Taquara`}
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
              alt={`Detalhe ${index + 4} do apartamento na Taquara`}
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
              { icon: Ruler, label: "Area util", value: "144 m2" },
              { icon: BedDouble, label: "Quartos", value: "3" },
              { icon: Bath, label: "Banheiros", value: "3" },
              { icon: CarFront, label: "Vaga", value: "1" },
              { icon: Building, label: "Andar", value: "4" },
              { icon: MapPin, label: "Bairro", value: "Taquara - Rio de Janeiro/RJ" },
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
              {[
                "Aceita animais",
                "Varanda",
                "Vista panoramica",
                "Copa",
                "Dependencia de empregados",
                "Condominio com elevador",
                "Portaria 24h",
                "Condominio fechado",
              ].map((feature) => (
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
          <h3 className="mb-3 text-2xl font-bold">Solicite uma visita exclusiva</h3>
          <p className="mb-6 text-[#ffffff]/80">
            Converse com nosso time para conhecer o imovel, tirar duvidas e receber suporte juridico completo durante toda a negociacao.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <Button className="w-full bg-[#f5af00] text-[#091f1a] hover:bg-[#d99a00]">
              Quero visitar este imovel <MessageCircle className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <p className="mt-4 inline-flex items-center gap-2 text-xs text-[#ffffff]/70">
            <ShieldCheck className="h-4 w-4 text-[#f5af00]" />
            Analise juridica e documental para sua seguranca.
          </p>
        </aside>
      </section>

      <section className="container mx-auto px-4 pb-16 md:px-6">
        <div className="rounded-2xl border border-[#091f1a]/10 bg-[#ffffff] p-7 md:p-9">
          <h2 className="text-2xl font-bold md:text-3xl">Apartamento na Taquara para morar com conforto ou investir</h2>
          <p className="mt-4 text-[#091f1a]/75">
            Este apartamento de 144 m2 na Taquara, Rio de Janeiro, oferece planta ampla, varanda e excelente distribuicao de ambientes.
            A localizacao na Estrada Rodrigues Caldas conecta o imovel aos principais corredores de Jacarepagua e a uma rede consolidada de comercio, servicos e escolas.
          </p>
          <p className="mt-3 text-[#091f1a]/75">
            Com perfil ideal para familias e investidores, a negociacao pode ser conduzida com suporte juridico preventivo da ESM Advocacia,
            incluindo analise documental, validacao de clausulas e acompanhamento ate o fechamento com maior previsibilidade.
          </p>
        </div>
      </section>

      <MobileWhatsAppBar href={WHATSAPP_URL} label="Falar no WhatsApp sobre Taquara" />
    </div>
  );
};

export default TaquaraProperty;
