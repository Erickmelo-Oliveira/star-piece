import React from 'react';
import { Eye, Hand, Heart, Zap, Users, CheckCircle, ArrowRight, Accessibility, Brain, Smartphone } from 'lucide-react';

export const StarAccess: React.FC = () => {
  const technologies = [
    {
      name: "Próteses Biônicas",
      description: "Próteses avançadas com controle neural e feedback tátil para recém-amputados",
      features: ["Controle por impulsos neurais", "Feedback sensorial", "Múltiplos graus de liberdade", "Bateria de longa duração"],
      benefits: ["Maior mobilidade", "Integração natural", "Reabilitação acelerada", "Qualidade de vida"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      icon: <Hand className="w-8 h-8" />,
      targetAudience: "Recém-amputados e pessoas com deficiência motora"
    },
    {
      name: "Óculos Inteligentes",
      description: "Dispositivos de realidade aumentada para auxiliar pessoas com deficiência visual",
      features: ["Reconhecimento de objetos", "Navegação por áudio", "Leitura de textos", "Detecção de obstáculos"],
      benefits: ["Navegação independente", "Reconhecimento facial", "Leitura assistida", "Maior autonomia"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      icon: <Eye className="w-8 h-8" />,
      targetAudience: "Pessoas com deficiência visual e baixa visão"
    }
  ];

  const features = [
    {
      title: "Tecnologia Neural",
      description: "Interface cérebro-máquina para controle intuitivo das próteses",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "IA Avançada",
      description: "Algoritmos de machine learning para reconhecimento e adaptação",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Design Ergonômico",
      description: "Produtos desenvolvidos com foco no conforto e usabilidade",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Conectividade",
      description: "Integração com smartphones e dispositivos IoT",
      icon: <Smartphone className="w-6 h-6" />
    }
  ];

  const statistics = [
    {
      number: "45M",
      label: "Pessoas com Deficiência",
      description: "no Brasil segundo IBGE 2019"
    },
    {
      number: "6.5M",
      label: "Deficiência Visual",
      description: "pessoas no país"
    },
    {
      number: "13.3M",
      label: "Deficiência Motora",
      description: "pessoas no Brasil"
    },
    {
      number: "2.3%",
      label: "População MT",
      description: "com alguma deficiência"
    }
  ];

  const impactAreas = [
    {
      area: "Mobilidade",
      description: "Restauração de movimentos naturais e precisos",
      improvements: ["Preensão de objetos", "Movimentos finos", "Força controlada", "Coordenação motora"]
    },
    {
      area: "Independência",
      description: "Autonomia para atividades do dia a dia",
      improvements: ["Navegação segura", "Reconhecimento de ambientes", "Leitura autônoma", "Comunicação facilitada"]
    },
    {
      area: "Inclusão Social",
      description: "Participação ativa na sociedade",
      improvements: ["Acesso ao trabalho", "Vida social ativa", "Educação inclusiva", "Esportes adaptados"]
    },
    {
      area: "Qualidade de Vida",
      description: "Bem-estar físico e emocional",
      improvements: ["Autoestima elevada", "Redução da dependência", "Confiança pessoal", "Realização pessoal"]
    }
  ];

  const developmentProcess = [
    {
      phase: "Pesquisa",
      description: "Estudo das necessidades específicas dos usuários",
      duration: "3-6 meses"
    },
    {
      phase: "Prototipagem",
      description: "Desenvolvimento de protótipos funcionais",
      duration: "6-12 meses"
    },
    {
      phase: "Testes",
      description: "Validação com usuários reais em ambiente controlado",
      duration: "3-6 meses"
    },
    {
      phase: "Produção",
      description: "Fabricação e personalização para cada usuário",
      duration: "2-4 meses"
    }
  ];

  return (
    <section id="star-access" className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-3xl flex items-center justify-center">
              <Accessibility className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Star Access</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Tecnologias de acessibilidade que transformam vidas. Próteses biônicas e óculos inteligentes 
            para promover independência e inclusão social.
          </p>
        </div>

        {/* Technologies */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${tech.bgGradient} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:scale-105 relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-20 h-20 bg-gradient-to-br ${tech.gradient} rounded-3xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {tech.icon}
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{tech.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">{tech.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Características Técnicas:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {tech.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 bg-gradient-to-r ${tech.gradient} rounded-full`}></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefícios:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {tech.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/70 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Público-Alvo:</h4>
                  <p className="text-gray-700 text-sm">{tech.targetAudience}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Tecnologias <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Inovadoras</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white mb-20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Impacto Social no Brasil</h3>
            <p className="text-xl opacity-90">Dados sobre pessoas com deficiência no país</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-semibold opacity-90 mb-1">{stat.label}</div>
                <div className="text-sm opacity-75">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Areas */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Áreas de <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Impacto</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{area.area}</h4>
                <p className="text-gray-600 mb-4 text-sm">{area.description}</p>
                <div className="space-y-2">
                  {area.improvements.map((improvement, improvementIndex) => (
                    <div key={improvementIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                      <span className="text-gray-700 text-xs">{improvement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Process */}
        <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Processo de <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Desenvolvimento</span>
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {developmentProcess.map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    {index + 1}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{phase.phase}</h4>
                  <p className="text-gray-600 text-sm mb-3">{phase.description}</p>
                  <div className="text-xs text-purple-600 font-semibold">{phase.duration}</div>
                </div>
                {index < developmentProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Transforme Vidas com Tecnologia
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Junte-se a nós na missão de criar tecnologias que promovem acessibilidade 
            e inclusão social em Mato Grosso.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Saiba Mais</span>
              <ArrowRight className="w-5 h-5" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
};