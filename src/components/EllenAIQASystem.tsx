import React, { useState, useEffect, useRef } from 'react';
import { 
  Brain, 
  MessageCircle, 
  Send, 
  Mic, 
  Volume2, 
  Search,
  Book,
  Cpu,
  Code,
  HardDrive,
  Zap,
  CheckCircle,
  AlertCircle,
  Info,
  Lightbulb,
  Star,
  Clock,
  User,
  Bot,
  Copy,
  ThumbsUp,
  ThumbsDown,
  RotateCcw,
  Settings,
  Plus,
  Menu
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'ellen';
  content: string;
  timestamp: Date;
  category?: 'hardware' | 'software' | 'programming' | 'general';
  confidence?: number;
  isTyping?: boolean;
}

interface KnowledgeBase {
  [key: string]: {
    keywords: string[];
    responses: string[];
    category: 'hardware' | 'software' | 'programming' | 'general';
    examples?: string[];
    relatedTopics?: string[];
  };
}

export const EllenAIQASystem: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ellen',
      content: 'Olá! Eu sou **E.L.L.E.N A.I**, sua assistente especializada em tecnologia da Star Piece. 🚀\n\nPosso ajudá-lo com:\n• **Hardware** - CPU, GPU, RAM, componentes\n• **Software** - Sistemas, bancos de dados, ferramentas\n• **Programação** - Python, JavaScript, Java, desenvolvimento\n• **Star Piece** - Nossos produtos e serviços\n\nComo posso ajudá-lo hoje?',
      timestamp: new Date(),
      category: 'general'
    }
  ]);
  
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'hardware' | 'software' | 'programming'>('all');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const knowledgeBase: KnowledgeBase = {
    // HARDWARE
    'cpu_processador': {
      keywords: ['cpu', 'processador', 'intel', 'amd', 'núcleos', 'threads', 'clock', 'ghz'],
      responses: [
        '🔧 **CPU (Central Processing Unit)** é o "cérebro" do computador!\n\n**Principais características:**\n• Executa instruções e processa dados\n• Principais fabricantes: Intel e AMD\n• Medido em GHz (velocidade de clock)\n• Possui múltiplos núcleos e threads\n\n**Para escolher um CPU considere:**\n✅ Número de núcleos (4, 6, 8, 16+)\n✅ Frequência base e boost\n✅ Cache L3\n✅ TDP (consumo energético)\n✅ Compatibilidade com placa-mãe',
        '💡 **Processadores modernos** são muito mais que velocidade!\n\n**Arquiteturas atuais:**\n• **Intel**: 13ª geração (Raptor Lake)\n• **AMD**: Série 7000 (Zen 4)\n\n**Tecnologias importantes:**\n🚀 Múltiplos núcleos para multitarefa\n🚀 Hyperthreading/SMT para mais threads\n🚀 Cache inteligente para acesso rápido\n🚀 Controladores integrados (memória, PCIe)\n\n**Dica**: Para gaming, foque em frequência. Para trabalho, priorize núcleos!'
      ],
      category: 'hardware',
      examples: ['Intel Core i7-13700K', 'AMD Ryzen 7 7700X', 'Apple M2 Pro'],
      relatedTopics: ['motherboard', 'cooler', 'overclocking', 'gaming']
    },
    
    'memoria_ram': {
      keywords: ['ram', 'memória', 'ddr4', 'ddr5', 'gb', 'mhz', 'latência'],
      responses: [
        '🧠 **RAM (Random Access Memory)** - A memória de trabalho do PC!\n\n**O que faz:**\n• Armazena dados temporários para acesso rápido\n• Permite multitarefa eficiente\n• Influencia diretamente na performance\n\n**Padrões atuais:**\n📊 **DDR4**: Maduro, bom custo-benefício\n📊 **DDR5**: Mais rápido, maior eficiência\n\n**Recomendações:**\n✨ **Gaming**: 16GB DDR4-3200 ou DDR5-5600\n✨ **Trabalho**: 32GB para edição/programação\n✨ **Básico**: 8GB suficiente para uso simples',
        '⚡ **Escolhendo a RAM ideal:**\n\n**Capacidade por uso:**\n• 8GB - Navegação, office\n• 16GB - Gaming, programação\n• 32GB+ - Edição profissional, VMs\n\n**Velocidade importa:**\n🏃‍♂️ DDR4-2400 → DDR4-3200 = +15% performance\n🏃‍♂️ DDR4-3200 → DDR5-5600 = +20% performance\n\n**Dual Channel é essencial:**\n✅ 2x8GB > 1x16GB\n✅ Melhor bandwidth e performance'
      ],
      category: 'hardware',
      examples: ['Corsair Vengeance LPX 16GB DDR4-3200', 'G.Skill Trident Z5 32GB DDR5-6000'],
      relatedTopics: ['motherboard', 'cpu', 'performance', 'gaming']
    },

    'placa_video_gpu': {
      keywords: ['gpu', 'placa de vídeo', 'nvidia', 'amd', 'rtx', 'radeon', 'vram', 'ray tracing'],
      responses: [
        '🎮 **GPU (Graphics Processing Unit)** - O coração dos gráficos!\n\n**Principais usos:**\n• Gaming em alta resolução\n• Edição de vídeo e 3D\n• Inteligência Artificial\n• Mineração de criptomoedas\n\n**Fabricantes líderes:**\n🟢 **NVIDIA RTX**: Ray Tracing, DLSS 3.0\n🔴 **AMD Radeon**: Ótimo custo-benefício, FSR\n\n**Recomendações por resolução:**\n📺 **1080p**: RTX 4060 / RX 7600\n📺 **1440p**: RTX 4070 / RX 7700 XT\n📺 **4K**: RTX 4080/4090 / RX 7900 XTX',
        '🚀 **Tecnologias modernas em GPUs:**\n\n**Ray Tracing:**\n• Iluminação realística em tempo real\n• Reflexos e sombras cinematográficas\n• Suporte crescente em jogos\n\n**DLSS vs FSR:**\n🔥 **DLSS 3.0** (NVIDIA): IA para upscaling\n🔥 **FSR 2.0** (AMD): Open source, compatível\n\n**VRAM importante:**\n• 8GB mínimo para 1440p\n• 12GB+ recomendado para 4K\n• Texturas high-res consomem muito'
      ],
      category: 'hardware',
      examples: ['NVIDIA GeForce RTX 4070', 'AMD Radeon RX 7800 XT', 'RTX 4090'],
      relatedTopics: ['gaming', 'monitor', 'psu', 'cooling']
    },

    // SOFTWARE
    'sistema_operacional': {
      keywords: ['windows', 'linux', 'macos', 'sistema operacional', 'os', 'ubuntu', 'debian'],
      responses: [
        '💻 **Sistemas Operacionais** - A base de tudo!\n\n**Principais opções:**\n🪟 **Windows 11**: Gaming, compatibilidade, facilidade\n🐧 **Linux**: Gratuito, personalizável, seguro\n🍎 **macOS**: Criação, estabilidade, ecossistema\n\n**Para cada perfil:**\n🎮 **Gamer**: Windows (melhor compatibilidade)\n👨‍💻 **Desenvolvedor**: Linux ou macOS\n🎨 **Designer**: macOS (Adobe, Final Cut)\n📊 **Escritório**: Windows (Office, compatibilidade)',
        '🐧 **Linux para iniciantes:**\n\n**Distribuições recomendadas:**\n• **Ubuntu**: Mais popular, fácil\n• **Linux Mint**: Interface familiar\n• **Pop!_OS**: Otimizado para gaming\n• **Debian**: Estável, confiável\n\n**Vantagens do Linux:**\n✅ Gratuito e open source\n✅ Mais seguro que Windows\n✅ Personalizável ao extremo\n✅ Excelente para programação\n✅ Consome menos recursos'
      ],
      category: 'software',
      examples: ['Windows 11 Pro', 'Ubuntu 22.04 LTS', 'macOS Ventura'],
      relatedTopics: ['drivers', 'virtualization', 'security', 'programming']
    },

    // PROGRAMAÇÃO
    'python_linguagem': {
      keywords: ['python', 'django', 'flask', 'pandas', 'numpy', 'machine learning'],
      responses: [
        '🐍 **Python** - A linguagem mais versátil!\n\n**Por que Python é popular:**\n• Sintaxe simples e legível\n• Comunidade gigantesca\n• Bibliotecas para tudo\n• Ideal para iniciantes\n\n**Principais usos:**\n🤖 **IA/ML**: TensorFlow, PyTorch, Scikit-learn\n🌐 **Web**: Django, Flask, FastAPI\n📊 **Dados**: Pandas, NumPy, Matplotlib\n⚙️ **Automação**: Scripts, bots, APIs\n\n**Como começar:**\n1. Instale Python 3.11+\n2. Aprenda sintaxe básica\n3. Pratique com projetos\n4. Escolha uma especialização',
        '🚀 **Frameworks Python populares:**\n\n**Desenvolvimento Web:**\n• **Django**: Framework completo, "batteries included"\n• **Flask**: Minimalista, flexível\n• **FastAPI**: Moderno, rápido, APIs\n\n**Data Science:**\n• **Pandas**: Manipulação de dados\n• **NumPy**: Computação numérica\n• **Matplotlib**: Visualização\n• **Jupyter**: Notebooks interativos\n\n**Machine Learning:**\n• **TensorFlow**: Google, redes neurais\n• **PyTorch**: Facebook, pesquisa\n• **Scikit-learn**: ML tradicional'
      ],
      category: 'programming',
      examples: ['print("Hello, World!")', 'import pandas as pd', 'from flask import Flask'],
      relatedTopics: ['web development', 'data science', 'automation', 'ai']
    },

    'javascript_js': {
      keywords: ['javascript', 'js', 'node', 'react', 'vue', 'angular', 'typescript'],
      responses: [
        '⚡ **JavaScript** - A linguagem da web!\n\n**Onde roda:**\n🌐 **Frontend**: Navegadores, interfaces\n⚙️ **Backend**: Node.js, servidores\n📱 **Mobile**: React Native, Ionic\n🖥️ **Desktop**: Electron, Tauri\n\n**Frameworks Frontend:**\n⚛️ **React**: Facebook, componentes\n💚 **Vue.js**: Progressivo, fácil\n🅰️ **Angular**: Google, enterprise\n\n**Por que aprender:**\n✅ Única linguagem que roda no browser\n✅ Ecossistema gigantesco (NPM)\n✅ Mercado de trabalho aquecido\n✅ Full-stack com Node.js',
        '🔥 **JavaScript moderno (ES6+):**\n\n**Recursos essenciais:**\n```javascript\n// Arrow functions\nconst soma = (a, b) => a + b;\n\n// Destructuring\nconst {nome, idade} = pessoa;\n\n// Template literals\nconst msg = `Olá, ${nome}!`;\n\n// Async/await\nconst dados = await fetch(url);\n```\n\n**TypeScript:**\n• Adiciona tipagem ao JavaScript\n• Melhor para projetos grandes\n• Usado por grandes empresas\n• Compila para JavaScript puro'
      ],
      category: 'programming',
      examples: ['console.log("Hello World")', 'const app = React.createElement', 'npm install express'],
      relatedTopics: ['web development', 'frontend', 'backend', 'typescript']
    },

    // STAR PIECE
    'star_piece_empresa': {
      keywords: ['star piece', 'empresa', 'mato grosso', 'cuiabá', 'ellen ai'],
      responses: [
        '⭐ **Star Piece** - Inovação 100% Mato-grossense!\n\n**Nossa Missão:**\nTrazer inovações tecnológicas para Cuiabá e todo MT, focando em:\n\n🔧 **Tecnologia & Capacitação em TI**\n♿ **Inovações para Acessibilidade e Segurança**\n\n**Principais Soluções:**\n🧠 **E.L.L.E.N A.I**: IA para manipulação de hardware\n🤖 **Star Robots**: Robôs de atendimento e segurança\n👥 **Star DEVs**: Capacitação de programadores\n🦾 **Star Access**: Próteses biônicas e óculos inteligentes',
        '🚀 **Diferenciais da Star Piece:**\n\n**Inovação Regional:**\n• Primeira empresa de IA avançada em MT\n• Soluções adaptadas para o mercado local\n• Foco em acessibilidade tecnológica\n\n**Tecnologias Próprias:**\n🧠 **E.L.L.E.N A.I**: Sistema único de visualização 3D\n🤖 **Robôs inteligentes**: Atendimento automatizado\n🦾 **Próteses biônicas**: Tecnologia assistiva\n👓 **Óculos inteligentes**: Navegação para deficientes visuais\n\n**Impacto Social:**\n• Capacitação de profissionais locais\n• Inclusão tecnológica\n• Desenvolvimento regional'
      ],
      category: 'general',
      examples: ['E.L.L.E.N A.I', 'Star Robots', 'Star Access', 'Star DEVs'],
      relatedTopics: ['ellen ai', 'accessibility', 'robotics', 'mato grosso']
    }
  };

  const categories = [
    { id: 'all', name: 'Todas', icon: <MessageCircle className="w-4 h-4" />, color: 'bg-gray-600', count: 0 },
    { id: 'hardware', name: 'Hardware', icon: <Cpu className="w-4 h-4" />, color: 'bg-blue-600', count: 0 },
    { id: 'software', name: 'Software', icon: <HardDrive className="w-4 h-4" />, color: 'bg-green-600', count: 0 },
    { id: 'programming', name: 'Programação', icon: <Code className="w-4 h-4" />, color: 'bg-purple-600', count: 0 }
  ];

  const quickQuestions = [
    "O que é um processador?",
    "Diferença entre SSD e HDD?",
    "Como aprender Python?",
    "O que é React?",
    "Quanto de RAM preciso?",
    "O que é a Star Piece?",
    "Como escolher uma GPU?",
    "O que é Linux?",
    "JavaScript ou Python?",
    "Como funciona a E.L.L.E.N A.I?"
  ];

  const findBestResponse = (question: string): { response: string; category: string; confidence: number; examples?: string[]; relatedTopics?: string[] } => {
    const questionLower = question.toLowerCase();
    let bestMatch = { score: 0, key: '', response: '', category: 'general', examples: [], relatedTopics: [] };

    Object.entries(knowledgeBase).forEach(([key, data]) => {
      let score = 0;
      
      data.keywords.forEach(keyword => {
        if (questionLower.includes(keyword.toLowerCase())) {
          score += keyword.length * 2; // Palavras mais específicas têm mais peso
        }
      });

      // Bonus para correspondências exatas
      if (questionLower === key.replace('_', ' ')) {
        score += 50;
      }

      if (score > bestMatch.score) {
        bestMatch = {
          score,
          key,
          response: data.responses[Math.floor(Math.random() * data.responses.length)],
          category: data.category,
          examples: data.examples || [],
          relatedTopics: data.relatedTopics || []
        };
      }
    });

    if (bestMatch.score === 0) {
      return {
        response: "🤔 **Hmm, não encontrei informações específicas sobre isso.**\n\nMas posso ajudá-lo com:\n\n🔧 **Hardware**: CPU, GPU, RAM, componentes\n💻 **Software**: Sistemas operacionais, bancos de dados\n👨‍💻 **Programação**: Python, JavaScript, Java, desenvolvimento web\n⭐ **Star Piece**: Nossos produtos e serviços\n\n💡 **Dica**: Tente reformular sua pergunta ou escolha uma das sugestões abaixo!",
        category: 'general',
        confidence: 0,
        examples: quickQuestions.slice(0, 6),
        relatedTopics: ['hardware', 'software', 'programming', 'star piece']
      };
    }

    const confidence = Math.min((bestMatch.score / questionLower.length) * 100, 95);
    
    return {
      response: bestMatch.response,
      category: bestMatch.category,
      confidence,
      examples: bestMatch.examples,
      relatedTopics: bestMatch.relatedTopics
    };
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simular processamento da IA com delay realista
    const processingTime = 800 + Math.random() * 1200;
    
    setTimeout(() => {
      const aiResponse = findBestResponse(inputMessage);
      
      let responseContent = aiResponse.response;
      
      if (aiResponse.examples && aiResponse.examples.length > 0) {
        responseContent += `\n\n**📝 Exemplos:**\n${aiResponse.examples.map(ex => `• \`${ex}\``).join('\n')}`;
      }
      
      if (aiResponse.relatedTopics && aiResponse.relatedTopics.length > 0) {
        responseContent += `\n\n**🔗 Tópicos relacionados:** ${aiResponse.relatedTopics.join(' • ')}`;
      }

      const ellenMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ellen',
        content: responseContent,
        timestamp: new Date(),
        category: aiResponse.category as any,
        confidence: aiResponse.confidence
      };

      setMessages(prev => [...prev, ellenMessage]);
      setIsTyping(false);
    }, processingTime);
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
    inputRef.current?.focus();
  };

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  const newChat = () => {
    setMessages([{
      id: '1',
      type: 'ellen',
      content: 'Olá! Eu sou **E.L.L.E.N A.I**, sua assistente especializada em tecnologia da Star Piece. 🚀\n\nComo posso ajudá-lo hoje?',
      timestamp: new Date(),
      category: 'general'
    }]);
  };

  const getCategoryIcon = (category?: string) => {
    switch (category) {
      case 'hardware': return <Cpu className="w-4 h-4 text-blue-500" />;
      case 'software': return <HardDrive className="w-4 h-4 text-green-500" />;
      case 'programming': return <Code className="w-4 h-4 text-purple-500" />;
      default: return <Info className="w-4 h-4 text-gray-500" />;
    }
  };

  const getConfidenceColor = (confidence?: number) => {
    if (!confidence) return 'text-gray-400';
    if (confidence >= 80) return 'text-green-500';
    if (confidence >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const formatMessage = (content: string) => {
    // Converter markdown básico para HTML
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">$1</code>')
      .replace(/\n/g, '<br/>');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
      }
    };

    const inputElement = inputRef.current;
    if (inputElement) {
      inputElement.addEventListener('keypress', handleKeyPress);
      return () => inputElement.removeEventListener('keypress', handleKeyPress);
    }
  }, [inputMessage]);

  const filteredMessages = selectedCategory === 'all' 
    ? messages 
    : messages.filter(msg => msg.category === selectedCategory || msg.type === 'user');

  return (
    <div className="flex h-screen bg-gray-50 relative">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:relative z-30 w-80 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">E.L.L.E.N A.I</h3>
                <p className="text-sm text-gray-500">Assistente Tecnológica</p>
              </div>
            </div>
            
            <button
              onClick={newChat}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <Plus className="w-4 h-4" />
              <span>Nova Conversa</span>
            </button>
          </div>

          {/* Categories */}
          <div className="p-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Categorias</h4>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id as any)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? `${category.color} text-white shadow-md`
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Questions */}
          <div className="flex-1 p-4 overflow-y-auto">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Perguntas Rápidas</h4>
            <div className="space-y-2">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className="w-full text-left p-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200 border border-gray-100"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="text-xs text-gray-500 text-center">
              <p>Powered by <strong>Star Piece</strong></p>
              <p>Mato Grosso • 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="font-semibold text-gray-900">E.L.L.E.N A.I</h1>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600">Online</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {filteredMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex space-x-3 max-w-4xl ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.type === 'user' 
                    ? 'bg-blue-600' 
                    : 'bg-gradient-to-br from-purple-500 to-pink-500'
                }`}>
                  {message.type === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>

                {/* Message Content */}
                <div className={`flex-1 ${message.type === 'user' ? 'text-right' : ''}`}>
                  {/* Message Header */}
                  <div className="flex items-center space-x-2 mb-2">
                    {message.type === 'ellen' && (
                      <>
                        <span className="text-sm font-semibold text-gray-900">E.L.L.E.N A.I</span>
                        {message.category && getCategoryIcon(message.category)}
                        {message.confidence && (
                          <span className={`text-xs px-2 py-1 rounded-full bg-gray-100 ${getConfidenceColor(message.confidence)}`}>
                            {Math.round(message.confidence)}% confiança
                          </span>
                        )}
                      </>
                    )}
                    {message.type === 'user' && (
                      <span className="text-sm font-semibold text-gray-900">Você</span>
                    )}
                  </div>

                  {/* Message Bubble */}
                  <div className={`p-4 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-gray-200 text-gray-900'
                  }`}>
                    <div 
                      className="prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ 
                        __html: formatMessage(message.content) 
                      }}
                    />
                  </div>

                  {/* Message Actions */}
                  {message.type === 'ellen' && (
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => copyMessage(message.content)}
                        className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                        title="Copiar mensagem"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-green-600 transition-colors" title="Útil">
                        <ThumbsUp className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-600 transition-colors" title="Não útil">
                        <ThumbsDown className="w-4 h-4" />
                      </button>
                      <span className="text-xs text-gray-400">
                        {message.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex space-x-3 max-w-4xl">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-2xl">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-gray-900">E.L.L.E.N A.I</span>
                    <span className="text-sm text-gray-500">está digitando</span>
                  </div>
                  <div className="flex space-x-1 mt-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-white border-t border-gray-200 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-end space-x-4">
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Digite sua pergunta sobre tecnologia..."
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="p-3 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <Mic className="w-5 h-5" />
                </button>
                <button className="p-3 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-center mt-4">
              <p className="text-xs text-gray-500">
                E.L.L.E.N A.I pode cometer erros. Considere verificar informações importantes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};