import React from 'react';
import { FileText, Folder, Code, Zap } from 'lucide-react';
import { FileNode } from './FileTree';

interface ProjectStatsProps {
  files: FileNode[];
}

export const ProjectStats: React.FC<ProjectStatsProps> = ({ files }) => {
  const calculateStats = (nodes: FileNode[]): {
    totalFiles: number;
    totalFolders: number;
    totalLines: number;
    languages: { [key: string]: number };
  } => {
    let totalFiles = 0;
    let totalFolders = 0;
    let totalLines = 0;
    const languages: { [key: string]: number } = {};

    const traverse = (node: FileNode) => {
      if (node.type === 'file') {
        totalFiles++;
        if (node.content) {
          totalLines += node.content.split('\n').length;
        }
        
        const ext = node.name.split('.').pop()?.toLowerCase();
        if (ext) {
          languages[ext] = (languages[ext] || 0) + 1;
        }
      } else {
        totalFolders++;
        if (node.children) {
          node.children.forEach(traverse);
        }
      }
    };

    nodes.forEach(traverse);
    
    return { totalFiles, totalFolders, totalLines, languages };
  };

  const stats = calculateStats(files);
  const topLanguages = Object.entries(stats.languages)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 p-4 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
        <Zap className="w-5 h-5 mr-2 text-blue-600" />
        Project Statistics
      </h3>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
          <div className="flex items-center">
            <FileText className="w-4 h-4 text-blue-600 mr-2" />
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {stats.totalFiles}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Files</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
          <div className="flex items-center">
            <Folder className="w-4 h-4 text-yellow-600 mr-2" />
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {stats.totalFolders}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Folders</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm col-span-2">
          <div className="flex items-center">
            <Code className="w-4 h-4 text-green-600 mr-2" />
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {stats.totalLines.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Lines of Code</div>
            </div>
          </div>
        </div>
      </div>
      
      {topLanguages.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Top Languages
          </h4>
          <div className="space-y-2">
            {topLanguages.map(([lang, count]) => (
              <div key={lang} className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                  {lang}
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {count} files
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};