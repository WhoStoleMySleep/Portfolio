import styles from "./projects.module.scss";
import { useTranslation } from "react-i18next";
import bgMain from "../../assets/image/bgMain.webp";
import { useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import { projectsData } from "./resourcedata";
import searchProducts from "../../lib/searchProducts";
import useDebounce from "../../lib/hooks/useDebounce";

function Projects() {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const debouncedSearchTerm = useDebounce(query, 300);

  return (
    <main className={styles.main}>
      <img
        src={bgMain}
        alt={""}
        className={styles["main__background"]}
        loading="lazy"
      />
      <div className={styles.main__text}>
        <h1 className={styles.main__title}>{t("Projects")}</h1>
      </div>
      <input
        type="text"
        className={styles["main__search-input"]}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={t("Search by text or @tag")}
      />
      <ul className={styles["main__blogs"]}>
        {projectsData.map(
          (
            x: {
              id: string;
              conciseContent: string[];
              date: string;
              name: string[];
              tags: string;
              headImageLink: string;
            },
            i: number,
          ) =>
            searchProducts(t(x.name), debouncedSearchTerm, x.tags) ? (
              <li key={i}>
                <BlogCard
                  id={x.id}
                  altImage="img"
                  conciseContent={x.conciseContent}
                  datePublish={x.date}
                  headImage={x.headImageLink}
                  tags={x.tags}
                  themeName={x.name}
                />
              </li>
            ) : (
              ""
            ),
        )}
      </ul>
    </main>
  );
}

export default Projects;
