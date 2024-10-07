'use client'
import TodoTable from "../component/todotable";
import { useState } from "react";
export default function Search() {
    const [searchText, setSearchText] = useState("");
    const [searchData, setSearchData] = useState("");
    const handleSearch = async (searchText) => {
        try {
          const response = await fetch(`http://localhost:3000/api/search?search=${searchText}`, {
            cache: 'no-store',
          });
          const data = await response.json(); 
          setSearchData(data.data);
          setSearchText("");
        } catch (error) {
          console.error(error);
        }
      }
    
    return (
        <div className="Search">
            <div className="SearchInput">
                <input 
                    type="text"
                    placeholder="Search the plan..."
                    onChange={(e) => setSearchText(e.target.value)}
                    value={searchText}
                    onKeyUp={(e) => e.key === "Enter" && handleSearch(searchText)}
                />
                <button onClick={() => handleSearch(searchText)}>Search</button>
            </div>
            <div className="TodoTable">
                {searchData && (
                    <TodoTable fetchedtodos={searchData} />
                )}
            </div>
        </div>
    );
}