import Link from "next/link";

interface DoorProps {
  day: number;
  url: string;
}

const Door: React.FC<DoorProps> = ({ day, url }) => {
  return (
    <Link href={url} className="door-container" target="_blank">
      <div className="door">
        <div className="door-front">
          <span className="text-2xl font-bold">{day}</span>
        </div>
        <div className="door-back">
          <span className="text-2xl font-bold">?</span>
        </div>
      </div>
    </Link>
  );
};

export default Door;
