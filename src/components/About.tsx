import React from 'react';
import { Users, Award, Clock, Heart, MapPin, Target, Lightbulb, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { icon: <Target className="w-8 h-8" />, number: "2", label: "Pilares Principais", description: "Tecnologia & Acessibilidade" },
    { icon: <MapPin className="w-8 h-8" />, number: "MT", label: "Foco Regional", description: "Mato Grosso" },
    { icon: <Lightbulb className="w-8 h-8" />, number: "100%", label: "Inovação", description: "Soluções Pioneiras" },
    { icon: <Cpu className="w-8 h-8" />, number: "E.L.L.E.N.", label: "IA Própria", description: "Tecnologia Exclusiva" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Star Piece</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A Star Piece tem como missão trazer inovações tecnológicas para a cidade de Cuiabá e 
              todo o estado de Mato Grosso, com foco em dois pilares principais: 
              <strong> Tecnologia e Capacitação em TI</strong> e <strong>Inovações Tecnológicas para Acessibilidade e Segurança</strong>.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nosso objetivo é fomentar um ambiente de inovação tecnológica no estado de Mato Grosso, 
              criando soluções que possam atender tanto as necessidades da população local quanto 
              ajudar a impulsionar a empregabilidade e qualificação de profissionais da área de TI.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">E.L.L.E.N. AI</h4>
                  <p className="text-gray-600">Inteligência artificial para manipulação de hardware com visualização 3D</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Capacitação de Programadores</h4>
                  <p className="text-gray-600">Plataforma de ensino em Python, Java, JavaScript e classificação por níveis</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Tecnologias de Acessibilidade</h4>
                  <p className="text-gray-600">Próteses biônicas, óculos inteligentes e robôs de atendimento</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl text-center border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Diferenciais Competitivos */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Nossos <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Diferenciais</span>
          </h3>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-6">
              A Star Piece se destaca por ser uma empresa <strong>100% Mato-grossense</strong>, com uma proposta única de 
              integrar tecnologia avançada em áreas essenciais como acessibilidade, segurança, atendimento ao público 
              e qualificação profissional.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Nossa proposta de integrar IA para qualificação de programadores e nossa abordagem em acessibilidade 
              tecnológica são <strong>pioneiras na região</strong>, posicionando a Star Piece como uma empresa com 
              alto potencial de impacto social e econômico.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};