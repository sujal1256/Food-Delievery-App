const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-24 m-10 w-auto justify-around">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div className="w-52 rounded-md h-80 bg-slate-100" data-testid = "shimmer" key={index}></div>
        ))}
    </div>
  );
};

export default Shimmer;
