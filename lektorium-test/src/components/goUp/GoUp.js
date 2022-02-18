import React, { useEffect, useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { Button } from './GoUp.style'

const GoUp = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 1200){
            setVisible(true);
        } 
        else if (scrolled <= 1200){
            setVisible(false);
        }
     };

     const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };

     useEffect(() => {
         window.addEventListener('scroll', toggleVisible)
         return () => {
             window.removeEventListener('scroll', toggleVisible)
         }
     },[visible])

  return (
    <Button 
        style={{display: visible ? 'flex' : 'none'}} 
        onClick={scrollToTop}><IoIosArrowUp /></Button>
  )
}

export default GoUp