import { Link } from "react-router-dom";
import "./Home.css";

function Home(props) {
  const articles = props.articles;

  return (
    <>
      <div className="home">
        <div className="all-blogs">
          {props.articles.map((article, index) => {
            return (
              <Link
                to={`/blog/${article.id}`}
                style={{
                  textDecoration: "none",
                }}
                className="link"
                key={article.id}
                data={articles}
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

            <div
              className="tag-group"
              role="group"
              aria-label="Basic checkbox toggle button group"
            >
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck1"
                autoComplete="off"
              />
              <label className="btn btn-outline-primary" htmlFor="btncheck1">
                Checkbox 1
              </label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck2"
                autoComplete="off"
              />
              <label className="btn btn-outline-primary" htmlFor="btncheck2">
                Checkbox 2
              </label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck3"
                autoComplete="off"
              />
              <label className="btn btn-outline-primary" htmlFor="btncheck3">
                Checkbox 3
              </label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck4"
                autoComplete="off"
              />
              <label className="btn btn-outline-primary" htmlFor="btncheck4">
                Checkbox 4
              </label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck5"
                autoComplete="off"
              />
              <label className="btn btn-outline-primary" htmlFor="btncheck5">
                Checkbox 5
              </label>
            </div>
          </div>
          <div className="updates">
            <h4>Recent updates</h4>
            <ul>
              <li>Lorem, ipsum dolor. Lorem, ipsum.</li>
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
