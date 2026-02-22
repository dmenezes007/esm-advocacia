import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { brandLogo } from "@/assets/brand";

const Footer = () => {
  return (
    <footer className="bg-[#091f1a] bg-emerald-motion text-[#ffffff]/80 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <img src={brandLogo} alt="Logo ESM Advocacia Especializada" className="h-10 w-10 rounded-md object-cover border border-[#ffffff]/30 logo-transparent-border" />
              <span className="text-xl font-bold tracking-tight font-brand">ESM Advocacia Especializada</span>
            </div>
            <p className="text-sm text-[#ffffff]/70 leading-relaxed">
              Soluções jurídicas estratégicas para empresas e pessoas, com excelência técnica,
              transparência e atendimento próximo em cada etapa.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-[#f5af00] transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-[#f5af00] transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-[#f5af00] transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-[#f5af00] transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-white font-semibold mb-4">Áreas de Atuação</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/practice-areas" className="hover:text-[#f5af00] transition-colors">Direito Imobiliário</Link></li>
              <li><Link to="/practice-areas" className="hover:text-[#f5af00] transition-colors">Direito da Saúde</Link></li>
              <li><Link to="/practice-areas" className="hover:text-[#f5af00] transition-colors">Direito do Passageiro Aéreo</Link></li>
              <li><Link to="/practice-areas" className="hover:text-[#f5af00] transition-colors">Direito de Família</Link></li>
              <li><Link to="/practice-areas" className="hover:text-[#f5af00] transition-colors">Direito de Sucessões</Link></li>
              <li><Link to="/practice-areas" className="hover:text-[#f5af00] transition-colors">Direito Trabalhista</Link></li>
              <li><Link to="/practice-areas" className="hover:text-[#f5af00] transition-colors">Direito de Telefonia</Link></li>
              <li><Link to="/practice-areas" className="hover:text-[#f5af00] transition-colors">Direito Bancário</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Institucional</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-[#f5af00] transition-colors">Quem Somos</Link></li>
              <li><Link to="/about" className="hover:text-[#f5af00] transition-colors">Nossa Equipe</Link></li>
              <li><Link to="/resources" className="hover:text-[#f5af00] transition-colors">Conteúdos</Link></li>
              <li><Link to="/resources" className="hover:text-[#f5af00] transition-colors">Notícias e Insights</Link></li>
              <li><Link to="/contact" className="hover:text-[#f5af00] transition-colors">Contato</Link></li>
              <li><Link to="/dashboard" className="hover:text-[#f5af00] transition-colors">Portal do Cliente</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Fale Conosco</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#f5af00] shrink-0" />
                <span>Av. Paulista, 1000, Conj. 101<br />São Paulo - SP, 01310-100</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#f5af00] shrink-0" />
                <span>+55 (11) 3555-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#f5af00] shrink-0" />
                <span>contato@esmadvocacia.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#ffffff]/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#ffffff]/60">
          <p>&copy; {new Date().getFullYear()} ESM Advocacia Especializada. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-[#f5af00]">Política de Privacidade</Link>
            <Link to="#" className="hover:text-[#f5af00]">Termos de Uso</Link>
            <Link to="#" className="hover:text-[#f5af00]">Aviso Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
