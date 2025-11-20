  export const OPTIONS = {
  method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_rapidAPIKey,
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

export const saveWeather = (city, code, date, temperature, description) => {
  let hours = new Date().getHours().toString().padStart(2, "0");
  let mins = new Date().getMinutes().toString().padStart(2, "0");
  let seconds = new Date().getSeconds().toString().padStart(2, "0");

  let time = `${hours}:${mins}:${seconds}`;
  let data = {
    city,
    code,
    date,
    time: time,
    temperature,
    description,
  };
  let existingData = localStorage.getItem("weatherHistory");
  existingData = JSON.parse(existingData);

  if (existingData == null) {
    existingData = [];
      existingData.push( data );
      console.log( data );
    localStorage.setItem("weatherHistory", JSON.stringify(existingData));
  } else {
    existingData.push(data);
    localStorage.setItem("weatherHistory", JSON.stringify(existingData));
  }
};

