const translation = {
  "Hi, my name is Naumenko Konstantin and I am an experienced Full Stack developer with 3 years of experience in website development. My core skills include React, TypeScript and JavaScript. I try to constantly self-develop myself to keep up to date with the latest technologies and trends in web development. My main area of work is creating and developing full-featured websites.":
    "Привет, меня зовут Науменко Константин и я опытный Full Stack разработчик с 3-летним опытом разработки сайтов. Мои основные навыки включают React, TypeScript и JavaScript. Я стараюсь постоянно саморазвиваться, чтобы быть в курсе последних технологий и тенденций в веб-разработке. Основная сфера моей деятельности - создание и разработка полнофункциональных веб-сайтов",
  "I strive to constantly improve my skills and delve into different areas of web development. My real motivation is constant self-development and achieving the best results in my profession. I am ready to contribute to your project and apply my experience and knowledge to create a quality and user friendly website. If you have any questions or if you are interested in my collaboration, feel free to contact me. I will be happy to discuss your needs and offer the best solution for you.":
    "Я стремлюсь постоянно совершенствовать свои навыки и углубляться в различные области веб-разработки. Моя настоящая мотивация - постоянное саморазвитие и достижение наилучших результатов в своей профессии. Я готов внести свой вклад в ваш проект и применить свой опыт и знания для создания качественного и удобного сайта. Если у Вас возникли вопросы или Вы заинтересованы в моем сотрудничестве, не стесняйтесь обращаться ко мне. Я буду рад обсудить ваши потребности и предложить наилучшее для вас решение",
  "WhoStoleMySleep's Resume": "WhoStoleMySleep's Резюме",
  Contact: "Контакты",
  Projects: "Проекты",
  "Blog Posts": "Блог",
  "Search by text or @tag": "Поиск по тексту или @тегу",
  "In case you’d like to contact me for any opportunities, advice, or just a chat, please feel free to contact me via":
    "Если вы хотите связаться со мной для получения каких-либо возможностей, советов или просто поболтать, пожалуйста, не стесняйтесь обращаться ко мне через",
  "Change color theme": "Изменить цветовую тему",
  File: "Файл",
  "About Me": "Обо мне",
  "I am a fullstack developer with over 4 years of experience in this field. My professional experience includes building custom websites as well as managing a team of developers. I am used to working with different technologies and programming languages such as HTML (JSX/TSX), CSS (SCSS), JavaScript (Typescript), React, Angular, Node.js, Figma and others. My goal is to create quality and user-friendly websites for clients to meet their needs and requirements. I am always up for new challenges and strive to continuously improve my skills and knowledge in web development.":
    "Я fullstack-разработчик с опытом работы в этой области более 4 лет. Мой профессиональный опыт включает в себя создание пользовательских веб-сайтов, а также управление командой разработчиков. Я привык работать с различными технологиями и языками программирования, такими как HTML (JSX/TSX), CSS (SCSS), JavaScript (Typescript), React, Angular, Vue, Node.js, Figma и другими. Моя цель - создавать качественные и удобные сайты для клиентов, отвечающие их потребностям и запросам. Я всегда готов к новым вызовам и стремлюсь постоянно совершенствовать свои навыки и знания в области веб-разработки.",
  "I am passionate about programming and am constantly looking for ways to keep my skills up to date and learn new technologies. Currently, my goal is to develop my knowledge of Fullstak development and I am actively researching the latest trends in the field. I am also a big supporter of open source technologies and am constantly looking for ways to contribute to the community.":
    "Я увлекаюсь программированием и постоянно ищу способы поддерживать свои навыки в актуальном состоянии и изучать новые технологии. В настоящее время моей целью является развитие знаний в области разработки Fullstak, и я активно изучаю последние тенденции в этой области. Я также являюсь большим сторонником технологий с открытым исходным кодом и постоянно ищу способы внести свой вклад в развитие сообщества.",
  Experience: "Опыт",
  Education: "Образование",
  Skills: "Навыки",
  "Languages: ": "Языки: ",
  "Frameworks: ": "Фреймворки: ",
  "Tools: ": "Инструменты: ",
  "Fullstack developer": "Fullstack разработчик",
  currently: "По настоящее время",
  Jan: "Янв",
  Feb: "Фев",
  Mar: "Мар",
  Apr: "Апр",
  May: "Май",
  June: "Июнь",
  July: "Июль",
  Aug: "Авг",
  Sept: "Сент",
  Oct: "Окт",
  Nov: "Ноя",
  Dec: "Дек",
  "Creating website designs": "Создание дизайна веб-сайтов",
  "Website creation and support": "Создание и поддержка веб-сайтов",
  "Configuring the server side of sites": "Настройка серверной стороны сайтов",
  "Adaptation of the assortment of the store to the date base of the site":
    "Адаптация ассортимента магазина к датируемой базе сайта",
  "Creating an internet ordering system": "Создание системы интернет-заказов",
  "SEO optimization of sites": "SEO-оптимизация сайтов",
  "Individual entrepreneurship / private practice / freelancing":
    "Индивидуальное предпринимательство / частная практика / фриланс",
  "Development of static and dynamic sites":
    "Разработка статических и динамических сайтов",
  "Design, development, testing and support of websites":
    "Проектирование, разработка, тестирование и поддержка веб-сайтов",
  "Reverse engineering, code refinement": "Обратный инжиниринг, доработка кода",
  "Information systems and programming":
    "Информационные системы и программирование",
  "Yurginsky College of Mechanical Engineering and Information Technologies":
    "Юргинский Техникум Машиностроения и Информационных Технологий",
  "Basic general education": "Основное общее образование",
  "Maltsevskaya Basic Secondary School":
    "Мальцевская Основная Общеобразовательная Школа",
};

function translationRu(en: string[], ru: string[]) {
  const result: any = {};

  for (let i = 0; i < en.length; i++) {
    result[en[i]] = ru[i];
  }

  return result;
}

export { translationRu, translation };
