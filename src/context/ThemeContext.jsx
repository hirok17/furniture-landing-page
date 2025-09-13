/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const ThemeContext =createContext();

const ThemeProvider=({children})=>{
    const [isDarkMode, setIsDarkMode] =useState(false);
    const [cartItem, setCartItem] =useState([]);

    const addToproduct =(product)=>{
        if(cartItem.some(item=>item.id ===product.id)){
           toast.error("already existing product")
        
        }else{
            setCartItem(prev=>[...prev, product]);
           toast.success('Successfully added');
        }
    }
    const totallItem =cartItem.length;
    const toggleTheme =()=>{
        setIsDarkMode(!isDarkMode);
    }

    useEffect(()=>{
        if(isDarkMode){
            document.body.classList.add('dark');
        }else{
             document.body.classList.remove('dark');
        }
           
        

    }, [isDarkMode])

    return (
        <ThemeContext.Provider value={{isDarkMode, toggleTheme, totallItem, addToproduct}}>
            {children}
        </ThemeContext.Provider>
    )

}
export default ThemeProvider;