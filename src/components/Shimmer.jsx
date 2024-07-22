const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-24 m-10 w-auto ">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div className="w-52 rounded-md h-80 bg-slate-100" key={index}></div>
        ))}
    </div>
  );
};

export default Shimmer;
