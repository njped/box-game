export default function LatitudeAndLongitudeInput({
  latitude,
  setLatitude,
  longitude,
  setLongitude,
}) {
  const updateLatitude = (e) => {
    const newLatitude = Number(e.target.value);

    setLatitude(newLatitude);
  };

  const updateLongitude = (e) => {
    const newLongitude = Number(e.target.value);
    setLongitude(newLongitude);
  };

  return (
    <div>
      <label>Select Latitude and Longitude</label>
      <div>
        Current Latitude {latitude}, Current longitude {longitude}
      </div>
      <input
        min={-90}
        max={90}
        type="number"
        placeholder="latitude"
        onChange={updateLatitude}
        value={latitude}
      ></input>
      <input
        min={-90}
        max={90}
        type="number"
        placeholder="longitude"
        onChange={updateLongitude}
        value={longitude}
      ></input>
    </div>
  );
}
