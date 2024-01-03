const NoDishFound = () => {
  return (
    <div>
      <div className="fixed right-[0.0000001%] w-screen ">
        <div className="  borde mx-auto flex w-[45%] flex-col flex-wrap items-center justify-center   rounded-2xl border-black bg-red-600 p-4 shadow-lg shadow-gray-400">
          <img
            src="https://www.svgrepo.com/show/297772/plate.svg"
            className="h-20"
            alt=""
          />
          <p className="py-10 text-xl font-bold text-white ">No Dish Found</p>
        </div>
      </div>
    </div>
  );
};

export default NoDishFound;
