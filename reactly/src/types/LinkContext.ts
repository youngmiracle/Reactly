import { useContext, createContext } from 'react';

export type LinkContextType = "Home" | "OilSearch" | "Products" | "Contacts" | "Products/MotorOil" | "Products/TransmissionOil" | "Products/CommercialOil" | "Products/Antifreeze" ;
//Объединение (Unions) - для глобального контекста "Link", в файлах Header.tsx, MainPage.tsx и т.д.

export interface LinkContextInterface{
    nameLink: "Home" | "OilSearch" | "Products" | "Contacts" | "Products/MotorOil" | "Products/TransmissionOil" | "Products/CommercialOil" | "Products/Antifreeze";
    setNameLink?: any
}
//interface - для глобального контекста "Link" и его useState

export const LinkContext = createContext<LinkContextInterface>({nameLink: "Home"});
//Экспортируем переменную, которая создаёт глобальный контекст с дженериком LinkContextInterface и используется в файле App.tsx
export const useLinkContext = () => useContext(LinkContext) 
//Экспортируем переменную, которая с помощью react хука создаёт связь с глобальным контекстом