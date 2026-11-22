import React from 'react';
import { Shield, Users, Eye, Zap, MapPin, Clock, CheckCircle, ArrowRight, Bot, Camera, Wifi, Battery } from 'lucide-react';

export const StarRobots: React.FC = () => {
  const robotTypes = [
    {
      name: "Robô de Atendimento",
      description: "Robôs especializados em atendimento ao cliente com interface amigável e comunicação natural",
      features: ["Reconhecimento de voz", "Tela touchscreen", "Múltiplos idiomas", "Integração com sistemas"],
      applications: ["Recepção", "Informações", "Direcionamento", "Cadastros"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      icon: <Users className="w-8 h-8" />
    },
    {
      name: "Robô de Segurança",
      description: "Sistemas robóticos para monitoramento e segurança patrimonial com tecnologia avançada",
      features: ["Câmeras 360°", "Detecção de movimento", "Alertas em tempo real", "Patrulhamento autônomo"],
      applications: ["Vigilância", "Rondas", "Detecção de intrusos", "Monitoramento"],
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-50 to-orange-50",
      icon: <Shield className="w-8 h-8" />
    },
    {
      name: "Robô de Sinalização",
      description: "Robôs móveis para sinalização dinâmica e orientação em ambientes comerciais",
      features: ["Display LED", "Navegação autônoma", "Programação flexível", "Sensores de proximidade"],
      applications: ["Orientação", "Promoções", "Avisos", "Direcionamento"],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      icon: <Eye className="w-8 h-8" />
    }
  ];

  const specifications = [
    {
      category: "Hardware",
      items: [
        "Processador ARM Cortex-A78",
        "8GB RAM DDR4",
        "256GB SSD",
        "Bateria 12h autonomia",
        "Sensores LiDAR",
        "Câmeras 4K"
      ]
    },
    {
      category: "Software",
      items: [
        "Sistema operacional Linux",
        "IA para reconhecimento",
        "Interface web admin",
        "APIs de integração",
        "Atualizações OTA",
        "Dashboard analytics"
      ]
    },
    {
      category: "Conectividade",
      items: [
        "Wi-Fi 6",
        "Bluetooth 5.0",
        "4G/5G opcional",
        "Ethernet",
        "USB-C",
        "HDMI"
      ]
    }
  ];

  const benefits = [
    {
      title: "Redução de Custos",
      description: "Diminuição de até 40% nos custos operacionais com atendimento e segurança",
      icon: <Zap className="w-6 h-6" />,
      percentage: "40%"
    },
    {
      title: "Disponibilidade 24/7",
      description: "Operação contínua sem pausas, feriados ou horários de descanso",
      icon: <Clock className="w-6 h-6" />,
      percentage: "24/7"
    },
    {
      title: "Precisão e Consistência",
      description: "Atendimento padronizado e informações sempre atualizadas",
      icon: <CheckCircle className="w-6 h-6" />,
      percentage: "99%"
    },
    {
      title: "Escalabilidade",
      description: "Fácil expansão para múltiplas unidades e localizações",
      icon: <MapPin className="w-6 h-6" />,
      percentage: "∞"
    }
  ];

  const useCases = [
    {
      sector: "Shopping Centers",
      description: "Atendimento ao cliente, direcionamento de lojas, informações sobre promoções",
      image: "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      sector: "Supermercados",
      description: "Localização de produtos, informações de preços, assistência ao cliente",
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      sector: "Hospitais",
      description: "Orientação de pacientes, informações sobre consultas, direcionamento",
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      sector: "Empresas",
      description: "Recepção de visitantes, controle de acesso, monitoramento de segurança",
      image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="star-robots" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-red-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 via-purple-600 to-red-600 rounded-3xl flex items-center justify-center">
              <Bot className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">Star Robots</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Robôs inteligentes para atendimento, segurança e sinalização em estabelecimentos comerciais. 
            Tecnologia de ponta para revolucionar a experiência do cliente.
          </p>
        </div>

        {/* Robot Types */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {robotTypes.map((robot, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${robot.bgGradient} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:scale-105 relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${robot.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${robot.gradient} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {robot.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{robot.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{robot.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Características:</h4>
                  <div className="space-y-2">
                    {robot.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 bg-gradient-to-r ${robot.gradient} rounded-full`}></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Aplicações:</h4>
                  <div className="flex flex-wrap gap-2">
                    {robot.applications.map((app, appIndex) => (
                      <span
                        key={appIndex}
                        className={`px-3 py-1 bg-gradient-to-r ${robot.gradient} text-white text-xs font-medium rounded-full`}
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Especificações <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Técnicas</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {specifications.map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  {index === 0 && <Zap className="w-6 h-6 mr-2 text-blue-600" />}
                  {index === 1 && <Bot className="w-6 h-6 mr-2 text-purple-600" />}
                  {index === 2 && <Wifi className="w-6 h-6 mr-2 text-green-600" />}
                  {spec.category}
                </h4>
                <ul className="space-y-2">
                  {spec.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Benefícios dos <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Star Robots</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                  {benefit.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{benefit.percentage}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Casos de <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Uso</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={useCase.image}
                    alt={useCase.sector}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-xl font-bold text-white mb-2">{useCase.sector}</h4>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Pronto para Revolucionar seu Negócio?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Descubra como os Star Robots podem transformar a experiência dos seus clientes 
            e otimizar suas operações.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Solicitar Demonstração</span>
              <ArrowRight className="w-5 h-5" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
};