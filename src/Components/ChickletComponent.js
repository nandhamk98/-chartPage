export function ChickletComponent({ name, number, icon, color }) {
  const styleBorder = {
    borderLeft: `solid 5px ${color}`,
  };

  const fontColor = {
    color: color,
  };
  return (
    <div className="chickletComponent" style={styleBorder}>
      <div className="chickletDataContainer">
        <p className="chickletName" style={fontColor}>
          {name}
        </p>
        <p className="chickletNumber">{number}</p>
      </div>
      <div className="chickletIconConatiner">
        <span className="material-symbols-outlined chickletIcon">{icon}</span>
      </div>
    </div>
  );
}
