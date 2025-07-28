import { type CardProps } from "@/interfaces";

const Card: React.FC <CardProps> = ({ title, content}) => {
  return (
    <>
    <div className="items-center">
        <h1 className="text-xl font-bold">{title}</h1>
        <div>
            {content}
        </div>
    </div>
    </>
  );
}


export default Card;