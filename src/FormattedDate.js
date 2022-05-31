function FormattedDate({ date }) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = days[date.day];
  const month = months[date.month - 1];

  return (
    <div className='date-container'>
      <div className='date'>
        <p className='date-number'>{date.date}</p>
        <div>
          <p className='date-month'>{month}</p>
          <p className='date-year'>{date.year}</p>
        </div>
      </div>
      <div className='date-day'>{day}</div>
    </div>
  );
}

export default FormattedDate;
