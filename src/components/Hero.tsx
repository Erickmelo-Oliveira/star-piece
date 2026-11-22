import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Zap, Target, Star, Code, Palette, Brain, Shield, Users } from 'lucide-react';

export const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
          }}
        ></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-bounce"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 animate-float">
          <Brain className="w-8 h-8 text-blue-400/60" />
        </div>
        <div className="absolute top-40 right-32 animate-float-delayed">
          <Shield className="w-6 h-6 text-purple-400/60" />
        </div>
        <div className="absolute bottom-32 left-32 animate-float">
          <Users className="w-7 h-7 text-pink-400/60" />
        </div>
        <div className="absolute bottom-20 right-20 animate-float-delayed">
          <Target className="w-6 h-6 text-green-400/60" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <div className="relative inline-block">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-all duration-500 shadow-2xl">
              <Star className="w-16 h-16 text-white animate-pulse" fill="currentColor" />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            STAR PIECE
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-gray-300 mb-8 animate-fade-in-up animation-delay-200">
          Inovação Tecnológica para Mato Grosso
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
          Trazendo inovações tecnológicas para Cuiabá e todo o estado de Mato Grosso, com foco em 
          <span className="text-blue-400 font-semibold"> Inteligência Artificial</span>, 
          <span className="text-purple-400 font-semibold"> Capacitação em TI</span> e 
          <span className="text-pink-400 font-semibold"> Tecnologias de Acessibilidade</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up animation-delay-600">
          <button
            onClick={scrollToContact}
            className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center space-x-3">
              <span>Começar Projeto</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
          
          <button
            onClick={scrollToServices}
            className="group border-2 border-gray-400 text-gray-300 px-10 py-5 rounded-full text-lg font-semibold hover:border-purple-400 hover:text-purple-400 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <span className="flex items-center space-x-3">
              <span>Nossas Soluções</span>
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in-up animation-delay-800">
          <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">E.L.L.E.N. AI</h3>
            <p className="text-gray-400 leading-relaxed">Inteligência artificial para manipulação de hardware com visualização 3D e capacitação em programação</p>
          </div>

          <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Robôs de Segurança</h3>
            <p className="text-gray-400 leading-relaxed">Desenvolvimento de robôs para atendimento, sinalização e monitoramento em estabelecimentos comerciais</p>
          </div>

          <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Acessibilidade</h3>
            <p className="text-gray-400 leading-relaxed">Próteses biônicas, óculos inteligentes e soluções tecnológicas para pessoas com deficiência</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};