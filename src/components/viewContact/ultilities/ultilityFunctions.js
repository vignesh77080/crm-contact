export const splitFunction = (fullname) =>{
    let full = fullname.trim().split(' ');
    let firstLet = full[0][0]
    let secondLet = full.length > 1 ? full[1][0] : full[0][fullname.length - 1];
    return firstLet+secondLet
}

export const randomColor = () =>{
    return Math.floor(Math.random() * 16777216).toString(16)
}

export const findLogged = (arrList) =>{
    let findLogged = arrList.filter(items => items.logged === true);
    let loggedName = findLogged.length > 0 ? findLogged[0].FullName : null
    return loggedName
}