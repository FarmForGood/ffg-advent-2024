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
        <div className="door-back flex flex-col p-2">
          <span className="text-xl text-center">{word}</span>
          <span className="text-xs text-gray-600 text-center">
            Cliquez pour en savoir plus...
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Door;
