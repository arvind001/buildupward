import axios from "axios";

export const getCalculation = async (inputs) => {
  let formData = new FormData();
  console.log("wht is form", formData);
  for (const [key, value] of Object.entries(inputs)) {
    formData.append(`${key}`, value);
    // console.log("i am being called2", key, value);
  }

  try {
    let result = await axios.post(
      "https://build-better-flask-app.herokuapp.com/bldDataCalculator",
      formData
    );
    return result;
  } catch (e) {
    throw e;
  }

  //   let result = await axios.get("https://build-better-flask-app.herokuapp.com/");

  //   let result = await fetch(
  //     "https://build-better-flask-app.herokuapp.com/LL97Calculator",
  //     {
  //       method: "POST",
  //       body: formData,
  //     }
  //   );
};
