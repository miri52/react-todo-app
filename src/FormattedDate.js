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
        {date.date} {month} {date.year}
      </div>
      <div className='day'>{day}</div>
    </div>
  );
}

export default FormattedDate;
