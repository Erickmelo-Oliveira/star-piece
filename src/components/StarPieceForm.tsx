import React, { useState } from 'react';
import { Send, CheckCircle, User, Mail, Phone, MapPin, Building, Calendar, FileText, Star } from 'lucide-react';

export const StarPieceForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    telefone: '',
    endereco: '',
    empresa: '',
    cargo: '',
    dataContato: '',
    tipoServico: '',
    descricaoProjeto: '',
    orcamento: '',
    prazo: '',
    observacoes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nomeCompleto: '',
        email: '',
        telefone: '',
        endereco: '',
        empresa: '',
        cargo: '',
        dataContato: '',
        tipoServico: '',
        descricaoProjeto: '',
        orcamento: '',
        prazo: '',
        observacoes: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const servicosDisponiveis = [
    'E.L.L.E.N. AI',
    'Capacitação de Programadores',
    'Classificação de Programadores',
    'Robôs de Atendimento e Segurança',
    'Próteses Biônicas',
    'Óculos Inteligentes',
    'Consultoria Tecnológica',
    'Desenvolvimento Personalizado'
  ];

  return (
    <section id="formulario" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
              <Star className="w-8 h-8 text-white" fill="currentColor" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Formulário de <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Solicitação</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Preencha o formulário abaixo para solicitar informações sobre nossos serviços ou iniciar um projeto conosco.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Formulário Enviado!</h3>
              <p className="text-lg text-gray-600 mb-6">
                Recebemos sua solicitação e entraremos em contato em breve para discutir seu projeto.
              </p>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl">
                <p className="text-gray-700">
                  <strong>Próximos passos:</strong> Nossa equipe analisará sua solicitação e retornará 
                  em até 24 horas com uma proposta personalizada.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Informações Pessoais */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <User className="w-6 h-6 mr-3 text-blue-600" />
                  Informações Pessoais
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nomeCompleto" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nomeCompleto"
                      name="nomeCompleto"
                      value={formData.nomeCompleto}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="(65) 99999-9999"
                    />
                  </div>

                  <div>
                    <label htmlFor="endereco" className="block text-sm font-medium text-gray-700 mb-2">
                      Endereço
                    </label>
                    <input
                      type="text"
                      id="endereco"
                      name="endereco"
                      value={formData.endereco}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Cidade, Estado"
                    />
                  </div>
                </div>
              </div>

              {/* Informações Profissionais */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Building className="w-6 h-6 mr-3 text-purple-600" />
                  Informações Profissionais
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa/Instituição
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Nome da empresa"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="cargo" className="block text-sm font-medium text-gray-700 mb-2">
                      Cargo/Função
                    </label>
                    <input
                      type="text"
                      id="cargo"
                      name="cargo"
                      value={formData.cargo}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Seu cargo atual"
                    />
                  </div>

                  <div>
                    <label htmlFor="dataContato" className="block text-sm font-medium text-gray-700 mb-2">
                      Melhor Data para Contato
                    </label>
                    <input
                      type="date"
                      id="dataContato"
                      name="dataContato"
                      value={formData.dataContato}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="tipoServico" className="block text-sm font-medium text-gray-700 mb-2">
                      Serviço de Interesse *
                    </label>
                    <select
                      id="tipoServico"
                      name="tipoServico"
                      value={formData.tipoServico}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Selecione um serviço</option>
                      {servicosDisponiveis.map((servico, index) => (
                        <option key={index} value={servico}>{servico}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Detalhes do Projeto */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-green-600" />
                  Detalhes do Projeto
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="descricaoProjeto" className="block text-sm font-medium text-gray-700 mb-2">
                      Descrição do Projeto *
                    </label>
                    <textarea
                      id="descricaoProjeto"
                      name="descricaoProjeto"
                      value={formData.descricaoProjeto}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Descreva detalhadamente seu projeto, necessidades e objetivos..."
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="orcamento" className="block text-sm font-medium text-gray-700 mb-2">
                        Orçamento Estimado
                      </label>
                      <select
                        id="orcamento"
                        name="orcamento"
                        value={formData.orcamento}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Selecione uma faixa</option>
                        <option value="ate-10k">Até R$ 10.000</option>
                        <option value="10k-25k">R$ 10.000 - R$ 25.000</option>
                        <option value="25k-50k">R$ 25.000 - R$ 50.000</option>
                        <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
                        <option value="acima-100k">Acima de R$ 100.000</option>
                        <option value="a-definir">A definir</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="prazo" className="block text-sm font-medium text-gray-700 mb-2">
                        Prazo Desejado
                      </label>
                      <select
                        id="prazo"
                        name="prazo"
                        value={formData.prazo}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Selecione um prazo</option>
                        <option value="urgente">Urgente (até 1 mês)</option>
                        <option value="1-3-meses">1 a 3 meses</option>
                        <option value="3-6-meses">3 a 6 meses</option>
                        <option value="6-12-meses">6 a 12 meses</option>
                        <option value="acima-12-meses">Acima de 12 meses</option>
                        <option value="flexivel">Flexível</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="observacoes" className="block text-sm font-medium text-gray-700 mb-2">
                      Observações Adicionais
                    </label>
                    <textarea
                      id="observacoes"
                      name="observacoes"
                      value={formData.observacoes}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Informações adicionais, requisitos específicos, dúvidas..."
                    />
                  </div>
                </div>
              </div>

              {/* Botão de Envio */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 group"
                >
                  <span>Enviar Solicitação</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <p className="text-sm text-gray-500 text-center mt-4">
                  * Campos obrigatórios. Seus dados estão protegidos e serão usados apenas para contato sobre o projeto.
                </p>
              </div>
            </form>
          )}
        </div>

        {/* Informações de Contato */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
            <p className="text-gray-600">starpiece.melock@gmail.com</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <Phone className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Telefone</h4>
            <p className="text-gray-600">(65) 99269-6056</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <MapPin className="w-8 h-8 text-pink-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Localização</h4>
            <p className="text-gray-600">Cuiabá, MT</p>
          </div>
        </div>
      </div>
    </section>
  );
};