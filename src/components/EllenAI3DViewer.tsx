import React, { useState, useEffect, useRef } from 'react';
import { 
  RotateCcw, 
  ZoomIn, 
  ZoomOut, 
  Move3D, 
  Eye, 
  Settings, 
  Info, 
  AlertTriangle, 
  CheckCircle, 
  Brain,
  Cpu,
  HardDrive,
  MemoryStick,
  Zap,
  Fan,
  Monitor,
  Camera,
  Play,
  Pause,
  SkipForward,
  Thermometer,
  Activity,
  Wifi,
  Power,
  Shield,
  Layers,
  Search,
  Target
} from 'lucide-react';

interface Component3D {
  id: string;
  name: string;
  type: 'motherboard' | 'cpu' | 'ram' | 'gpu' | 'storage' | 'psu' | 'cooler';
  position: { x: number; y: number; z: number };
  rotation: { x: number; y: number; z: number };
  scale: number;
  status: 'normal' | 'warning' | 'error';
  temperature: number;
  description: string;
  specifications: string[];
  connections: string[];
  powerConsumption: number;
  health: number;
  manufacturer: string;
  model: string;
  installDate: string;
  warranty: string;
}

export const EllenAI3DViewer: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<Component3D | null>(null);
  const [viewMode, setViewMode] = useState<'assembly' | 'exploded' | 'diagnostic' | 'thermal'>('assembly');
  const [isRotating, setIsRotating] = useState(true);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState({ x: 15, y: 45 });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [showConnections, setShowConnections] = useState(false);
  const [highlightedComponent, setHighlightedComponent] = useState<string | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const components: Component3D[] = [
    {
      id: 'motherboard',
      name: 'Placa-Mãe ASUS ROG Strix Z690-E',
      type: 'motherboard',
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: 1.2,
      status: 'normal',
      temperature: 45,
      description: 'Placa principal ATX que conecta todos os componentes do sistema, oferecendo conectividade avançada e recursos de overclocking.',
      specifications: [
        'Socket LGA 1700',
        'Chipset Intel Z690',
        '4x DDR5 DIMM slots',
        'PCIe 5.0 x16 slots',
        'Wi-Fi 6E integrado',
        'Bluetooth 5.2',
        '2.5Gb Ethernet',
        'USB 3.2 Gen 2x2'
      ],
      connections: ['CPU', 'RAM', 'GPU', 'Storage', 'PSU', 'Cooler'],
      powerConsumption: 25,
      health: 98,
      manufacturer: 'ASUS',
      model: 'ROG Strix Z690-E Gaming WiFi',
      installDate: '2024-01-15',
      warranty: '3 anos'
    },
    {
      id: 'cpu',
      name: 'Intel Core i7-13700K',
      type: 'cpu',
      position: { x: 0, y: 25, z: 8 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: 0.4,
      status: 'warning',
      temperature: 72,
      description: 'Processador de 13ª geração com arquitetura híbrida, combinando núcleos de performance e eficiência para máximo desempenho.',
      specifications: [
        '16 núcleos (8P + 8E)',
        '24 threads',
        '3.4GHz base / 5.4GHz boost',
        'Cache L3 de 30MB',
        'TDP 125W',
        'Arquitetura Raptor Lake',
        'Processo 10nm Intel 7',
        'Suporte DDR5-5600'
      ],
      connections: ['Motherboard', 'Cooler'],
      powerConsumption: 125,
      health: 95,
      manufacturer: 'Intel',
      model: 'Core i7-13700K',
      installDate: '2024-01-15',
      warranty: '3 anos'
    },
    {
      id: 'ram',
      name: 'Corsair Dominator Platinum RGB 32GB',
      type: 'ram',
      position: { x: 50, y: 20, z: 12 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: 0.9,
      status: 'normal',
      temperature: 38,
      description: 'Memória DDR5 de alta performance com iluminação RGB personalizável e dissipadores de calor premium.',
      specifications: [
        'DDR5-6000 MHz',
        '32GB (2x16GB)',
        'Latência CL36',
        'Voltage 1.35V',
        'RGB Dinâmico',
        'Dissipador de alumínio',
        'Perfil XMP 3.0',
        'Garantia vitalícia'
      ],
      connections: ['Motherboard'],
      powerConsumption: 8,
      health: 100,
      manufacturer: 'Corsair',
      model: 'Dominator Platinum RGB',
      installDate: '2024-01-15',
      warranty: 'Vitalícia'
    },
    {
      id: 'gpu',
      name: 'NVIDIA GeForce RTX 4070 Ti',
      type: 'gpu',
      position: { x: -30, y: -40, z: 20 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: 1.5,
      status: 'normal',
      temperature: 65,
      description: 'Placa de vídeo de última geração com arquitetura Ada Lovelace, Ray Tracing de 3ª geração e DLSS 3.',
      specifications: [
        '12GB GDDR6X',
        '7680 CUDA Cores',
        '2610MHz Boost Clock',
        'Bus de 192-bit',
        'Ray Tracing 3ª Gen',
        'DLSS 3.0',
        'AV1 Encoding',
        'PCIe 4.0 x16'
      ],
      connections: ['Motherboard', 'PSU', 'Monitor'],
      powerConsumption: 285,
      health: 97,
      manufacturer: 'NVIDIA',
      model: 'GeForce RTX 4070 Ti',
      installDate: '2024-01-15',
      warranty: '3 anos'
    },
    {
      id: 'storage',
      name: 'Samsung 980 PRO 2TB NVMe',
      type: 'storage',
      position: { x: 25, y: -25, z: 5 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: 0.5,
      status: 'error',
      temperature: 85,
      description: 'SSD NVMe PCIe 4.0 de alta velocidade com tecnologia V-NAND de 6ª geração e controlador proprietário.',
      specifications: [
        '2TB Capacidade',
        'PCIe 4.0 NVMe 1.3c',
        '7,000 MB/s leitura',
        '6,900 MB/s escrita',
        'V-NAND 3-bit MLC',
        'Cache SLC dinâmico',
        'Criptografia AES 256-bit',
        'TBW 1,200TB'
      ],
      connections: ['Motherboard'],
      powerConsumption: 6,
      health: 78,
      manufacturer: 'Samsung',
      model: '980 PRO',
      installDate: '2024-01-15',
      warranty: '5 anos'
    },
    {
      id: 'psu',
      name: 'Corsair RM850x 80+ Gold',
      type: 'psu',
      position: { x: -50, y: -50, z: -15 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: 1.1,
      status: 'normal',
      temperature: 42,
      description: 'Fonte de alimentação modular com certificação 80+ Gold, oferecendo eficiência superior e operação silenciosa.',
      specifications: [
        '850W Potência',
        '80+ Gold (90% eficiência)',
        'Totalmente modular',
        'Ventilador 135mm',
        'Modo Zero RPM',
        'Proteções múltiplas',
        'Cabos flat ribbon',
        'Garantia 10 anos'
      ],
      connections: ['Motherboard', 'GPU', 'Storage', 'Cooler'],
      powerConsumption: 0,
      health: 99,
      manufacturer: 'Corsair',
      model: 'RM850x',
      installDate: '2024-01-15',
      warranty: '10 anos'
    },
    {
      id: 'cooler',
      name: 'Corsair iCUE H150i Elite LCD',
      type: 'cooler',
      position: { x: 0, y: 45, z: 25 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: 0.8,
      status: 'normal',
      temperature: 28,
      description: 'Sistema de refrigeração líquida AIO com display LCD personalizável e ventiladores RGB de alta performance.',
      specifications: [
        'Radiador 360mm',
        'Display LCD 2.1"',
        '3x Ventiladores 120mm',
        'Bomba de alta performance',
        'RGB iCUE compatível',
        'TDP até 250W',
        'Tubos reforçados',
        'Software iCUE'
      ],
      connections: ['CPU', 'Motherboard', 'PSU'],
      powerConsumption: 15,
      health: 100,
      manufacturer: 'Corsair',
      model: 'iCUE H150i Elite LCD',
      installDate: '2024-01-15',
      warranty: '5 anos'
    }
  ];

  const getComponentIcon = (type: string) => {
    switch (type) {
      case 'motherboard': return <Layers className="w-5 h-5" />;
      case 'cpu': return <Cpu className="w-5 h-5" />;
      case 'ram': return <MemoryStick className="w-5 h-5" />;
      case 'gpu': return <Monitor className="w-5 h-5" />;
      case 'storage': return <HardDrive className="w-5 h-5" />;
      case 'psu': return <Zap className="w-5 h-5" />;
      case 'cooler': return <Fan className="w-5 h-5" />;
      default: return <Settings className="w-5 h-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'error': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'normal': return 'bg-green-500';
      case 'warning': return 'bg-yellow-500';
      case 'error': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getTemperatureColor = (temp: number) => {
    if (temp > 80) return 'text-red-400';
    if (temp > 70) return 'text-yellow-400';
    if (temp > 60) return 'text-orange-400';
    return 'text-green-400';
  };

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setAnalysisStep(0);
    
    const steps = [
      'Inicializando E.L.L.E.N A.I...',
      'Escaneando componentes de hardware...',
      'Analisando temperaturas e voltagens...',
      'Verificando integridade das conexões...',
      'Executando testes de stress...',
      'Diagnosticando problemas potenciais...',
      'Calculando índices de saúde...',
      'Gerando relatório detalhado...',
      'Análise completa finalizada!'
    ];

    const interval = setInterval(() => {
      setAnalysisStep(prev => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          setIsAnalyzing(false);
          return prev;
        }
        return prev + 1;
      });
    }, 1200);
  };

  useEffect(() => {
    if (isRotating) {
      const interval = setInterval(() => {
        setRotation(prev => ({
          x: prev.x,
          y: (prev.y + 0.5) % 360
        }));
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isRotating]);

  const Component3DView: React.FC<{ component: Component3D; isSelected: boolean }> = ({ 
    component, 
    isSelected 
  }) => {
    const baseSize = 80;
    const size = baseSize * component.scale * zoom;
    const isHighlighted = highlightedComponent === component.id;
    
    return (
      <div
        className={`absolute cursor-pointer transition-all duration-500 ${
          isSelected ? 'z-30' : isHighlighted ? 'z-20' : 'z-10'
        }`}
        style={{
          left: `calc(50% + ${component.position.x * zoom}px)`,
          top: `calc(50% + ${component.position.y * zoom}px)`,
          transform: `translate(-50%, -50%) rotateX(${rotation.x + component.rotation.x}deg) rotateY(${rotation.y + component.rotation.y}deg) rotateZ(${component.rotation.z}deg)`,
          width: `${size}px`,
          height: `${size}px`,
        }}
        onClick={() => setSelectedComponent(component)}
        onMouseEnter={() => setHighlightedComponent(component.id)}
        onMouseLeave={() => setHighlightedComponent(null)}
      >
        <div
          className={`w-full h-full rounded-xl border-3 transition-all duration-500 flex items-center justify-center relative overflow-hidden ${
            isSelected
              ? 'border-blue-400 bg-gradient-to-br from-blue-100 to-blue-200 shadow-2xl scale-110'
              : isHighlighted
              ? 'border-purple-400 bg-gradient-to-br from-purple-50 to-purple-100 shadow-xl scale-105'
              : 'border-gray-400 bg-gradient-to-br from-white to-gray-100 hover:shadow-lg'
          }`}
          style={{
            boxShadow: isSelected 
              ? '0 25px 50px -12px rgba(59, 130, 246, 0.5)'
              : isHighlighted
              ? '0 20px 40px -12px rgba(147, 51, 234, 0.3)'
              : '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
          }}
        >
          {/* Component Icon */}
          <div className={`text-3xl transition-colors duration-300 ${
            isSelected ? 'text-blue-600' : isHighlighted ? 'text-purple-600' : 'text-gray-600'
          }`}>
            {getComponentIcon(component.type)}
          </div>
          
          {/* Status Indicator */}
          <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center ${
            getStatusBgColor(component.status)
          } shadow-lg`}>
            <div className="w-4 h-4 text-white">
              {component.status === 'normal' && <CheckCircle className="w-4 h-4" />}
              {component.status === 'warning' && <AlertTriangle className="w-4 h-4" />}
              {component.status === 'error' && <AlertTriangle className="w-4 h-4" />}
            </div>
          </div>

          {/* Temperature Display */}
          <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold bg-gray-900 text-white shadow-lg flex items-center space-x-1 ${
            viewMode === 'thermal' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          } transition-opacity duration-300`}>
            <Thermometer className="w-3 h-3" />
            <span className={getTemperatureColor(component.temperature)}>{component.temperature}°C</span>
          </div>

          {/* Health Bar */}
          <div className="absolute -bottom-2 left-2 right-2 h-1 bg-gray-300 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ${
                component.health > 90 ? 'bg-green-500' :
                component.health > 70 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${component.health}%` }}
            ></div>
          </div>

          {/* Selection Glow */}
          {isSelected && (
            <div className="absolute inset-0 rounded-xl bg-blue-400 opacity-20 animate-pulse"></div>
          )}

          {/* Highlight Glow */}
          {isHighlighted && !isSelected && (
            <div className="absolute inset-0 rounded-xl bg-purple-400 opacity-15"></div>
          )}

          {/* Component Label */}
          <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap transition-opacity duration-300 ${
            isSelected || isHighlighted ? 'opacity-100' : 'opacity-0'
          }`}>
            {component.name.split(' ').slice(0, 2).join(' ')}
          </div>
        </div>
      </div>
    );
  };

  const ConnectionLine: React.FC<{ from: Component3D; to: Component3D }> = ({ from, to }) => {
    if (!showConnections) return null;

    const fromX = 50 + (from.position.x * zoom) / 10;
    const fromY = 50 + (from.position.y * zoom) / 10;
    const toX = 50 + (to.position.x * zoom) / 10;
    const toY = 50 + (to.position.y * zoom) / 10;

    return (
      <svg className="absolute inset-0 pointer-events-none" style={{ zIndex: 5 }}>
        <line
          x1={`${fromX}%`}
          y1={`${fromY}%`}
          x2={`${toX}%`}
          y2={`${toY}%`}
          stroke="rgba(59, 130, 246, 0.6)"
          strokeWidth="2"
          strokeDasharray="5,5"
          className="animate-pulse"
        />
      </svg>
    );
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 rounded-3xl p-6 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Brain className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              E.L.L.E.N A.I
            </h3>
            <p className="text-blue-300 text-sm">Sistema de Visualização 3D Avançado</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode('assembly')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
              viewMode === 'assembly' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Montado
          </button>
          <button
            onClick={() => setViewMode('exploded')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
              viewMode === 'exploded' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Explodido
          </button>
          <button
            onClick={() => setViewMode('thermal')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
              viewMode === 'thermal' 
                ? 'bg-red-600 text-white shadow-lg' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Térmico
          </button>
          <button
            onClick={() => setViewMode('diagnostic')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
              viewMode === 'diagnostic' 
                ? 'bg-purple-600 text-white shadow-lg' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Diagnóstico
          </button>
        </div>
      </div>

      <div className="relative z-10 grid lg:grid-cols-3 gap-6">
        {/* 3D Viewport */}
        <div className="lg:col-span-2">
          <div className="bg-black/30 rounded-2xl p-6 relative overflow-hidden backdrop-blur-sm border border-white/10" style={{ height: '600px' }}>
            {/* Controls */}
            <div className="absolute top-6 left-6 z-30 flex flex-col space-y-3">
              <button
                onClick={() => setIsRotating(!isRotating)}
                className={`p-3 rounded-xl transition-all duration-300 backdrop-blur-sm ${
                  isRotating 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-gray-700/80 text-gray-300 hover:bg-gray-600/80'
                }`}
              >
                {isRotating ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setRotation({ x: 15, y: 45 })}
                className="p-3 bg-gray-700/80 hover:bg-gray-600/80 rounded-xl transition-all duration-300 backdrop-blur-sm"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
              <button
                onClick={() => setZoom(Math.min(zoom + 0.2, 2.5))}
                className="p-3 bg-gray-700/80 hover:bg-gray-600/80 rounded-xl transition-all duration-300 backdrop-blur-sm"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={() => setZoom(Math.max(zoom - 0.2, 0.5))}
                className="p-3 bg-gray-700/80 hover:bg-gray-600/80 rounded-xl transition-all duration-300 backdrop-blur-sm"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <button
                onClick={() => setShowConnections(!showConnections)}
                className={`p-3 rounded-xl transition-all duration-300 backdrop-blur-sm ${
                  showConnections 
                    ? 'bg-purple-600 text-white shadow-lg' 
                    : 'bg-gray-700/80 text-gray-300 hover:bg-gray-600/80'
                }`}
              >
                <Wifi className="w-5 h-5" />
              </button>
            </div>

            {/* Analysis Button */}
            <div className="absolute top-6 right-6 z-30">
              <button
                onClick={startAnalysis}
                disabled={isAnalyzing}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg disabled:opacity-50 backdrop-blur-sm flex items-center space-x-2"
              >
                <Brain className="w-5 h-5" />
                <span>{isAnalyzing ? 'Analisando...' : 'Análise IA'}</span>
              </button>
            </div>

            {/* 3D Scene */}
            <div 
              ref={canvasRef}
              className="w-full h-full relative"
              style={{ perspective: '1200px' }}
            >
              {/* Grid Background */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '60px 60px'
                }}></div>
              </div>

              {/* Connection Lines */}
              {showConnections && components.map(component => 
                component.connections.map(connectionId => {
                  const connectedComponent = components.find(c => c.name.toLowerCase().includes(connectionId.toLowerCase()));
                  return connectedComponent ? (
                    <ConnectionLine 
                      key={`${component.id}-${connectedComponent.id}`}
                      from={component} 
                      to={connectedComponent} 
                    />
                  ) : null;
                })
              )}

              {/* 3D Components */}
              {components.map((component) => (
                <Component3DView
                  key={component.id}
                  component={{
                    ...component,
                    position: viewMode === 'exploded' 
                      ? { 
                          x: component.position.x * 2.5, 
                          y: component.position.y * 2.5, 
                          z: component.position.z * 2.5 
                        }
                      : component.position
                  }}
                  isSelected={selectedComponent?.id === component.id}
                />
              ))}
            </div>

            {/* Analysis Overlay */}
            {isAnalyzing && (
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-40 backdrop-blur-sm">
                <div className="bg-gray-800/90 p-8 rounded-3xl text-center border border-white/10 backdrop-blur-sm">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Brain className="w-8 h-8 text-white animate-pulse" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">E.L.L.E.N A.I Processando</h4>
                  <p className="text-blue-300 mb-6 text-lg">
                    {[
                      'Inicializando E.L.L.E.N A.I...',
                      'Escaneando componentes de hardware...',
                      'Analisando temperaturas e voltagens...',
                      'Verificando integridade das conexões...',
                      'Executando testes de stress...',
                      'Diagnosticando problemas potenciais...',
                      'Calculando índices de saúde...',
                      'Gerando relatório detalhado...',
                      'Análise completa finalizada!'
                    ][analysisStep]}
                  </p>
                  <div className="w-64 bg-gray-700 rounded-full h-3 mb-4">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${(analysisStep / 8) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-400">{Math.round((analysisStep / 8) * 100)}% concluído</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Component Details Panel */}
        <div className="space-y-6">
          {/* Selected Component Details */}
          {selectedComponent ? (
            <div className="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  {getComponentIcon(selectedComponent.type)}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg">{selectedComponent.name}</h4>
                  <p className="text-sm text-gray-400">{selectedComponent.manufacturer} • {selectedComponent.model}</p>
                  <div className={`flex items-center space-x-2 text-sm mt-1 ${getStatusColor(selectedComponent.status)}`}>
                    {selectedComponent.status === 'normal' && <CheckCircle className="w-4 h-4" />}
                    {selectedComponent.status === 'warning' && <AlertTriangle className="w-4 h-4" />}
                    {selectedComponent.status === 'error' && <AlertTriangle className="w-4 h-4" />}
                    <span className="capitalize font-medium">{selectedComponent.status}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-6 leading-relaxed">{selectedComponent.description}</p>

              {/* Status Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-700/50 p-4 rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <Thermometer className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium">Temperatura</span>
                  </div>
                  <div className={`text-xl font-bold ${getTemperatureColor(selectedComponent.temperature)}`}>
                    {selectedComponent.temperature}°C
                  </div>
                </div>
                
                <div className="bg-gray-700/50 p-4 rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <Activity className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-medium">Saúde</span>
                  </div>
                  <div className={`text-xl font-bold ${
                    selectedComponent.health > 90 ? 'text-green-400' :
                    selectedComponent.health > 70 ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {selectedComponent.health}%
                  </div>
                </div>

                <div className="bg-gray-700/50 p-4 rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <Power className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-medium">Consumo</span>
                  </div>
                  <div className="text-xl font-bold text-yellow-400">
                    {selectedComponent.powerConsumption}W
                  </div>
                </div>

                <div className="bg-gray-700/50 p-4 rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-medium">Garantia</span>
                  </div>
                  <div className="text-sm font-bold text-purple-400">
                    {selectedComponent.warranty}
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="mb-6">
                <h5 className="font-semibold text-sm mb-3 flex items-center">
                  <Info className="w-4 h-4 mr-2 text-blue-400" />
                  Especificações Técnicas
                </h5>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {selectedComponent.specifications.map((spec, index) => (
                    <div key={index} className="text-xs text-gray-400 flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connections */}
              <div>
                <h5 className="font-semibold text-sm mb-3 flex items-center">
                  <Wifi className="w-4 h-4 mr-2 text-purple-400" />
                  Conexões Ativas
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedComponent.connections.map((connection, index) => (
                    <span key={index} className="text-xs bg-purple-600/30 border border-purple-500/50 px-3 py-1 rounded-full">
                      {connection}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-800/50 rounded-2xl p-8 text-center backdrop-blur-sm border border-white/10">
              <Target className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-300 mb-2">Selecione um Componente</h4>
              <p className="text-gray-400 text-sm">Clique em qualquer componente para ver informações detalhadas</p>
            </div>
          )}

          {/* Component List */}
          <div className="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
            <h4 className="font-semibold mb-4 flex items-center">
              <Search className="w-5 h-5 mr-2 text-blue-400" />
              Componentes do Sistema
            </h4>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {components.map((component) => (
                <button
                  key={component.id}
                  onClick={() => setSelectedComponent(component)}
                  onMouseEnter={() => setHighlightedComponent(component.id)}
                  onMouseLeave={() => setHighlightedComponent(null)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                    selectedComponent?.id === component.id
                      ? 'bg-blue-600 shadow-lg'
                      : highlightedComponent === component.id
                      ? 'bg-purple-600/50'
                      : 'bg-gray-700/50 hover:bg-gray-600/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 flex items-center justify-center">
                        {getComponentIcon(component.type)}
                      </div>
                      <div>
                        <span className="text-sm font-medium block">{component.name.split(' ').slice(0, 3).join(' ')}</span>
                        <span className="text-xs text-gray-400">{component.manufacturer}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${getStatusBgColor(component.status)}`}></div>
                      <span className={`text-xs font-medium ${getTemperatureColor(component.temperature)}`}>
                        {component.temperature}°C
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
            <h4 className="font-semibold mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-yellow-400" />
              Ações Rápidas
            </h4>
            <div className="space-y-3">
              <button className="w-full p-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-xl text-sm font-medium transition-all duration-300 shadow-lg">
                Executar Diagnóstico Completo
              </button>
              <button className="w-full p-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl text-sm font-medium transition-all duration-300 shadow-lg">
                Gerar Relatório de Saúde
              </button>
              <button className="w-full p-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl text-sm font-medium transition-all duration-300 shadow-lg">
                Otimizar Performance
              </button>
              <button className="w-full p-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 rounded-xl text-sm font-medium transition-all duration-300 shadow-lg">
                Monitoramento Térmico
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};