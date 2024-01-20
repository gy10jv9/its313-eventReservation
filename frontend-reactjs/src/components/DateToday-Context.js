import React, { createContext } from "react";

const dateToday = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
})

export const DateToday_Context = createContext(dateToday)