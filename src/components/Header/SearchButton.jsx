const SearchButton = () => {
  return (
    <div>
      <div className="flex items-center rounded-full border-gray-500 bg-gray-100 px-4 py-1 shadow-lg shadow-gray-200 ">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          height="20px"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 6a5 5 0 015 5m.659 5.655L21 21m-2-10a8 8 0 11-16 0 8 8 0 0116 0z"
            strokeLinecap="round"
            strokeWidth="2"
          />
        </svg>{" "}
        Search
      </div>
    </div>
  );
};

export default SearchButton;
