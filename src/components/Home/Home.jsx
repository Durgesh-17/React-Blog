import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Home.css";

function Home(props) {
  const articles_home = props.articles;
  const data = props.data;
  //   console.log(articles_home);

  const [articleslist, setArticleslist] = useState([]);

  useEffect(() => {
    setArticleslist(articles_home);
  }, [articles_home]);

  //   console.log(articleslist);

  const filtering = (t) => {
    let rslt = [];
    data.forEach((e) => {
      let value = e.tags.find((d) => {
        return d === t;
      });
      if (value) {
        return rslt.push(e);
      }
    });
    return setArticleslist(rslt);
  };

  let tagslist = [];
  data.forEach((item, index) => {
    item.tags.map((c) => {
      if (!tagslist.includes(c)) {
        tagslist.push(c);
      }
    });
  });

  return (
    <>
      <div className="home">
        <div className="all-blogs">
          {articleslist.map((article, index) => {
            return (
              <Link
                to={`/React-Blog/blog/${article.id}`}
                style={{
                  textDecoration: "none",
                }}
                className="link"
                key={article.id}
                // data={articles}
              >
                <div className="blog-list">
                  <div className="blog-preview">
                    <div className="blog-info-preview">
                      <h3>{article.title}</h3>

                      <p className="date">{article.dateday}</p>
                      {/* <p className="author">Author: Lord Stark</p> */}
                    </div>

                    <div className="blog-text-preview">
                      <p className="preview-text">{article.content}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="tags-updates">
          <div className="tags">
            <h4>Tags</h4>

            <ul className="">
              <li className="tag">
                <button
                  type="button"
                  onClick={() => {
                    if (data.length !== articleslist.length) {
                      setArticleslist(data);
                    }
                  }}
                  className="tag-button"
                >
                  All
                </button>
              </li>

              {tagslist.map((tag, index) => {
                return (
                  <li key={index} className="tag">
                    <button
                      className="tag-button"
                      onClick={() => filtering(tag)}
                    >
                      {tag}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="updates">
            <h4>Recent updates</h4>
            <ul>
              <li>Lorem, ipsum dolor. Lorem, ipsum.</li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab,
                expedita.
              </li>
              <li>Lorem, ipsum dolor. Lorem, ipsum.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor. Lorem, ipsum.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
