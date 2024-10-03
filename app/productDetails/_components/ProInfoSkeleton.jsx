const ProInfoSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3">
      <h2 className="w-[400px] h-[32px] bg-slate-200 rounded animate-pulse"></h2>
      <h3 className="h-[28px] w-[50px] bg-slate-200 rounded animate-pulse"></h3>
      <p className="h-[80px] w-[200px] bg-slate-200 rounded animate-pulse"></p>
      <h3 className="h-[28px] w-[100px] bg-slate-200 rounded animate-pulse"></h3>
      <h4 className="h-[72px] w-[160px] bg-slate-200 rounded animate-pulse"></h4>
      <button className="h-[40px] w-[70px] bg-slate-200 rounded animate-pulse"></button>
    </div>
  );
};

export default ProInfoSkeleton;
