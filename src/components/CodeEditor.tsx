import React from 'react';
import { Copy, Download, Eye } from 'lucide-react';

interface CodeEditorProps {
  content: string;
  fileName: string;
  language: string;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({
  content,
  fileName,
  language,
}) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
  };

  const downloadFile = () => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  };

  const getLanguageFromFileName = (fileName: string): string => {
    const ext = fileName.split('.').pop()?.toLowerCase();
    const languageMap: { [key: string]: string } = {
      'js': 'javascript',
      'jsx': 'javascript',
      'ts': 'typescript',
      'tsx': 'typescript',
      'css': 'css',
      'html': 'html',
      'json': 'json',
      'md': 'markdown',
      'py': 'python',
      'java': 'java',
      'cpp': 'cpp',
      'c': 'c',
    };
    return languageMap[ext || ''] || 'text';
  };

  const highlightSyntax = (code: string, lang: string): string => {
    // Simple syntax highlighting for common patterns
    let highlighted = code;
    
    if (lang === 'javascript' || lang === 'typescript') {
      // Keywords
      highlighted = highlighted.replace(
        /\b(const|let|var|function|return|if|else|for|while|class|interface|type|import|export|from|default)\b/g,
        '<span class="text-purple-600 font-medium">$1</span>'
      );
      
      // Strings
      highlighted = highlighted.replace(
        /(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g,
        '<span class="text-green-600">$1$2$1</span>'
      );
      
      // Comments
      highlighted = highlighted.replace(
        /\/\/.*$/gm,
        '<span class="text-gray-500 italic">$&</span>'
      );
      
      highlighted = highlighted.replace(
        /\/\*[\s\S]*?\*\//g,
        '<span class="text-gray-500 italic">$&</span>'
      );
    }
    
    if (lang === 'css') {
      // Properties
      highlighted = highlighted.replace(
        /([a-zA-Z-]+)(?=\s*:)/g,
        '<span class="text-blue-600">$1</span>'
      );
      
      // Values
      highlighted = highlighted.replace(
        /:\s*([^;{}]+)/g,
        ': <span class="text-green-600">$1</span>'
      );
    }
    
    if (lang === 'html') {
      // Tags
      highlighted = highlighted.replace(
        /<\/?([a-zA-Z][a-zA-Z0-9]*)[^>]*>/g,
        '<span class="text-blue-600">$&</span>'
      );
      
      // Attributes
      highlighted = highlighted.replace(
        /([a-zA-Z-]+)(?==)/g,
        '<span class="text-orange-600">$1</span>'
      );
    }
    
    return highlighted;
  };

  const detectedLanguage = getLanguageFromFileName(fileName);
  const highlightedContent = highlightSyntax(content, detectedLanguage);

  return (
    <div className="h-full flex flex-col bg-white dark:bg-gray-900">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <Eye className="w-4 h-4 text-gray-500" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {fileName}
          </span>
          <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded">
            {detectedLanguage}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={copyToClipboard}
            className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
            title="Copy to clipboard"
          >
            <Copy className="w-4 h-4 text-gray-500" />
          </button>
          <button
            onClick={downloadFile}
            className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
            title="Download file"
          >
            <Download className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <pre className="p-4 text-sm font-mono leading-relaxed">
          <code
            dangerouslySetInnerHTML={{
              __html: highlightedContent,
            }}
          />
        </pre>
      </div>
    </div>
  );
};