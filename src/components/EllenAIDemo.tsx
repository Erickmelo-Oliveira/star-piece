import React, { useState, useEffect } from 'react';
import { Brain, Cpu, Eye, Zap, Monitor, Wrench, CheckCircle, ArrowRight, Layers, Code, Database, Cloud, Play, Pause, RotateCcw, Settings, MessageCircle, Camera, Mic, Volume2 } from 'lucide-react';
import { EllenAI3DViewer } from './EllenAI3DViewer';
import { EllenAIQASystem } from './EllenAIQASystem';

export const EllenAIDemo: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentMode, setCurrentMode] = useState<'hardware' | 'programming' | 'diagnosis'>('hardware');
  const [chatMessages, setChatMessages] = useState<Array<{type: 'user' | 'ellen', message: string}>>([
    { type: 'ellen', message: 'Olá! Eu sou E.L.L.E.N A.I. Como posso ajudá-lo hoje?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [hardwareView, setHardwareView] = useState('motherboard');

  const modes = [
    {
      id: 'hardware',
      name: 'Manipulação de Hardware',
      icon: <Wrench className="w-5 h-5" />,
      description: 'Visualização 3D e diagnóstico de componentes'
    },
    {
      id: 'qa',
      name: 'Perguntas e Respostas',
      icon: <MessageCircle className="w-5 h-5" />,
      description: 'IA especializada em tecnologia'
    },
    {
      id: 'programming',
      name: 'Ensino de Programação',
      icon: <Code className="w-5 h-5" />,
      description: 'Assistente para aprendizado de código'
    },
    {
      id: 'diagnosis',
      name: 'Diagnóstico Inteligente',
      icon: <Eye className="w-5 h-5" />,
      description: 'Análise e solução de problemas'
    }
  ];

  const hardwareComponents = [
    { name: 'Motherboard', id: 'motherboard', status: 'normal', temp: '45°C' },
    { name: 'CPU', id: 'cpu', status: 'warning', temp: '72°C' },
    { name: 'RAM', id: 'ram', status: 'normal', temp: '38°C' },
    { name: 'GPU', id: 'gpu', status: 'normal', temp: '65°C' },
    { name: 'Storage', id: 'storage', status: 'error', temp: '55°C' },
    { name: 'PSU', id: 'psu', status: 'normal', temp: '42°C' }
  ];

  const programmingExamples = [
    {
      language: 'Python',
      code: `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))`,
      explanation: 'Esta função calcula a sequência de Fibonacci usando recursão.'
    },
    {
      language: 'JavaScript',
      code: `const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro:', error);
    }
};`,
      explanation: 'Função assíncrona para buscar dados de uma API usando fetch.'
    }
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    setChatMessages(prev => [...prev, { type: 'user', message: inputMessage }]);
    setIsProcessing(true);
    setInputMessage('');

    // Simular resposta da IA
    setTimeout(() => {
      let response = '';
      
      if (currentMode === 'hardware') {
        response = 'Analisando componente selecionado... Detectei que o storage está com temperatura elevada. Recomendo verificar a ventilação e fazer backup dos dados importantes.';
      } else if (currentMode === 'programming') {
        response = 'Vejo que você está trabalhando com JavaScript. Esta função está bem estruturada! Posso sugerir algumas melhorias para tratamento de erros mais robusto.';
      } else {
        response = 'Executando diagnóstico completo do sistema... Encontrei 2 problemas menores que podem ser resolvidos facilmente. Deseja que eu guie você através das soluções?';
      }

      setChatMessages(prev => [...prev, { type: 'ellen', message: response }]);
      setIsProcessing(false);
    }, 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return 'text-green-500';
      case 'warning': return 'text-yellow-500';
      case 'error': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 rounded-3xl flex items-center justify-center relative">
              <Brain className="w-10 h-10 text-white" />
              {isActive && (
                <div className="absolute -inset-1 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 rounded-3xl blur opacity-75 animate-pulse"></div>
              )}
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">E.L.L.E.N A.I</span> Demo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Experimente as capacidades da nossa inteligência artificial em tempo real
          </p>

          {/* Control Panel */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <button
              onClick={() => setIsActive(!isActive)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                isActive 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg' 
                  : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg'
              }`}
            >
              {isActive ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              <span>{isActive ? 'E.L.L.E.N Ativa' : 'Ativar E.L.L.E.N'}</span>
            </button>
            
            <button className="flex items-center space-x-2 px-4 py-3 border-2 border-gray-300 rounded-full text-gray-700 hover:border-purple-400 hover:text-purple-600 transition-all duration-300">
              <Settings className="w-5 h-5" />
              <span>Configurações</span>
            </button>
          </div>

          {/* Mode Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {modes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setCurrentMode(mode.id as any)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
                  currentMode === mode.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:shadow-lg hover:scale-105 border border-gray-200'
                }`}
              >
                {mode.icon}
                <div className="text-left">
                  <div className="font-semibold">{mode.name}</div>
                  <div className="text-xs opacity-75">{mode.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Interface */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel - Mode Specific Content */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              {modes.find(m => m.id === currentMode)?.icon}
              <span className="ml-3">{modes.find(m => m.id === currentMode)?.name}</span>
            </h3>

            {currentMode === 'hardware' && (
              <div className="space-y-6">
                {/* 3D Visualization with E.L.L.E.N A.I */}
                <EllenAI3DViewer />

                {/* Component Details */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Detalhes do Componente</h4>
                  {hardwareComponents.find(c => c.id === hardwareView) && (
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <span className={`font-semibold ${getStatusColor(hardwareComponents.find(c => c.id === hardwareView)!.status)}`}>
                          {hardwareComponents.find(c => c.id === hardwareView)!.status.toUpperCase()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Temperatura:</span>
                        <span className="font-semibold">{hardwareComponents.find(c => c.id === hardwareView)!.temp}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Última verificação:</span>
                        <span className="font-semibold">Há 2 minutos</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {currentMode === 'qa' && (
              <div className="h-[600px]">
                <EllenAIQASystem />
              </div>
            )}

            {currentMode === 'programming' && (
              <div className="space-y-6">
                <div className="bg-gray-900 rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold">Editor de Código</h4>
                    <select className="bg-gray-800 border border-gray-700 rounded px-3 py-1 text-sm">
                      <option>Python</option>
                      <option>JavaScript</option>
                      <option>Java</option>
                    </select>
                  </div>
                  
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                    <pre className="text-green-400">{programmingExamples[0].code}</pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Brain className="w-5 h-5 mr-2 text-blue-600" />
                    Análise da E.L.L.E.N
                  </h4>
                  <p className="text-gray-700">{programmingExamples[0].explanation}</p>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Sintaxe correta</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Lógica bem estruturada</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-gray-600">Pode ser otimizado com memoização</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentMode === 'diagnosis' && (
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Eye className="w-5 h-5 mr-2 text-red-600" />
                    Diagnóstico do Sistema
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="font-medium">Storage com alta temperatura</span>
                      </div>
                      <span className="text-sm text-red-600">Crítico</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span className="font-medium">CPU com carga elevada</span>
                      </div>
                      <span className="text-sm text-yellow-600">Atenção</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="font-medium">Demais componentes normais</span>
                      </div>
                      <span className="text-sm text-green-600">OK</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Soluções Recomendadas</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                      <div>
                        <p className="font-medium">Verificar ventilação do storage</p>
                        <p className="text-sm text-gray-600">Limpar coolers e verificar pasta térmica</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                      <div>
                        <p className="font-medium">Otimizar processos do CPU</p>
                        <p className="text-sm text-gray-600">Fechar aplicações desnecessárias</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Panel - Chat Interface */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col h-[600px]">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <MessageCircle className="w-6 h-6 mr-3 text-indigo-600" />
                Chat com E.L.L.E.N
                {isActive && (
                  <div className="ml-3 flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600">Online</span>
                  </div>
                )}
              </h3>
            </div>

            <div className="flex-1 p-6 overflow-y-auto space-y-4">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                      msg.type === 'user'
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    {msg.type === 'ellen' && (
                      <div className="flex items-center space-x-2 mb-2">
                        <Brain className="w-4 h-4 text-indigo-600" />
                        <span className="text-xs font-semibold text-indigo-600">E.L.L.E.N</span>
                      </div>
                    )}
                    <p className="text-sm">{msg.message}</p>
                  </div>
                </div>
              ))}
              
              {isProcessing && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 px-4 py-3 rounded-2xl">
                    <div className="flex items-center space-x-2">
                      <Brain className="w-4 h-4 text-indigo-600" />
                      <span className="text-xs font-semibold text-indigo-600">E.L.L.E.N</span>
                    </div>
                    <div className="flex space-x-1 mt-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-gray-200">
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={isActive ? "Digite sua pergunta..." : "Ative E.L.L.E.N para conversar"}
                  disabled={!isActive}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!isActive || !inputMessage.trim()}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  <span>Enviar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex items-center justify-center space-x-4 mt-4">
                <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors">
                  <Mic className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors">
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Overview */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Visualização 3D</h4>
            <p className="text-gray-600 text-sm">Interface tridimensional para análise detalhada de componentes</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">IA Avançada</h4>
            <p className="text-gray-600 text-sm">Processamento inteligente com aprendizado contínuo</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Tempo Real</h4>
            <p className="text-gray-600 text-sm">Análise e resposta instantânea para máxima eficiência</p>
          </div>
        </div>
      </div>
    </section>
  );
};