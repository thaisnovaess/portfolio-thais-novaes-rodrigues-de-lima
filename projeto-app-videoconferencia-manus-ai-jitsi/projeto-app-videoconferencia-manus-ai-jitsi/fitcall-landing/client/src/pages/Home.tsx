import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Video, Zap, Clock, Target, Users } from "lucide-react";
import { useState } from "react";

/**
 * FitCall Landing Page - Modern Fitness Minimalism
 * Design: Dark theme (bg: #0A0E14) with orange primary (#FF6B2C) and green accent (#1EE682)
 * Typography: Poppins Bold for headings, Inter for body
 * Layout: Asymmetric with diagonal elements and dynamic gradients
 */

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
              <span className="font-poppins font-bold text-primary-foreground text-lg">F</span>
            </div>
            <span className="font-poppins font-bold text-xl hidden sm:inline">FitCall</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex">Recursos</Button>
            <Button variant="ghost" className="hidden md:inline-flex">Sobre</Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Baixar App
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Diagonal Background */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Diagonal background element */}
        <div 
          className="absolute inset-0 -z-10"
          style={{
            background: "linear-gradient(135deg, rgba(255, 107, 44, 0.1) 0%, rgba(30, 230, 130, 0.05) 100%)",
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)"
          }}
        />
        
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-poppins font-bold leading-tight">
                Treinos ao Vivo,
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Sem Limites</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Conecte-se com personal trainers em tempo real. Videochamadas integradas, cronômetro, contador de repetições e muito mais.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground group"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Começar Agora
                <ArrowRight className={`ml-2 w-5 h-5 transition-transform ${isHovering ? "translate-x-1" : ""}`} />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-border hover:bg-card"
              >
                Ver Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-poppins font-bold text-primary">10K+</div>
                <p className="text-sm text-muted-foreground">Usuários Ativos</p>
              </div>
              <div>
                <div className="text-3xl font-poppins font-bold text-accent">4.8★</div>
                <p className="text-sm text-muted-foreground">Avaliação</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 lg:h-full min-h-96">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663627999702/ipzdeuSzufaHJ7NckcKsQp/fitcall-app-mockup-DzAkNTcLv3AsDyNWZT9kHe.webp"
              alt="FitCall App Interface"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            {/* Accent bar */}
            <div className="absolute -bottom-2 -left-2 w-32 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold">
              Tudo que Você Precisa
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ferramentas profissionais integradas para uma experiência de treino completa
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="group p-6 rounded-xl border border-border bg-background hover:bg-card/80 transition-all duration-300 hover:border-primary/50">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-primary/20 transition-colors">
                <Video className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-poppins font-bold text-lg mb-2">Videochamada HD</h3>
              <p className="text-muted-foreground">Integração Jitsi Meet para chamadas claras e estáveis em tempo real</p>
            </div>

            {/* Feature 2 */}
            <div className="group p-6 rounded-xl border border-border bg-background hover:bg-card/80 transition-all duration-300 hover:border-accent/50">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-4 group-hover:from-accent/30 group-hover:to-accent/20 transition-colors">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-poppins font-bold text-lg mb-2">Cronômetro</h3>
              <p className="text-muted-foreground">Acompanhe a duração total do seu treino com precisão</p>
            </div>

            {/* Feature 3 */}
            <div className="group p-6 rounded-xl border border-border bg-background hover:bg-card/80 transition-all duration-300 hover:border-primary/50">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-primary/20 transition-colors">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-poppins font-bold text-lg mb-2">Contador de Reps</h3>
              <p className="text-muted-foreground">Registre repetições e acompanhe seu progresso em tempo real</p>
            </div>

            {/* Feature 4 */}
            <div className="group p-6 rounded-xl border border-border bg-background hover:bg-card/80 transition-all duration-300 hover:border-accent/50">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-4 group-hover:from-accent/30 group-hover:to-accent/20 transition-colors">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-poppins font-bold text-lg mb-2">Timer de Descanso</h3>
              <p className="text-muted-foreground">Intervalos de 30 segundos entre séries para recuperação</p>
            </div>

            {/* Feature 5 */}
            <div className="group p-6 rounded-xl border border-border bg-background hover:bg-card/80 transition-all duration-300 hover:border-primary/50">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-primary/20 transition-colors">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-poppins font-bold text-lg mb-2">Interface Moderna</h3>
              <p className="text-muted-foreground">Design responsivo e intuitivo para qualquer dispositivo</p>
            </div>

            {/* Feature 6 */}
            <div className="group p-6 rounded-xl border border-border bg-background hover:bg-card/80 transition-all duration-300 hover:border-accent/50">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-4 group-hover:from-accent/30 group-hover:to-accent/20 transition-colors">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-poppins font-bold text-lg mb-2">Conexão Fácil</h3>
              <p className="text-muted-foreground">Crie salas e compartilhe códigos para conectar com alunos</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-center mb-16">
            Como Funciona
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -top-12 left-0 w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                <span className="font-poppins font-bold text-primary">1</span>
              </div>
              <div className="pt-4 space-y-3">
                <h3 className="font-poppins font-bold text-lg">Criar Sala</h3>
                <p className="text-muted-foreground">O treinador define um nome para a sala de treino</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -top-12 left-0 w-10 h-10 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                <span className="font-poppins font-bold text-accent">2</span>
              </div>
              <div className="pt-4 space-y-3">
                <h3 className="font-poppins font-bold text-lg">Compartilhar Código</h3>
                <p className="text-muted-foreground">Envie o código para o aluno se conectar</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -top-12 left-0 w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                <span className="font-poppins font-bold text-primary">3</span>
              </div>
              <div className="pt-4 space-y-3">
                <h3 className="font-poppins font-bold text-lg">Treinar ao Vivo</h3>
                <p className="text-muted-foreground">Videochamada com todas as ferramentas integradas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Abstract Features Visual */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-poppins font-bold mb-6">
                Tecnologia de Ponta
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                FitCall utiliza o SDK do Jitsi Meet para garantir videochamadas estáveis e de alta qualidade, sem necessidade de servidores próprios.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Criptografia ponta a ponta</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Suporte a múltiplos participantes</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Qualidade adaptativa</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Sem latência perceptível</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663627999702/ipzdeuSzufaHJ7NckcKsQp/fitcall-features-abstract-en2QY8TFHp9jg3BS2bA795.webp"
                alt="FitCall Features"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 -z-10"
          style={{
            background: "linear-gradient(135deg, rgba(255, 107, 44, 0.15) 0%, rgba(30, 230, 130, 0.1) 100%)",
            clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 85%)"
          }}
        />
        
        <div className="container text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold">
            Pronto para Começar?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Baixe o FitCall agora e comece seus treinos ao vivo com videochamada integrada
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            >
              Baixar no Google Play
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-border hover:bg-card px-8"
            >
              Ver no GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-poppins font-bold mb-4">FitCall</h3>
              <p className="text-sm text-muted-foreground">Treinos ao vivo com videochamada integrada</p>
            </div>
            <div>
              <h4 className="font-poppins font-bold text-sm mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Recursos</a></li>
                <li><a href="#" className="hover:text-foreground transition">Preços</a></li>
                <li><a href="#" className="hover:text-foreground transition">Download</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-poppins font-bold text-sm mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Sobre</a></li>
                <li><a href="#" className="hover:text-foreground transition">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-poppins font-bold text-sm mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Privacidade</a></li>
                <li><a href="#" className="hover:text-foreground transition">Termos</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2026 FitCall. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground transition">Twitter</a>
              <a href="#" className="hover:text-foreground transition">Instagram</a>
              <a href="#" className="hover:text-foreground transition">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
