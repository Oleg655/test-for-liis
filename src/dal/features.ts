export const generateDate = (date: string, days: string) => {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + Number(days))
    return newDate
}