export const date_to_string = (date: Date): string => {
    let day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;

    let month = (date.getMonth() + 1).toString();
    month = month.length > 1 ? month : "0" + month;
    
    return day + "." + month + "." + date.getFullYear().toString()
}