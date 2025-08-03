import { type ButtonProps } from "../../interfaces";

 const Button: React.FC <ButtonProps> = ({size, shape}) => {
  return (
    <>
  
     <button className={shape}>{size}</button>
    
    </>
  );
 }

 export default Button;