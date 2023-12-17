import { FaBriefcaseMedical } from "react-icons/fa";
import { FaBedPulse } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
//utils
export const listOfProducts=[
    {
        productName:"Medicines",
        price:20,
        imageIcon: <FaBriefcaseMedical size={30} color="red"/>
    },
    {
        productName:"Hospital bed",
        price:150,
        imageIcon:<FaBedPulse size={30} color="red"/>
    },
    {
        productName:"Food",
        price:20,
        imageIcon:<IoFastFood size={30} color="red"/>
    },
    {
        productName:"clothes",
        price:45,
        imageIcon:<GiClothes size={30} color="red"/>
    },
 
   
]