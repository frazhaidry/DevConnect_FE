const FeedShimmer = () => {
  const shimmerCards = Array.from({ length: 8 });

  return (
    <div className="grid m-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {shimmerCards.map((_, index) => (
        <div
          key={index}
          className="animate-pulse bg-[#EBE5C2] rounded-2xl p-5 shadow-lg border border-[#E5DFB9] flex flex-col items-center"
        >
          {/* Profile image */}
          <div className="h-24 w-24 rounded-full bg-[#d5cfaa] mb-4" />

          {/* Name line */}
          <div className="h-4 bg-[#d5cfaa] rounded w-2/3 mb-2" />

          {/* Title/Position line */}
          <div className="h-3 bg-[#d5cfaa] rounded w-1/2 mb-4" />

          {/* Skill tags / badge lines */}
          <div className="flex gap-2 mb-4 w-full justify-center">
            <div className="h-3 w-1/4 bg-[#d5cfaa] rounded" />
            <div className="h-3 w-1/4 bg-[#d5cfaa] rounded" />
            <div className="h-3 w-1/4 bg-[#d5cfaa] rounded" />
          </div>

          {/* Connect / View Profile button */}
          <div className="h-8 bg-[#d5cfaa] rounded w-full mt-auto" />
        </div>
      ))}
    </div>
  );
};

export default FeedShimmer;
