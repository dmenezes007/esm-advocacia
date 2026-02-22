import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#ffffff] py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#091f1a] mb-4">Entre em Contato</h1>
          <p className="text-lg text-[#091f1a]/75">Nossa equipe está pronta para orientar você com segurança jurídica.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-[#091f1a]">Envie sua Mensagem</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nome</label>
                    <Input placeholder="João" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Sobrenome</label>
                    <Input placeholder="Silva" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">E-mail</label>
                  <Input type="email" placeholder="joao@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Assunto</label>
                  <Input placeholder="Consulta Jurídica" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Mensagem</label>
                  <Textarea placeholder="Como podemos ajudar você?" className="min-h-[150px]" />
                </div>
                <Button className="w-full bg-[#f5af00] hover:bg-[#d99a00] text-[#091f1a]">Enviar Mensagem</Button>
              </form>
            </CardContent>
          </Card>

          {/* Info & Map */}
          <div className="space-y-8">
            <div className="grid gap-6">
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-[#f5af00]/20 p-3 rounded-lg text-[#091f1a]">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-[#091f1a]">Endereço</h3>
                    <p className="text-[#091f1a]/75">Av. Paulista, 1000, Conj. 101<br />São Paulo - SP, 01310-100</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-[#f5af00]/20 p-3 rounded-lg text-[#091f1a]">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-[#091f1a]">Telefone</h3>
                    <p className="text-[#091f1a]/75">+55 (11) 3555-0000<br />Seg-Sex, 9h às 18h</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-[#f5af00]/20 p-3 rounded-lg text-[#091f1a]">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-[#091f1a]">E-mail</h3>
                    <p className="text-[#091f1a]/75">contato@esmadvocacia.com.br<br />atendimento@esmadvocacia.com.br</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder */}
            <div className="bg-[#091f1a]/10 h-64 rounded-xl flex items-center justify-center text-[#091f1a]/70 border border-[#091f1a]/20">
              <div className="text-center">
                <MapPin className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>O mapa interativo será exibido aqui</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
