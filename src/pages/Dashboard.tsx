import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  LayoutDashboard,
  Calendar, 
  FileText, 
  MessageSquare, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  Download,
  Clock,
  CheckCircle2,
  AlertCircle,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const appointments = [
    { id: 1, title: "Consulta Inicial", date: "24 Out 2023", time: "10:00", with: "Sofia Mendes", status: "Confirmado" },
    { id: 2, title: "Revisão Contratual", date: "02 Nov 2023", time: "14:30", with: "Ricardo Alves", status: "Pendente" },
  ];

  const documents = [
    { id: 1, name: "Contrato_de_Servicos_v2.pdf", date: "20 Out 2023", size: "2.4 MB" },
    { id: 2, name: "Modelo_NDA.docx", date: "18 Out 2023", size: "1.1 MB" },
    { id: 3, name: "Documentos_Societarios.pdf", date: "15 Set 2023", size: "4.5 MB" },
  ];

  return (
    <div className="min-h-screen bg-[#ffffff] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#091f1a] text-[#ffffff]/80 hidden md:flex flex-col fixed h-full">
        <div className="p-6 border-b border-[#ffffff]/20">
          <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl">
            <img src="/logo.png" alt="Logo ESM Advocacia Especializada" className="h-9 w-9 rounded-md object-cover border border-[#ffffff]/30" />
            <span className="font-brand">ESM Advocacia Especializada</span>
          </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          <Button variant="ghost" className="w-full justify-start text-[#ffffff]/85 hover:text-[#091f1a] hover:bg-[#f5af00]" onClick={() => setActiveTab("overview")}>
            <LayoutDashboard className="mr-3 h-5 w-5" />
            Visão Geral
          </Button>
          <Button variant="ghost" className="w-full justify-start text-[#ffffff]/85 hover:text-[#091f1a] hover:bg-[#f5af00]" onClick={() => setActiveTab("appointments")}>
            <Calendar className="mr-3 h-5 w-5" />
            Agendamentos
          </Button>
          <Button variant="ghost" className="w-full justify-start text-[#ffffff]/85 hover:text-[#091f1a] hover:bg-[#f5af00]" onClick={() => setActiveTab("documents")}>
            <FileText className="mr-3 h-5 w-5" />
            Documentos
          </Button>
          <Button variant="ghost" className="w-full justify-start text-[#ffffff]/85 hover:text-[#091f1a] hover:bg-[#f5af00]">
            <MessageSquare className="mr-3 h-5 w-5" />
            Mensagens
            <Badge className="ml-auto bg-[#f5af00] text-[#091f1a]">2</Badge>
          </Button>
          <Button variant="ghost" className="w-full justify-start text-[#ffffff]/85 hover:text-[#091f1a] hover:bg-[#f5af00]">
            <Settings className="mr-3 h-5 w-5" />
            Configurações
          </Button>
        </nav>

        <div className="p-4 border-t border-[#ffffff]/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-[#ffffff]/20 flex items-center justify-center text-white font-bold">JD</div>
            <div>
              <div className="text-white font-medium">John Doe</div>
              <div className="text-xs text-[#ffffff]/60">Cliente Premium</div>
            </div>
          </div>
          <Button variant="ghost" className="w-full justify-start text-[#f5af00] hover:text-[#091f1a] hover:bg-[#f5af00]">
            <LogOut className="mr-3 h-5 w-5" />
            Sair
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-[#091f1a]">Bem-vindo de volta, John</h1>
            <p className="text-[#091f1a]/65">Acompanhe suas demandas jurídicas em andamento.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#091f1a]/50" />
              <Input placeholder="Buscar..." className="pl-9 w-64 bg-white" />
            </div>
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-5 w-5 text-[#091f1a]" />
              <span className="absolute top-2 right-2 h-2 w-2 bg-[#f5af00] rounded-full"></span>
            </Button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#091f1a]/65">Casos Ativos</CardTitle>
              <Briefcase className="h-4 w-4 text-[#091f1a]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-[#091f1a]/65 mt-1">+1 em relação ao mês anterior</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#091f1a]/65">Ações Pendentes</CardTitle>
              <AlertCircle className="h-4 w-4 text-[#f5af00]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-[#091f1a]/65 mt-1">Requer sua assinatura</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#091f1a]/65">Horas Totais</CardTitle>
              <Clock className="h-4 w-4 text-[#091f1a]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.5</div>
              <p className="text-xs text-[#091f1a]/65 mt-1">Lançadas neste mês</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Appointments */}
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Próximos Agendamentos</CardTitle>
              <CardDescription>Consultas e reuniões já confirmadas.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {appointments.map((apt) => (
                  <div key={apt.id} className="flex items-center justify-between p-4 bg-[#ffffff] rounded-lg border border-[#091f1a]/15">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 bg-[#f5af00]/20 rounded-full flex items-center justify-center text-[#091f1a]">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium text-[#091f1a]">{apt.title}</div>
                        <div className="text-sm text-[#091f1a]/65">{apt.date} • {apt.time}</div>
                      </div>
                    </div>
                    <Badge variant={apt.status === "Confirmado" ? "default" : "secondary"}>
                      {apt.status}
                    </Badge>
                  </div>
                ))}
                <Link to="/schedule">
                  <Button variant="outline" className="w-full mt-2">Novo Agendamento</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Recent Documents */}
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Documentos Recentes</CardTitle>
              <CardDescription>Arquivos compartilhados com sua equipe jurídica.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {documents.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-4 bg-[#ffffff] rounded-lg border border-[#091f1a]/15">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 bg-[#091f1a]/12 rounded-lg flex items-center justify-center text-[#091f1a]">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium text-[#091f1a]">{doc.name}</div>
                        <div className="text-sm text-[#091f1a]/65">{doc.date} • {doc.size}</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4 text-[#091f1a]" />
                    </Button>
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-2">Ver Todos os Documentos</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
