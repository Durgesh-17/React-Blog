import "./Blogdetails.css";
import { useParams } from "react-router-dom";

function Blogdetails(props) {
  const articles = props.articles;

  const { id } = useParams();

  console.log(articles[id - 1]);

  return (
    <>
      <div className="blogdetails">
        <div className="article">
          <div className="blog-header">
            <h1>{articles[id - 1].title}</h1>
            <p>
              by <span>{articles[id - 1].author}</span>
            </p>
            <p>
              on <span>{articles[id - 1].dateday}</span>
            </p>
          </div>

          <div className="content">{articles[id - 1].content}</div>
        </div>
      </div>
    </>
  );
}
export default Blogdetails;
