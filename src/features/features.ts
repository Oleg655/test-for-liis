export const generateMonth = (stringDate: string, ArrayMonths: string[]) => {
    const arrayData = stringDate.split('-').reverse()
    const headerDate = `${arrayData[0]} ${ArrayMonths[Number(arrayData[1]) - 1]} ${arrayData[2]}`
    return headerDate
}


export const generateDate = (date: string, days: string) => {
    let newDate = new Date(date)
    newDate.setDate(newDate.getDate() + Number(days))
    const result = generateToday(newDate)
    return result
}


export const generateNameForDays = (countSelectedHotels: number) => {
    if (countSelectedHotels === 1) {
        return 'отель'
    }
    if (countSelectedHotels === 0 || countSelectedHotels > 4) {
        return 'отелей'
    }
    if (countSelectedHotels > 1 && countSelectedHotels < 5) {
        return 'отеля'
    }
}
export const generateToday = (date: Date): string => {
    let stringDate = date.toLocaleDateString()
    if (stringDate.includes('/')) {
        let reverse = stringDate.split('/').reverse()
        const day = reverse[1]
        const month = reverse[2]
        reverse[1] = month
        reverse[2] = day
        return `${reverse[0]}-${Number(reverse[1]) < 10 ? "0" + reverse[1] : reverse[1]}-${
            Number(reverse[2]) < 10 ? "0" + reverse[2] : reverse[2]
        }`
    }
    if (stringDate.includes('.')) {
        let newDate = stringDate.split('.').reverse().join('-')

        return newDate
    }
    return ''
}

