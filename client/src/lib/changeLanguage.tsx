function changeLanguage(event: any, i18n: any) {
  event.preventDefault();

  const title = {
    en: 'На Русский',
    ru: 'To English', 
  }
  const element = event.target

  if (i18n && element) {
    const needLanguage = i18n.language === 'en' ? 'ru' : 'en'

    i18n.changeLanguage(needLanguage);
    element.title = title[needLanguage];
  }
}

export default changeLanguage;