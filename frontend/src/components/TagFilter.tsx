import React, { useState } from 'react';

interface Tag {
  label: string;
  color: string;
}

const tags: Tag[] = [
  { label: 'Gym', color: 'bg-blue-500' },
  { label: 'Travel', color: 'bg-green-500' },
  { label: 'Work', color: 'bg-yellow-500' },
  { label: 'Personal', color: 'bg-red-500' },
];

const TagFilter: React.FC = () => {
  // Use array for multiple selections or string for single selection
  const [selectedTag, setSelectedTag] = useState<string | null>(null); // Single tag selection
  
  // If you want to handle multiple tag selection, uncomment the next line:
  // const [selectedTags, setSelectedTags] = useState<string[]>([]); // Multiple tag selection

  const handleTagClick = (tag: string) => {
    // For single tag selection:
    setSelectedTag(selectedTag === tag ? null : tag);

    // For multiple tag selection (if you want to support it):
    // setSelectedTags(prevTags => 
    //   prevTags.includes(tag) ? prevTags.filter(t => t !== tag) : [...prevTags, tag]
    // );
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg h-[25vh] flex flex-col justify-center">
      <h2 className="text-xl font-semibold mb-4">Tag Filter Card</h2>
      <p className="mb-4 text-gray-700">
        Select a tag to filter content. Selected tag: 
        <span className="font-bold">
          {selectedTag ? ` ${selectedTag}` : ' None'}
        </span>
      </p>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <button
            key={tag.label}
            aria-pressed={selectedTag === tag.label}  // For accessibility
            className={`px-4 py-2 rounded text-white ${tag.color} ${
              selectedTag === tag.label ? 'ring-2 ring-offset-2 ring-gray-400' : ''
            } hover:opacity-90 transition`}
            onClick={() => handleTagClick(tag.label)}  // Handle click to toggle selection
          >
            {tag.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagFilter;
