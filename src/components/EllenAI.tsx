import React from 'react';
import { Brain, Cpu, Eye, Zap, Monitor, Wrench, CheckCircle, ArrowRight, Layers, Code, Database, Cloud } from 'lucide-react';

export const EllenAI: React.FC = () => {
  const capabilities = [
    {
      name: "Visualização 3D",
      description: "Interface tridimensional para visualização detalhada de componentes de hardware",
      features: ["Modelos 3D interativos", "Zoom e rotação", "Detalhamento de peças", "Animações explicativas"],
      icon: <Eye className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      name: "Diagnóstico Inteligente",
      description: "Análise automática de problemas e sugestões de soluções para hardware",
      features: ["Detecção de falhas", "Análise de performance", "Relatórios detalhados", "Histórico de problemas"],
      icon: <Cpu className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      name: "Assistente de Ensino",
      description: "Auxílio no aprendizado de programação com explicações personalizadas",
      features: ["Explicação de código", "Sugestões de melhoria", "Exercícios adaptativos", "Feedback em tempo real"],
      icon: <Brain className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      name: "Manipulação de Hardware",
      description: "Orientação passo a passo para montagem e manutenção de equipamentos",
      features: ["Guias interativos", "Sequência de montagem", "Alertas de segurança", "Verificação de compatibilidade"],
      icon: <Wrench className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    }
  ];

  const technicalSpecs = [
    {
      category: "Inteligência Artificial",
      specs: [
        "Machine Learning avançado",
        "Processamento de linguagem natural",
        "Visão computacional",
        "Redes neurais profundas",
        "Aprendizado contínuo",
        "Análise preditiva"
      ],
      icon: <Brain className="w-6 h-6" />
    },
    {
      category: "Visualização 3D",
      specs: [
        "Engine gráfico WebGL",
        "Renderização em tempo real",
        "Modelos CAD integrados",
        "Realidade aumentada",
        "Interface responsiva",
        "Exportação de modelos"
      ],
      icon: <Monitor className="w-6 h-6" />
    },
    {
      category: "Base de Conhecimento",
      specs: [
        "Database de componentes",
        "Manuais técnicos digitais",
        "Histórico de problemas",
        "Soluções validadas",
        "Atualizações automáticas",
        "API de integração"
      ],
      icon: <Database className="w-6 h-6" />
    }
  ];

  const useCases = [
    {
      title: "Educação Técnica",
      description: "Ensino de manutenção de computadores com visualização 3D",
      benefits: ["Aprendizado visual", "Prática segura", "Redução de custos", "Maior retenção"],
      image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Suporte Técnico",
      description: "Diagnóstico remoto e orientação para resolução de problemas",
      benefits: ["Diagnóstico rápido", "Suporte remoto", "Redução de chamados", "Maior eficiência"],
      image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Treinamento Corporativo",
      description: "Capacitação de equipes técnicas com simulações realistas",
      benefits: ["Treinamento padronizado", "Simulações seguras", "Avaliação objetiva", "Certificação"],
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Desenvolvimento de Software",
      description: "Assistência no aprendizado de programação com IA",
      benefits: ["Mentoria personalizada", "Feedback instantâneo", "Progressão adaptativa", "Projetos práticos"],
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const features = [
    {
      title: "Interface Intuitiva",
      description: "Design focado na experiência do usuário com navegação simples",
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "Multiplataforma",
      description: "Funciona em desktop, tablet e dispositivos móveis",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      title: "Integração API",
      description: "Conecta com sistemas existentes e bases de dados",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Cloud Computing",
      description: "Processamento na nuvem para máxima performance",
      icon: <Cloud className="w-6 h-6" />
    }
  ];

  const developmentPhases = [
    {
      phase: "Pesquisa e Desenvolvimento",
      description: "Análise de necessidades e desenvolvimento do core da IA",
      status: "Concluído",
      progress: 100
    },
    {
      phase: "Prototipagem",
      description: "Desenvolvimento da interface 3D e integração com IA",
      status: "Em andamento",
      progress: 75
    },
    {
      phase: "Testes Beta",
      description: "Validação com usuários reais e refinamento",
      status: "Próximo",
      progress: 25
    },
    {
      phase: "Lançamento",
      description: "Disponibilização para o mercado",
      status: "Planejado",
      progress: 0
    }
  ];

  return (
    <section id="ellen-ai" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 rounded-3xl flex items-center justify-center">
              <Brain className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">E.L.L.E.N A.I</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Inteligência Artificial avançada para manipulação de hardware com visualização 3D. 
            Revolucionando o ensino e suporte técnico em computação.
          </p>
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-2xl max-w-2xl mx-auto">
            <p className="text-lg font-semibold text-gray-800">
              <strong>E.L.L.E.N</strong> - Enhanced Learning and Logic Electronic Navigator
            </p>
            <p className="text-gray-600 mt-2">
              Navegador Eletrônico de Aprendizado e Lógica Aprimorada
            </p>
          </div>
        </div>

        {/* Capabilities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${capability.bgGradient} p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:scale-105 relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${capability.gradient} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {capability.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{capability.description}</p>
                
                <div className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${capability.gradient} rounded-full`}></div>
                      <span className="text-gray-700 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Especificações <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Técnicas</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-indigo-50 p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white mr-3">
                    {spec.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{spec.category}</h4>
                </div>
                <ul className="space-y-2">
                  {spec.specs.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Casos de <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Aplicação</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-lg font-bold text-white mb-1">{useCase.title}</h4>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm">{useCase.description}</p>
                  <div className="space-y-1">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                        <span className="text-gray-700 text-xs">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white mb-20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Características Principais</h3>
            <p className="text-xl opacity-90">Tecnologia de ponta para máxima eficiência</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-bold mb-2">{feature.title}</h4>
                <p className="text-sm opacity-90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Development Progress */}
        <div className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Progresso de <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Desenvolvimento</span>
          </h3>
          
          <div className="space-y-6">
            {developmentPhases.map((phase, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{phase.phase}</h4>
                    <p className="text-gray-600">{phase.description}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      phase.status === 'Concluído' ? 'bg-green-100 text-green-800' :
                      phase.status === 'Em andamento' ? 'bg-blue-100 text-blue-800' :
                      phase.status === 'Próximo' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {phase.status}
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${phase.progress}%` }}
                  ></div>
                </div>
                <div className="text-right mt-2">
                  <span className="text-sm font-semibold text-gray-700">{phase.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            O Futuro da Educação Tecnológica
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Seja um dos primeiros a experimentar E.L.L.E.N A.I e revolucione 
            a forma como você ensina e aprende tecnologia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Solicitar Acesso Beta</span>
                <ArrowRight className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            <button 
              className="border-2 border-gray-400 text-gray-700 px-10 py-4 rounded-full text-lg font-semibold hover:border-purple-400 hover:text-purple-600 transition-all duration-300"
            >
              Ver Demonstração
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};