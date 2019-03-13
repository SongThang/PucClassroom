export function getDaysSchedule(days) {
    let daysInput = Object.keys(days).map(function(key) {
      return { name: key, value: days[key] };
    });
    daysInput = daysInput.filter(m => m.value === true);
    let result = "";
    if(daysInput.length==0)return result;
    daysInput.forEach(item => {
      if (item.name === "monday") result = result + "Mon / ";
      else if (item.name.toLowerCase() === "tuesday") result = result + "Tue / ";
      else if (item.name.toLowerCase() === "friday") result = result + "Fri / ";
      else if (item.name.toLowerCase() === "saturday") result = result + "Sat / ";
      else if (item.name.toLowerCase() === "sunday") result = result + "Sun / ";
      else if (item.name.toLowerCase() === "thursday") result = result + "Thu / ";
      else result = result + "Wed / ";
    });
    if (result.length > 3) result = result.substring(0, result.length - 3);
    return result;
  }