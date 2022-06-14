import PaginationButtons from "./PaginationButtons";
import Image from "next/image";

const SearchResults = ({ results, imageResults }) => {
  console.log(results);
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-md mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      <div className="lg:flex">

        <div className="mb-8 max-w-xl">

        {results.items?.map((result) => {
          return (
            <div key={result.link} className="seachresult_list">
              <div className="group">
                <a
                  href={result.link}
                  className="text-sm"
                  rel="noreferrer"
                >
                  {result.formattedUrl}
                </a>
                <a href={result.link} rel="noreferrer">
                  <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
                    {result.title}
                  </h2>
                </a>
              </div>
              <p className="line-clamp-2">{result.snippet}</p>
              {/*result.pagemap.cse_image?
                result.pagemap.cse_image.length &&
                    <image
                      src={result.pagemap.cse_image[0].src}
                      width={400}
                      height={300}
                    />
              :''*/}
            </div>
          );
        })}

        </div>

        <div className="mb-4 max-w-lg" style={imageResults.Heading=="" || imageResults.Image == ""?{display: 'none'}: {}}>
          <div className="border p-4 min-h-fit rounded-lg lg:ml-14">
              <a href={imageResults.AbstractURL} className="float-right ml-4 mb-4"><img className="rounded-lg z-a" width={imageResults.ImageWidth*0.5} height={imageResults.ImageHeight*0.5} src={imageResults.Image == "" ? null :'https://duckduckgo.com' + imageResults.Image} style={imageResults.Image==""?{display: 'none'}: {}}/></a>
              <div className="text-2xl font-bold clear-left"><a href={imageResults.AbstractURL}>{imageResults.Heading}</a></div>
              <div className="max-w-md"><p className="break-words clear-left">{imageResults.AbstractText}</p></div>
          </div>
        </div>
      </div>
      <PaginationButtons />
    </div>
  );
};

export default SearchResults;
