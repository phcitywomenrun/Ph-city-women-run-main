import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";

import shape1 from "../../image/shapes/Frame 1686560676.png";
import LoadBlurHashImage from "../../../lazy/loadBlurHash";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "../../link";

function Leader() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postLimit] = useState(3);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState("Less"); // Set default to "Less"

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";

  const query = `{
    leaderBoards {
      id
      slug
      typeOfRun
      date
      locaton
      place
      coverImage {
        url
      }
    }
  }`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, { query });
        setData(response.data.data.leaderBoards);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  // Handle search input to filter by month or year
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle filter selection
  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  // Apply search and filter logic
  const filteredData = data
    .filter((leaderBoard) => {
      const date = new Date(leaderBoard.date);
      const month = date.toLocaleString("default", { month: "long" });
      const year = date.getFullYear().toString();

      // Search filter based on month or year
      return (
        month.toLowerCase().includes(searchTerm.toLowerCase()) ||
        year.includes(searchTerm)
      );
    })
    .filter((leaderBoard, index) => {
      // Filter by the selected option (only display the first 3 items if "Less" is selected)
      if (filterOption === "Less") {
        return index < 3;
      }
      return true;
    });

  return (
    <>
      <section className="relative pt-[61px] bg-white flex justify-center items-center w-full h-auto ">
        <div className="static auto-container gap-[60px] flex flex-col justify-center items-center w-full px-[15px] py-[190px] at500:px-[72px] my-0 mx-auto">
          <div className="flex flex-col at594:flex-row gap-[20px] at594:items-center justify-between w-full ">
            <div className="flex justify-center items-center h-[48px] w-full max-w-[322px] px-[20px] border-[1px] shadow-lg border-[#171B1E33] rounded-[8px] overflow-hidden">
              <input
                className="bg-none h-[48px] w-full focus:outline-none"
                type="text"
                placeholder="Search by month or year"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <span className="flex justify-center items-center gap-[10px] pl-[13px] border-l-[2px]  border-[#E1E6ED] text-[#8D12AB]">
                <FaSearch />
                Search
              </span>
            </div>
            <div>
              <select
                className="flex justify-center items-center h-[40px] px-[13px] border-[1px] shadow-lg border-[#171B1E33] text-[#8D12AB] rounded-[8px]"
                id="events"
                name="events"
                value={filterOption}
                onChange={handleFilterChange}
              >
                <option value="Less">Less</option>
                <option value="All">All</option>
              </select>
            </div>
          </div>

          {/* Display error message if no items are found */}
          {filteredData.length === 0 && (
            <div className="h-[40vh] flex justify-center items-center text-red-500 mt-4">
              <p>No items found for the selected filters.</p>
            </div>
          )}

          <div className="flex  gap-[50px] flex-col justify-center items-center w-full  ">
            <div className="flex gap-[50px] flex-col justify-center items-center w-full">
              {filteredData.map((leaderBoard) => (
                <div
                  key={leaderBoard.id}
                  className="relative bg-white shadow-lg flex flex-col sm:flex-row justify-center items-center md:h-[384px] w-full h-auto rounded-[12px] overflow-hidden"
                >
                  {leaderBoard.coverImage && (
                    <div className="relative flex justify-start items-start h-auto w-full max:w-[603.26px]">
                      <LoadBlurHashImage
                        src={leaderBoard.coverImage.url}
                        blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                        className="w-full h-[516px] silver:w-[540px] object-cover "
                        alt="Discover Your Potential"
                      />
                    </div>
                  )}
                  <div className="relative flex flex-col justify-center items-start sm:items-center gap-[20px] sm:gap-[22px] p-[20px] w-full ">
                    <div className="relative flex flex-col justify-center items-start gap-[20px] max-w-[300px]">
                      <div className="flex gap-[20px] flex-col justify-start items-start w-full">
                        <span className="text-[#353F50]">
                          {leaderBoard.date}
                        </span>
                        <div>
                          <h5 className=" mb-[10px] text-[#111E2F]">
                            {leaderBoard.typeOfRun}
                          </h5>
                          <span className="text-[#4E5A6C]">
                            {leaderBoard.locaton}
                          </span>
                          <p className="text-[20px] leading-[24.8px] text-[#848F9F]">
                            {leaderBoard.place}
                          </p>
                        </div>
                      </div>
                      <Link to={`/leaderBoards/${leaderBoard.slug}`}>
                        <div className="flex group justify-start items-start w-full">
                          <span className="flex justify-start items-center gap-[5px] group-hover:text-[#848F9F] text-[#8D12AB]">
                            View Leaderboard
                            <GoChevronRight className="relative top-0 text-[#8D12AB] group-hover:right-[-8px] group-hover:text-[#848F9F] w-[20px]" />
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Leader;
