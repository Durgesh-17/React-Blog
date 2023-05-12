import "./Home.css";

function Home() {
  const articles = [
    {
      title: "YC Build Sprint Winter 2021",
      dateday: "2/2/2021, Tuesday",
      author: "Kyle Corbitt",
      category: "startups",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id animi recusandae libero, dolores quidem aperiam accusamus similique nam distinctio, earum consequuntur. Distinctio ex facere esse quas porro eius alias quasi, modi rerum, sit minus laborum corporis optio expedita suscipit dolore officiis accusantium voluptas! Velit, expedita perspiciatis! Natus dolores repellat sint quisquam minima nobis ab sed harum aliquam autem, recusandae optio necessitatibus a, ducimus quasi nesciunt. Repellat est hic nam minus ab officia, ratione omnis assumenda eum nemo perspiciatis maxime magni laboriosam officiis aperiam sunt quas impedit, quia rem similique consequatur reiciendis fuga. Quia exercitationem eveniet fuga suscipit dignissimos error sapiente",
    },
    {
      title: "How to Start a Biotech Company on a Budget",
      dateday: "20/1/2021, Wednesday",
      author: "Reshma Khilnani",
      category: "startups",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id animi recusandae libero, dolores quidem aperiam accusamus similique nam distinctio, earum consequuntur. Distinctio ex facere esse quas porro eius alias quasi, modi rerum, sit minus laborum corporis optio expedita suscipit dolore officiis accusantium voluptas! Velit, expedita perspiciatis! Natus dolores repellat sint quisquam minima nobis ab sed harum aliquam autem, recusandae optio necessitatibus a, ducimus quasi nesciunt. Repellat est hic nam minus ab officia, ratione omnis assumenda eum nemo perspiciatis maxime magni laboriosam officiis aperiam sunt quas impedit, quia rem similique consequatur reiciendis fuga. Quia exercitationem eveniet fuga suscipit dignissimos error sapiente",
    },
    {
      title: "The Pre-Product Startup and the FDA",
      dateday: "3/3/2021, Wednesday",
      author: "Reshma Khilnani, Jared Seehafer",
      category: "startups",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id animi recusandae libero, dolores quidem aperiam accusamus similique nam distinctio, earum consequuntur. Distinctio ex facere esse quas porro eius alias quasi, modi rerum, sit minus laborum corporis optio expedita suscipit dolore officiis accusantium voluptas! Velit, expedita perspiciatis! Natus dolores repellat sint quisquam minima nobis ab sed harum aliquam autem, recusandae optio necessitatibus a, ducimus quasi nesciunt. Repellat est hic nam minus ab officia, ratione omnis assumenda eum nemo perspiciatis maxime magni laboriosam officiis aperiam sunt quas impedit, quia rem similique consequatur reiciendis fuga. Quia exercitationem eveniet fuga suscipit dignissimos error sapiente",
    },
    {
      title: "Building for the future",
      dateday: "9/12/2020, Wednesday",
      author: "Samantha Marshall",
      category: "startups",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id animi recusandae libero, dolores quidem aperiam accusamus similique nam distinctio, earum consequuntur. Distinctio ex facere esse quas porro eius alias quasi, modi rerum, sit minus laborum corporis optio expedita suscipit dolore officiis accusantium voluptas! Velit, expedita perspiciatis! Natus dolores repellat sint quisquam minima nobis ab sed harum aliquam autem, recusandae optio necessitatibus a, ducimus quasi nesciunt. Repellat est hic nam minus ab officia, ratione omnis assumenda eum nemo perspiciatis maxime magni laboriosam officiis aperiam sunt quas impedit, quia rem similique consequatur reiciendis fuga. Quia exercitationem eveniet fuga suscipit dignissimos error sapiente",
    },
    {
      title: "Reframing the Narrative on Entrepreneurship",
      dateday: "26/04/2016, Tuesday",
      author: "Gary Vaynerchuk",
      category: "entrepreneurship",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id animi recusandae libero, dolores quidem aperiam accusamus similique nam distinctio, earum consequuntur. Distinctio ex facere esse quas porro eius alias quasi, modi rerum, sit minus laborum corporis optio expedita suscipit dolore officiis accusantium voluptas! Velit, expedita perspiciatis! Natus dolores repellat sint quisquam minima nobis ab sed harum aliquam autem, recusandae optio necessitatibus a, ducimus quasi nesciunt. Repellat est hic nam minus ab officia, ratione omnis assumenda eum nemo perspiciatis maxime magni laboriosam officiis aperiam sunt quas impedit, quia rem similique consequatur reiciendis fuga. Quia exercitationem eveniet fuga suscipit dignissimos error sapiente",
    },
    {
      title:
        "Netflix’s Co-Founder Has 5 Pieces of Advice For Aspiring Entrepreneurs",
      dateday: "11/08/2020, Friday",
      author: "Omar Itani",
      category: "entrepreneurship",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id animi recusandae libero, dolores quidem aperiam accusamus similique nam distinctio, earum consequuntur. Distinctio ex facere esse quas porro eius alias quasi, modi rerum, sit minus laborum corporis optio expedita suscipit dolore officiis accusantium voluptas! Velit, expedita perspiciatis! Natus dolores repellat sint quisquam minima nobis ab sed harum aliquam autem, recusandae optio necessitatibus a, ducimus quasi nesciunt. Repellat est hic nam minus ab officia, ratione omnis assumenda eum nemo perspiciatis maxime magni laboriosam officiis aperiam sunt quas impedit, quia rem similique consequatur reiciendis fuga. Quia exercitationem eveniet fuga suscipit dignissimos error sapiente",
    },
    {
      title: "Good and Bad Reasons to Become an Entrepreneur",
      dateday: "14/07/2013, Wednesday",
      author: "Dustin Moskovitz",
      category: "entrepreneurship",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id animi recusandae libero, dolores quidem aperiam accusamus similique nam distinctio, earum consequuntur. Distinctio ex facere esse quas porro eius alias quasi, modi rerum, sit minus laborum corporis optio expedita suscipit dolore officiis accusantium voluptas! Velit, expedita perspiciatis! Natus dolores repellat sint quisquam minima nobis ab sed harum aliquam autem, recusandae optio necessitatibus a, ducimus quasi nesciunt. Repellat est hic nam minus ab officia, ratione omnis assumenda eum nemo perspiciatis maxime magni laboriosam officiis aperiam sunt quas impedit, quia rem similique consequatur reiciendis fuga. Quia exercitationem eveniet fuga suscipit dignissimos error sapiente",
    },
    {
      title: "Don’t become an entrepreneur",
      dateday: "27/03/2023, Monday",
      author: "Aytekin Tank",
      category: "entrepreneurship",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id animi recusandae libero, dolores quidem aperiam accusamus similique nam distinctio, earum consequuntur. Distinctio ex facere esse quas porro eius alias quasi, modi rerum, sit minus laborum corporis optio expedita suscipit dolore officiis accusantium voluptas! Velit, expedita perspiciatis! Natus dolores repellat sint quisquam minima nobis ab sed harum aliquam autem, recusandae optio necessitatibus a, ducimus quasi nesciunt. Repellat est hic nam minus ab officia, ratione omnis assumenda eum nemo perspiciatis maxime magni laboriosam officiis aperiam sunt quas impedit, quia rem similique consequatur reiciendis fuga. Quia exercitationem eveniet fuga suscipit dignissimos error sapiente",
    },
  ];

  return (
    <>
      {/* for (let i = 0; i < articles.length; i++) {
            <p>{articles[i].author}</p>
            
        } */}

      <div className="home">
        <div className="all-blogs">
          <div className="blog-list">
            <div className="blog-preview">
              <div className="blog-info-preview">
                <h3>Blog Title</h3>

                <p className="date">DD-MM-YYYY, Sunday</p>
                {/* <p className="author">Author: Lord Stark</p> */}
              </div>

              <div className="blog-text-preview">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque,
                mollitia! Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Vel voluptatibus obcaecati adipisci et, porro fugit?
              </div>
            </div>
          </div>
          {articles.map((article, index) => {
            return (
              <div className="blog-list" key={index}>
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
            );
          })}
        </div>

        <div className="tags-updates">
          <div className="tags">
            <h4>Tags</h4>
            {/* <button className="tag">tag 1</button>
            <button className="tag">tag 2</button>
            <button className="tag">tag 3</button>
            <button className="tag">tag 4</button>
            <button className="tag">tag 5</button> */}
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
