import React from 'react';
import { Star, MapPin, Clock, Award, TrendingUp, Users, Code, Zap } from 'lucide-react';

export const ProgrammerClassification: React.FC = () => {
  const classifications = [
    {
      level: "Iniciante",
      icon: <Code className="w-8 h-8" />,
      description: "Programadores em início de carreira com conhecimentos básicos",
      skills: ["HTML/CSS", "JavaScript Básico", "Python Básico", "Git Básico"],
      experience: "0-1 ano",
      salary: "R$ 2.500 - R$ 4.000",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      projects: "Projetos pessoais e estudos",
      certification: "Certificação Básica Star Piece"
    },
    {
      level: "Pleno",
      icon: <TrendingUp className="w-8 h-8" />,
      description: "Desenvolvedores com experiência sólida e autonomia técnica",
      skills: ["Frameworks Avançados", "APIs REST", "Banco de Dados", "DevOps Básico"],
      experience: "2-5 anos",
      salary: "R$ 5.000 - R$ 8.500",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      projects: "Projetos comerciais e liderança técnica",
      certification: "Certificação Intermediária Star Piece"
    },
    {
      level: "Alto Nível",
      icon: <Award className="w-8 h-8" />,
      description: "Especialistas com domínio técnico avançado e liderança",
      skills: ["Arquitetura de Software", "Cloud Computing", "Machine Learning", "Gestão de Equipes"],
      experience: "5+ anos",
      salary: "R$ 9.000 - R$ 15.000+",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      projects: "Arquitetura de sistemas complexos",
      certification: "Certificação Avançada Star Piece"
    }
  ];

  const locations = [
    {
      city: "Cuiabá",
      state: "MT",
      demand: "Alta",
      companies: "50+ empresas",
      growth: "+25%",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      city: "Várzea Grande",
      state: "MT",
      demand: "Média",
      companies: "30+ empresas",
      growth: "+18%",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      city: "Rondonópolis",
      state: "MT",
      demand: "Crescente",
      companies: "15+ empresas",
      growth: "+30%",
      icon: <MapPin className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: "Certificação Reconhecida",
      description: "Certificados validados por empresas parceiras",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Acompanhamento Contínuo",
      description: "Mentoria e suporte durante toda a jornada",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Conexão com Empresas",
      description: "Rede de contatos com recrutadores locais",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <section id="classificacao" className="py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-green-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Classificação de <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Programadores</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Sistema de classificação profissional que aumenta a empregabilidade e conecta talentos 
            com oportunidades no mercado de tecnologia de Mato Grosso.
          </p>
        </div>

        {/* Classifications Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {classifications.map((classification, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${classification.bgGradient} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:scale-105 relative overflow-hidden`}
            >
              {/* Hover Effect Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${classification.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Level Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${classification.gradient} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {classification.icon}
                  </div>
                  <div className="text-right">
                    <div className={`text-sm px-3 py-1 rounded-full bg-gradient-to-r ${classification.gradient} text-white font-medium`}>
                      {classification.experience}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {classification.level}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {classification.description}
                </p>

                {/* Salary Range */}
                <div className="bg-white/70 p-4 rounded-xl mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Faixa Salarial (MT)</span>
                    <span className={`text-lg font-bold bg-gradient-to-r ${classification.gradient} bg-clip-text text-transparent`}>
                      {classification.salary}
                    </span>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Competências Principais:</h4>
                  <div className="space-y-2">
                    {classification.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 bg-gradient-to-r ${classification.gradient} rounded-full`}></div>
                        <span className="text-gray-700 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Info */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Projetos:</span>
                    <span className="font-medium text-gray-900">{classification.projects}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Certificação:</span>
                    <span className="font-medium text-gray-900">{classification.certification}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Market Information */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Locations */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Mercado <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Regional</span>
            </h3>
            
            <div className="space-y-4">
              {locations.map((location, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center text-white">
                        {location.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{location.city}</h4>
                        <p className="text-gray-600 text-sm">{location.state}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="grid grid-cols-1 gap-2 text-sm">
                        <div>
                          <span className="text-gray-600">Demanda: </span>
                          <span className="font-semibold text-green-600">{location.demand}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Empresas: </span>
                          <span className="font-semibold text-blue-600">{location.companies}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Crescimento: </span>
                          <span className="font-semibold text-purple-600">{location.growth}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Nossos <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Benefícios</span>
            </h3>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Impacto no Mercado de TI em MT</h3>
            <p className="text-xl opacity-90">Dados do mercado de tecnologia em Mato Grosso</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95+</div>
              <div className="text-lg opacity-90">Empresas Parceiras</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Profissionais Certificados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-lg opacity-90">Taxa de Empregabilidade</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">R$ 6.2k</div>
              <div className="text-lg opacity-90">Salário Médio</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Pronto para Avançar sua Carreira?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Junte-se ao nosso programa de classificação e acelere seu crescimento profissional 
            no mercado de tecnologia de Mato Grosso.
          </p>
          <button 
            onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden group"
          >
            <span className="relative z-10">Iniciar Classificação</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
};