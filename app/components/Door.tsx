import Link from "next/link";

interface DoorProps {
  day: number;
  url: string;
  word: string;
}

const Door: React.FC<DoorProps> = ({ day, url, word }) => {
  return (
    <Link href={url} className="door-container" target="_blank">
      <div className="door">
        <div className="door-front">
          <span className="text-2xl font-bold">{day}</span>
        </div>
        <div className="door-back">
          <span className="text-2xl font-bold text-center">{word}</span>
        </div>
      </div>
    </Link>
  );
};

export default Door;
