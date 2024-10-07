export default function Menu() {
    const date = new Date();
    const CurrentDate = date.toLocaleDateString();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return (
        <div className="Menu">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/calendar">Calendar</a></li>
                <li><a href={`/calendarDetail/${day}/${month}/${year}`}>Today's</a></li>
                <li><a href="/priority">Priority</a></li>
                <li><a href="/search">Search</a></li>
            </ul>
        </div>
    );
}