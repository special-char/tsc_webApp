import React from "react";

const ProjectsPageSkeleton = () => {
  return (
    <div class="max-w-7xl mx-auto rounded-3xl py-8 shadow-dark w-full mb-8">
      <div class="animate-pulse flex gap-4 items-center space-x-4 px-8">
        <div class="bg-neutral-300 h-80 w-80"></div>
        <div class="flex-1 space-y-4 py-1">
          <div class="h-2 bg-neutral-300 rounded"></div>
          <div class="h-2 bg-neutral-300 rounded"></div>
          <div class="h-2 bg-neutral-300 rounded"></div>
          <div class="h-2 bg-neutral-300 rounded"></div>
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-neutral-300 rounded col-span-2"></div>
            <div class="h-2 bg-neutral-300 rounded col-span-1"></div>
          </div>
          <div class="h-2 bg-neutral-300 rounded"></div>
          <div class="h-2 bg-neutral-300 rounded"></div>
          <div class="h-2 bg-neutral-300 rounded"></div>
          <div class="h-2 bg-neutral-300 rounded"></div>
          <div class="h-2 bg-neutral-300 rounded"></div>
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-neutral-300 rounded col-span-2"></div>
            <div class="h-2 bg-neutral-300 rounded col-span-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPageSkeleton;
