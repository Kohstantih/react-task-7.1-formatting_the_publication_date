export default function dateCustomizer(date: string) {
    let result = date;

    const convertDate = new Date(date).getTime();
    const dateNow = new Date().getTime();
    const dif = dateNow - convertDate;
    
    if (dif < 3600000) result = `${Math.floor(dif/60000)} минут назад`;
    if (dif >= 3600000 && dif < 86400000) result = `${Math.floor(dif/3600000)} часов назад`;
    if (dif > 86400000) result = `${Math.floor(dif/86400000)} дней назад`;

    return { date: result };
}