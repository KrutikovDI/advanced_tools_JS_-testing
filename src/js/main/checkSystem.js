
export function checkSystem(data) {
  if (
    data.length == 15 &&
    (data.slice(0, 2) == "34" || data.slice(0, 2) == "37")
  ) {
    return "American_Express";
  } else if (
    (data.length == 16 || data.length == 19) &&
    (data.slice(0, 4) == "6011" ||
      data.slice(0, 2) == "65" ||
      data.slice(0, 3) == "644" ||
      data.slice(0, 3) == "645" ||
      data.slice(0, 3) == "646" ||
      data.slice(0, 3) == "647" ||
      data.slice(0, 3) == "648" ||
      data.slice(0, 3) == "649")
  ) {
    return "Discover";
  } else if (data.slice(0, 3) == 622) {
    if (125 < Number(data.slice(3, 3)) < 926) {
      return "Discover";
    } else {
      alert("нет такой системы");
    }
  } else if (
    data.slice(0, 1) == "4" &&
    (data.length == 13 || data.length == 16 || data.length == 19)
  ) {
    return "visa";
  } else if (
    3527 < Number(data.slice(0, 4)) &&
    Number(data.slice(0, 4)) < 3590 &&
    (data.length == 16 || data.length == 19)
  ) {
    return "JCB";
  } else if (
    (data.slice(0, 4) == "5018" ||
      data.slice(0, 4) == "5020" ||
      data.slice(0, 4) == "5038" ||
      data.slice(0, 4) == "5893" ||
      data.slice(0, 4) == "6304" ||
      data.slice(0, 4) == "6759" ||
      data.slice(0, 4) == "6761" ||
      data.slice(0, 4) == "6762" ||
      data.slice(0, 4) == "6763") &&
    (data.length == 16 || data.length == 19)
  ) {
    return "Maestro";
  } else if (
    data.length == 16 &&
    (data.slice(0, 2) == "51" ||
      data.slice(0, 2) == "52" ||
      data.slice(0, 2) == "53" ||
      data.slice(0, 2) == "54" ||
      data.slice(0, 2) == "55" ||
      (222990 < Number(data.slice(0, 6)) && Number(data.slice(0, 6)) < 272100))
  ) {
    return "MasterCard";
  } else {
    alert("нет такой системы");
  }
}
