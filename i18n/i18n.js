let text = "My bane is {fullName}. I am from {city}.";

let data = {
    id : "1",
    fullName : "Taehee Kim", 
    city : "Seoul",
    company : "sweet my home"
}; 

let i18n = {
    en: {
        text : text
    }, 
    ko : {
        text : "제 이름은 {fullName}입니다. {city}에서 왔습니다."
    }
}

const userLanguage = "ko";

function t (form, params = {}) {
    return form.replace(/{[^}]*}/g, match => {
        console.log(match.slice(1, -1))
        return params[match.slice(1,-1)]
    })
}

// console.log(t(text, data))
const translate = t(i18n[userLanguage].text, data)
console.log("한국번역 :", translate)

