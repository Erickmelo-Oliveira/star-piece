import React, { useState } from 'react';
import { ChevronRight, ChevronDown, File, Folder, FolderOpen } from 'lucide-react';

export interface FileNode {
  name: string;
  path: string;
  type: 'file' | 'folder';
  children?: FileNode[];
  content?: string;
}

interface FileTreeProps {
  files: FileNode[];
  selectedFile: string | null;
  onFileSelect: (path: string, content: string) => void;
  searchQuery: string;
}

const FileTreeItem: React.FC<{
  node: FileNode;
  level: number;
  selectedFile: string | null;
  onFileSelect: (path: string, content: string) => void;
  searchQuery: string;
}> = ({ node, level, selectedFile, onFileSelect, searchQuery }) => {
  const [isExpanded, setIsExpanded] = useState(level === 0);
  
  const shouldShow = searchQuery === '' || 
    node.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (node.children && node.children.some(child => 
      child.name.toLowerCase().includes(searchQuery.toLowerCase())
    ));

  if (!shouldShow) return null;

  const handleClick = () => {
    if (node.type === 'folder') {
      setIsExpanded(!isExpanded);
    } else if (node.content) {
      onFileSelect(node.path, node.content);
    }
  };

  const getFileIcon = (fileName: string) => {
    const ext = fileName.split('.').pop()?.toLowerCase();
    return <File className="w-4 h-4 text-blue-500" />;
  };

  const isSelected = selectedFile === node.path;

  return (
    <div>
      <div
        className={`flex items-center px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded transition-colors ${
          isSelected ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' : ''
        }`}
        style={{ paddingLeft: `${level * 16 + 8}px` }}
        onClick={handleClick}
      >
        {node.type === 'folder' && (
          <div className="mr-1">
            {isExpanded ? (
              <ChevronDown className="w-4 h-4 text-gray-500" />
            ) : (
              <ChevronRight className="w-4 h-4 text-gray-500" />
            )}
          </div>
        )}
        <div className="mr-2">
          {node.type === 'folder' ? (
            isExpanded ? (
              <FolderOpen className="w-4 h-4 text-yellow-600" />
            ) : (
              <Folder className="w-4 h-4 text-yellow-600" />
            )
          ) : (
            getFileIcon(node.name)
          )}
        </div>
        <span className="text-sm truncate">{node.name}</span>
      </div>
      {node.type === 'folder' && isExpanded && node.children && (
        <div>
          {node.children.map((child) => (
            <FileTreeItem
              key={child.path}
              node={child}
              level={level + 1}
              selectedFile={selectedFile}
              onFileSelect={onFileSelect}
              searchQuery={searchQuery}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const FileTree: React.FC<FileTreeProps> = ({
  files,
  selectedFile,
  onFileSelect,
  searchQuery,
}) => {
  return (
    <div className="h-full overflow-y-auto">
      {files.map((file) => (
        <FileTreeItem
          key={file.path}
          node={file}
          level={0}
          selectedFile={selectedFile}
          onFileSelect={onFileSelect}
          searchQuery={searchQuery}
        />
      ))}
    </div>
  );
};