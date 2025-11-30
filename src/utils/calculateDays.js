export function calculateDays(hrFrame) {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  let weekInfo = []
  let j = 0
  let lastDay = daysOfWeek[new Date(hrFrame[0].dt_txt).getDay()]
  for (let i = 0; i < hrFrame.length; i++) {
    // Get current day to check
    const currentDay = new Date(hrFrame[i].dt_txt)
    const weekDay = daysOfWeek[currentDay.getDay()]
    // Check where to put each day and what to place inside of it
    if (!weekInfo[j]) {
      weekInfo.push({
        month: currentDay.getMonth() + 1,
        day: currentDay.getDate(),
        weekDay: weekDay,
        max: hrFrame[i].main.temp_max,
        min: hrFrame[i].main.temp_min,
      })
    } else {
      weekInfo[j] = {
        ...weekInfo[j],
        max:
          weekInfo[j].max > hrFrame[i].main.temp_max
            ? weekInfo[j].max
            : hrFrame[i].main.temp_max,
        min:
          weekInfo[j].min < hrFrame[i].main.temp_min
            ? weekInfo[j].min
            : hrFrame[i].main.temp_min,
      }
    }
    if (lastDay !== weekDay) j++
    lastDay = weekDay
  }
  return weekInfo
}
