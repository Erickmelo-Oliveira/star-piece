import React from 'react';
import { Brain, Users, Shield, Eye, Cpu, Code, ArrowRight, Zap, Target, Heart } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "E.L.L.E.N. AI",
      description: "Inteligência artificial desenvolvida para auxiliar na manipulação de peças de hardware de computadores, oferecendo visualização 3D e facilitando a manutenção de equipamentos.",
      features: ["Visualização 3D", "Manutenção de Hardware", "Interface Intuitiva", "Diagnóstico Automático"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      category: "Tecnologia e Capacitação"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Capacitação de Programadores",
      description: "Plataforma de ensino para promover a educação em linguagens de programação como Python, Java, JavaScript, com auxílio da nossa IA para entendimento das nomenclaturas.",
      features: ["Python", "Java", "JavaScript", "IA Assistente"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      category: "Tecnologia e Capacitação"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Classificação de Programadores",
      description: "Sistema que classifica programadores conforme seu nível de experiência (estagiário, iniciante, pleno e alto nível), aumentando a empregabilidade no mercado.",
      features: ["Avaliação de Competências", "Níveis de Experiência", "Certificação", "Empregabilidade"],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      category: "Tecnologia e Capacitação"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Robôs de Atendimento e Segurança",
      description: "Desenvolvimento de robôs voltados para atendimento ao público, sinalização e monitoramento em estabelecimentos comerciais como mercados, lojas e shoppings.",
      features: ["Atendimento ao Público", "Sinalização", "Monitoramento", "Segurança"],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      category: "Inovações para Acessibilidade"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Próteses Biônicas",
      description: "Desenvolvimento de próteses biônicas para recém-amputados, oferecendo maior mobilidade e integração com o corpo para melhor qualidade de vida.",
      features: ["Mobilidade Avançada", "Integração Corporal", "Tecnologia Biônica", "Reabilitação"],
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
      category: "Inovações para Acessibilidade"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Óculos Inteligentes",
      description: "Óculos inteligentes para deficientes visuais, proporcionando uma navegação mais segura e independente através de tecnologia assistiva avançada.",
      features: ["Navegação Assistida", "Reconhecimento de Objetos", "Áudio Direcional", "Independência"],
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50",
      category: "Inovações para Acessibilidade"
    }
  ];

  const categories = [
    {
      title: "Tecnologia e Capacitação em TI",
      icon: <Zap className="w-6 h-6" />,
      description: "Soluções para capacitação e qualificação de profissionais de TI"
    },
    {
      title: "Inovações para Acessibilidade e Segurança",
      icon: <Heart className="w-6 h-6" />,
      description: "Tecnologias que melhoram a qualidade de vida e segurança"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Nossas <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Soluções</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Oferecemos inovações tecnológicas focadas em dois pilares principais para transformar 
            Mato Grosso em um polo de inovação tecnológica.
          </p>

          {/* Categories */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {categories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${service.bgGradient} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:scale-105 relative overflow-hidden`}
            >
              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${service.gradient} text-white font-medium`}>
                  {service.category}
                </span>
              </div>

              {/* Hover Effect Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center mb-8 text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`group/btn flex items-center space-x-2 text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text font-semibold hover:scale-105 transition-all duration-300`}>
                  <span>Saiba Mais</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mercado Alvo */}
        <div className="mt-20 bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Nosso <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mercado Alvo</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Users className="w-6 h-6 mr-2 text-blue-600" />
                Profissionais da área de TI
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Programadores iniciantes buscando qualificação</li>
                <li>• Profissionais em busca de melhorar suas habilidades</li>
                <li>• Técnicos em manutenção de hardware</li>
                <li>• Estudantes de tecnologia</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-orange-50 p-6 rounded-2xl">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Heart className="w-6 h-6 mr-2 text-pink-600" />
                Pessoas com Deficiência
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Pessoas com deficiência visual</li>
                <li>• Recém-amputados</li>
                <li>• Pessoas com mobilidade reduzida</li>
                <li>• Estabelecimentos comerciais</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-12 py-5 rounded-full text-xl font-semibold hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden group"
          >
            <span className="relative z-10">Solicitar Informações</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
};