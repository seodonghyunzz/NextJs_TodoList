const TodayDate = () => {
  const date = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const CurrentDate = date.toLocaleDateString(undefined, options);

  return (
    <div className='Date_Area'>
      <p>{CurrentDate}</p>
    </div>
  );
};

export default TodayDate;