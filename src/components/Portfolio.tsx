import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "E-commerce Moderno",
      description: "Plataforma completa de vendas online com painel administrativo e integração de pagamentos.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: "Web Development"
    },
    {
      title: "App de Delivery",
      description: "Aplicativo mobile para delivery com rastreamento em tempo real e sistema de avaliações.",
      image: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React Native", "Firebase", "Maps API", "Push Notifications"],
      category: "Mobile App"
    },
    {
      title: "Dashboard Analytics",
      description: "Sistema de análise de dados com visualizações interativas e relatórios personalizados.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Vue.js", "D3.js", "Python", "AWS"],
      category: "Data Analytics"
    },
    {
      title: "Sistema ERP",
      description: "Solução empresarial completa para gestão de recursos e processos internos.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Angular", "Spring Boot", "MySQL", "Docker"],
      category: "Enterprise"
    },
    {
      title: "Plataforma de Cursos",
      description: "Sistema de ensino online com videoaulas, exercícios e certificações.",
      image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Next.js", "Prisma", "Video Streaming", "Payment"],
      category: "Education"
    },
    {
      title: "App Fitness",
      description: "Aplicativo de treinos personalizados com acompanhamento de progresso.",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Flutter", "Health Kit", "AI/ML", "Cloud Functions"],
      category: "Health & Fitness"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nosso <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfólio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos e as soluções inovadoras que criamos para nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <ExternalLink className="w-4 h-4 text-gray-700" />
                  </button>
                  <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Github className="w-4 h-4 text-gray-700" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Ver Mais Projetos
          </button>
        </div>
      </div>
    </section>
  );
};