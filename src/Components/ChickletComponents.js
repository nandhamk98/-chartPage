import { ChickletComponent } from "./ChickletComponent";

export function ChickletComponents() {
  const data = [
    {
      name: "EARNINGS (MONTHLY)",
      number: "$100,000",
      color: "#4e73df",
      icon: "work",
    },
    {
      name: "EARNINGS (ANNUAL)",
      number: "$215,000",
      color: "#1cc88a",
      icon: "attach_money",
    },
    {
      name: "TASKS",
      number: "$100,000",
      color: "#36b9cc",
      icon: "task",
    },
    {
      name: "PENDING REQUESTS",
      number: "$100,000",
      color: "#f6c23e",
      icon: "forum",
    },
  ];

  return (
    <div className="chickletContainer">
      {data.map((chicklet) => (
        <ChickletComponent
          name={chicklet.name}
          color={chicklet.color}
          number={chicklet.number}
          icon={chicklet.icon}
          key={chicklet.name}
        />
      ))}
    </div>
  );
}
