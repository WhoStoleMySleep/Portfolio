const data = new Date();
let month: number | string = data.getMonth()
let year: number | string = data.getFullYear()

switch (month)
{
  case 0: month="Jan"; break;
  case 1: month="Feb"; break;
  case 2: month="Mar"; break;
  case 3: month="Apr"; break;
  case 4: month="May"; break;
  case 5: month="June"; break;
  case 6: month="July"; break;
  case 7: month="Aug"; break;
  case 8: month="Sept"; break;
  case 9: month="Oct"; break;
  case 10: month="Nov"; break;
  case 11: month="Dec"; break;
}

export const ExperienceData = [
  {
    currentPosition: "Fullstack developer",
    company: "Интернет-группа «ЮГС»",
    date: `Nov 2023 - ${month} ${year}`,
    jobDuties: [
      {
        jobTitle: "Website creation and support",
        jobDescription: ""
      },
      {
        jobTitle: "SEO optimization of sites",
        jobDescription: ""
      },
      {
        jobTitle: "Configuring the server side of sites",
        jobDescription: ""
      },
    ]
  },
  {
    currentPosition: "Fullstack developer",
    company: "Артельная Фактория",
    date: "Dec 2022 - June 2023",
    jobDuties: [
      {
        jobTitle: "Creating website designs",
        jobDescription: ""
      },
      {
        jobTitle: "Website creation and support",
        jobDescription: ""
      },
      {
        jobTitle: "Adaptation of the assortment of the store to the date base of the site",
        jobDescription: ""
      },
      {
        jobTitle: "Creating an internet ordering system",
        jobDescription: ""
      },
      {
        jobTitle: "SEO optimization of sites",
        jobDescription: ""
      },
    ]
  },
  {
    currentPosition: "Fullstack developer",
    company: "Individual entrepreneurship / private practice / freelancing",
    date: "June 2020 - Nov 2022",
    jobDuties: [
      {
        jobTitle: "Development of static and dynamic sites",
        jobDescription: ""
      },
      {
        jobTitle: "Design, development, testing and support of websites",
        jobDescription: ""
      },
      {
        jobTitle: "Reverse engineering, code refinement",
        jobDescription: ""
      },
    ]
  },
]

export const EducationData = [
  {
    faculty: "Information systems and programming",
    place: "Yurginsky College of Mechanical Engineering and Information Technologies",
    dates: "2022 - 2026"
  },
  {
    faculty: "Basic general education",
    place: "Maltsevskaya Basic Secondary School",
    dates: "2012 - 2021"
  },
]