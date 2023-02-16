import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en : {
    translation : {
      "welcome" : "lulumedic beauty project 💅"
    }
  },
  ko : {
    translation : {
      "welcome" : "룰루메딕 뷰티 프로젝트 💅"
    }
  }
}

i18n
.use(initReactI18next)
.init({
  resources, 
  lng: "ko",
})

export default i18n;