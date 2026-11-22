import React from 'react';
import { Code, Users, Award, TrendingUp, BookOpen, Target, Zap, CheckCircle, ArrowRight, Laptop, Trophy, Star } from 'lucide-react';

export const StarDevs: React.FC = () => {
  const programs = [
    {
      name: "Capacitação em Programação",
      description: "Cursos completos em linguagens de programação com metodologia prática e orientação por IA",
      languages: ["Python", "Java", "JavaScript", "React", "Node.js", "SQL"],
      features: ["Aulas práticas", "Projetos reais", "Mentoria IA", "Certificação"],
      duration: "3-6 meses",
      level: "Iniciante ao Avançado",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      icon: <Code className="w-8 h-8" />
    },
    {
      name: "Sistema de Classificação",
      description: "Avaliação e classificação de programadores por níveis de competência para aumentar empregabilidade",
      levels: ["Estagiário", "Iniciante", "Pleno", "Alto Nível"],
      features: ["Avaliação técnica", "Certificação oficial", "Portfolio digital", "Conexão com empresas"],
      duration: "Avaliação contínua",
      level: "Todos os níveis",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      icon: <Award className="w-8 h-8" />
    }
  ];

  const classifications = [
    {
      level: "Estagiário",
      description: "Estudantes em formação com conhecimentos básicos",
      skills: ["HTML/CSS básico", "Lógica de programação", "Git básico", "Conceitos fundamentais"],
      salary: "R$ 800 - R$ 1.500",
      experience: "0-6 meses",
      projects: "Projetos acadêmicos",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      level: "Iniciante",
      description: "Programadores em início de carreira com conhecimentos básicos",
      skills: ["JavaScript", "Python básico", "Frameworks básicos", "APIs simples"],
      salary: "R$ 2.500 - R$ 4.000",
      experience: "6 meses - 1 ano",
      projects: "Projetos pessoais",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      level: "Pleno",
      description: "Desenvolvedores com experiência sólida e autonomia técnica",
      skills: ["Frameworks avançados", "Banco de dados", "DevOps básico", "Arquitetura"],
      salary: "R$ 5.000 - R$ 8.500",
      experience: "2-5 anos",
      projects: "Projetos comerciais",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      level: "Alto Nível",
      description: "Especialistas com domínio técnico avançado e liderança",
      skills: ["Arquitetura de software", "Cloud computing", "Machine learning", "Gestão"],
      salary: "R$ 9.000 - R$ 15.000+",
      experience: "5+ anos",
      projects: "Sistemas complexos",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const benefits = [
    {
      title: "Metodologia com IA",
      description: "E.L.L.E.N A.I auxilia no aprendizado personalizado",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Certificação Reconhecida",
      description: "Certificados validados por empresas parceiras",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Conexão com Mercado",
      description: "Rede de contatos com recrutadores locais",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Acompanhamento Contínuo",
      description: "Mentoria e suporte durante toda a jornada",
      icon: <Target className="w-6 h-6" />
    }
  ];

  const marketData = [
    {
      metric: "95+",
      label: "Empresas Parceiras",
      description: "em Mato Grosso"
    },
    {
      metric: "500+",
      label: "Profissionais Certificados",
      description: "desde 2023"
    },
    {
      metric: "85%",
      label: "Taxa de Empregabilidade",
      description: "dos formados"
    },
    {
      metric: "R$ 6.2k",
      label: "Salário Médio",
      description: "dos certificados"
    }
  ];

  const curriculum = [
    {
      module: "Fundamentos",
      topics: ["Lógica de programação", "Estruturas de dados", "Algoritmos", "Git/GitHub"],
      duration: "4 semanas"
    },
    {
      module: "Frontend",
      topics: ["HTML5/CSS3", "JavaScript ES6+", "React.js", "Responsive design"],
      duration: "6 semanas"
    },
    {
      module: "Backend",
      topics: ["Node.js", "APIs REST", "Banco de dados", "Autenticação"],
      duration: "6 semanas"
    },
    {
      module: "Projetos",
      topics: ["Projeto individual", "Projeto em equipe", "Deploy", "Portfolio"],
      duration: "4 semanas"
    }
  ];

  const companies = [
    "TechCorp MT", "Inovação Digital", "SoftwareMT", "DevHouse Cuiabá", 
    "CodeLab MT", "TechStart", "DigitalMT", "InnovaTech"
  ];

  return (
    <section id="star-devs" className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 rounded-3xl flex items-center justify-center">
              <Laptop className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Star DEVs</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Capacitação e classificação de programadores em Mato Grosso. Formamos talentos e conectamos 
            com oportunidades no mercado de tecnologia local.
          </p>
        </div>

        {/* Programs */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${program.bgGradient} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:scale-105 relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-20 h-20 bg-gradient-to-br ${program.gradient} rounded-3xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {program.icon}
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{program.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">{program.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/70 p-4 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-2">Duração:</h4>
                    <p className="text-gray-700 text-sm">{program.duration}</p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-2">Nível:</h4>
                    <p className="text-gray-700 text-sm">{program.level}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {index === 0 ? "Linguagens:" : "Níveis:"}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(index === 0 ? program.languages : program.levels)?.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className={`px-3 py-1 bg-gradient-to-r ${program.gradient} text-white text-xs font-medium rounded-full`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Características:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Classification System */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Sistema de <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Classificação</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {classifications.map((classification, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${classification.gradient}`}></div>
                
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{classification.level}</h4>
                  <p className="text-gray-600 text-sm mb-3">{classification.description}</p>
                </div>

                <div className="space-y-3 mb-4">
                  <div>
                    <span className="text-xs font-semibold text-gray-500 uppercase">Salário (MT)</span>
                    <p className={`font-bold bg-gradient-to-r ${classification.gradient} bg-clip-text text-transparent`}>
                      {classification.salary}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-500 uppercase">Experiência</span>
                    <p className="text-gray-700 text-sm">{classification.experience}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-500 uppercase">Projetos</span>
                    <p className="text-gray-700 text-sm">{classification.projects}</p>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-semibold text-gray-500 uppercase mb-2 block">Competências</span>
                  <div className="space-y-1">
                    {classification.skills.slice(0, 3).map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 bg-gradient-to-r ${classification.gradient} rounded-full`}></div>
                        <span className="text-gray-700 text-xs">{skill}</span>
                      </div>
                    ))}
                    {classification.skills.length > 3 && (
                      <div className="text-xs text-gray-500">+{classification.skills.length - 3} mais</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Nossos <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Diferenciais</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Market Data */}
        <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white mb-20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Impacto no Mercado de TI em MT</h3>
            <p className="text-xl opacity-90">Resultados e estatísticas do programa</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {marketData.map((data, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{data.metric}</div>
                <div className="text-lg font-semibold opacity-90 mb-1">{data.label}</div>
                <div className="text-sm opacity-75">{data.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Currículo <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Completo</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculum.map((module, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-green-50 p-6 rounded-2xl relative">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  {index + 1}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">{module.module}</h4>
                <div className="space-y-2 mb-4">
                  {module.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <span className="text-xs font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                    {module.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Companies */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Empresas <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Parceiras</span>
          </h3>
          <p className="text-center text-gray-600 mb-8">
            Conectamos nossos talentos com as principais empresas de tecnologia de Mato Grosso
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {companies.map((company, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <span className="text-gray-700 font-medium text-sm">{company}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Acelere sua Carreira em Tecnologia
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Junte-se ao Star DEVs e faça parte da nova geração de programadores 
            qualificados de Mato Grosso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Inscrever-se Agora</span>
                <ArrowRight className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            <button 
              className="border-2 border-gray-400 text-gray-700 px-10 py-4 rounded-full text-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-all duration-300"
            >
              Ver Currículo Completo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};