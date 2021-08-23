import { useEffect, useState } from "react";

export default function useFetch(url) {
  //   console.log(dummy);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [url]);
  return data;
}
