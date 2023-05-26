import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const WeatherWidget = () => {
  const [cordinates, setCordinates] = useState({});
  const [errMsg, seterrMsg] = useState('');
  const [loading, setLoading] = useState(true);
  

  const getCurrentPosition = async () => {
    if ((window, navigator.geolocation)) {
      await window.navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("current location", position.coords);
          setCordinates(position.coords)
          setLoading(false);
        },
        (err) =>{
          console.log("error from geolocation>>",err.message, )
          seterrMsg(err.message);
          setLoading(false);
        } 
      );

      console.log("geoplocation is  supportted");
    } else {
      seterrMsg("geoplocation is not supportted");
      setLoading(false);
    }
  };

  useEffect(() => {
    getCurrentPosition();
  }, []);

  return (
    <div className="p-2 m-2 h-[500px] min-w-[500px] bg-gray-900">
      {/* WeatherWidget */}
      <div className="flex h-full items-center justify-center bg-transparent">
        {loading && <Loader />}
        <p className="bg-transparent text-sm">{errMsg}</p>
      </div>
    </div>
  );
};

export default WeatherWidget;
