const SkeletonCartItem = () => {
  return (
    <li className="flex items-center gap-4">
      <div className=" h-16 w-16 bg-slate-200 animate-pulse rounded-lg" />

      <div>
        <h3 className="h-[20px] w-[100px] sm:w-[200px] bg-slate-200 rounded-lg animate-pulse"></h3>

        <div>
          <dt className="h-[20px] mt-2 w-[100px] sm:w-[200px] bg-slate-200 rounded-lg animate-pulse"></dt>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-end gap-2">
        <form>
          <div className="h-8 w-12 rounded-lg  bg-gray-200 animate-pulse " />
        </form>

        <button className="w-4 h-4 bg-slate-200 rounded  animate-pulse"></button>
      </div>
    </li>
  );
};

export default SkeletonCartItem;
