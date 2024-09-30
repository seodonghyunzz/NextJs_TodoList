export default function Search() {
    return (
        <div className="Search">
            <div className="SearchInput">
                <input type="text" placeholder="Search the plan..."/>
                <button>Search</button>
            </div>
            <div className="SearchList">
                <p>index</p>
                <p>date(mm/dd)</p>
                <p>text</p>
                <p>priority</p>
                <p>v</p>
            </div>
        </div>
    );
}