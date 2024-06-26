const GetInvolved = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="container px-4 mx-auto">
          <div className="mb-8 text-center">
            <span className="text-4xl font-semibold md:text-5xl text-footer">
              Get{" "}
            </span>
            <span className="text-4xl font-bold md:text-5xl text-red">
              Involved
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:justify-center md:space-x-8">
            <div className="flex flex-col items-center mb-8 md:mb-0">
              <a
                href="https://forms.gle/X37mWwG3roZt8jpL8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-4"
              >
                <div className="bg-red rounded-2xl w-[200px] h-[50px] flex justify-center items-center transition-transform duration-300 ease-in-out transform hover:-translate-y-2">
                  <span className="text-white">Join Our Family</span>
                </div>
              </a>
              <p className="text-gray-600">Become a part of our community</p>
            </div>
            <div className="flex flex-col items-center">
              <a
                href="https://forms.gle/TS5HGLAW9AeH86x29"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-4"
              >
                <div className="bg-red rounded-2xl w-[200px] h-[50px] flex justify-center items-center transition-transform duration-300 ease-in-out transform hover:-translate-y-2">
                  <span className="text-white">Leave a Message</span>
                </div>
              </a>
              <p className="text-gray-600">
                Share your thoughts and suggestions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
