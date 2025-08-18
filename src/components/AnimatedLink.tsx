import { Link } from "react-router-dom";
import { Children, type ReactNode } from "react";


interface AnimatedLInkProps {
    to: string,
    children: string,
   
   
}

 const  AnimatedLink = ({to, children}: AnimatedLInkProps) =>{
   
    return (
      <Link
        to={to}
        
        className="relative font-bold inline-block pb-1
    after:content-[''] after:absolute after:bottom-0 after:left-0 
    after:w-0 after:h-[2px] after:bg-gold 
    after:transition-all after:duration-300 hover:after:w-full"
      >
        {children}
      </Link>
    );

}
 export default AnimatedLink;