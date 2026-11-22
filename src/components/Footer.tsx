import React from 'react';
import { Mail, Phone, MapPin, Instagram, Globe, Star, Linkedin, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                <Star className="w-7 h-7 text-white" fill="currentColor" />
              </div>
              <div>
                <h3 className="text-xl font-bold">STAR PIECE</h3>
                <p className="text-sm text-gray-400">Inovação Tecnológica para Mato Grosso</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Trazendo inovações tecnológicas para Cuiabá e todo o estado de Mato Grosso, 
              com foco em IA, capacitação em TI e tecnologias de acessibilidade.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/oficial_starpiece"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://star-piece-0001.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/erick-de-melo-e-oliveira"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://discord.gg/xryCtrKE"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nossas Soluções</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">E.L.L.E.N. AI</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Capacitação de Programadores</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Classificação de Programadores</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Robôs de Segurança</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Próteses Biônicas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Óculos Inteligentes</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">starpiece.melock@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">(65) 99269-6056</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">Cuiabá, MT</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold text-sm mb-2">Fundador</h5>
              <p className="text-gray-300 text-sm">Erick de Melo e Oliveira</p>
              <p className="text-gray-400 text-xs mt-1">Criador da Empresa</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Star Piece. Todos os direitos reservados. | Empresa 100% Mato-grossense
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">
                CNPJ em processo de formalização
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};