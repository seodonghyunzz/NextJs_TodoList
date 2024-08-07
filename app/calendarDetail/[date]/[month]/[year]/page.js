export default function CalendarDetail({params}) {
    const date = params.date;
    const month = params.month;
    const year = params.year;
    return (
        <div className="CalendarDetail">
            <h1>{year}년 {month}월 {date}일</h1>
        </div>
    );
}