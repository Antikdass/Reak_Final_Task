export const setCorrectData = (value:any) => {
    return{
        id:value.id,
        firstName:value.name.split(' ')[0],
        lastName:value.name.split(' ')[1],
        website:value.website,
        company:value.company.name,
        email:value.email,
    }
}