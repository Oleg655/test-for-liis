export const generateMonth = (stringDate: string, ArrayMonths: string[]) => {
    const arrayData = stringDate.split('-').reverse()
    const headerDate = `${arrayData[0]} ${ArrayMonths[Number(arrayData[1]) - 1]} ${arrayData[2]}`
    return headerDate
}


export const generateDate = (date: string, days: string) => {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + Number(days))
    return newDate.toLocaleDateString().split('.').reverse().join('-')
}

export const generateNameForDays = (countSelectedHotels: number) => {
    if(countSelectedHotels === 1){
        return 'отель'
    }if(countSelectedHotels === 0 || countSelectedHotels > 4){
        return 'отелей'
    }if(countSelectedHotels > 1 && countSelectedHotels < 5){
        return 'отеля'
    }
}