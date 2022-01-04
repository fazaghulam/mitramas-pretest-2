export default function CardData({ item }) {
  return (
    <div className="relative bg-white shadow-lg rounded-lg h-40 w-full px-6 py-4 cursor-pointer">
      <div className="flex justify-end">
        <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </div>
      <div className="flex">
        <p className="mr-2 font-semibold">Name:</p>
        <p>{item.name}</p>
      </div>
      <div className="flex mt-3">
        <p className="mr-2 font-semibold">Description:</p>
        <p className="truncate">{item.description}</p>
      </div>
      <div className="flex mt-3">
        <p className="mr-2 font-semibold">Status:</p>
        <p>{item.status.toString()}</p>
      </div>
    </div>
  );
}
