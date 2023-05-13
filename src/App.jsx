import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Startups from "./components/Startups/Startups";
import Entrepreneurship from "./components/Entrpreneurship/Entrepreneurship";
import Blogdetails from "./components/Blogdetails/Blogdetails";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";

function App() {
  const articles = [
    {
      title: "YC Build Sprint Winter 2021",
      dateday: "2/2/2021, Tuesday",
      author: "Kyle Corbitt",
      category: "startups",
      id: 1,
      content:
        "We’re delighted to announce the launch of another YC Build Sprint through Startup School! It will begin on February 15 and end on March 14. Signups just opened, so you can register for the sprint now.\n\n The Build Sprint is an opportunity for intense focus on your startup or side-project for a specific period of time. For existing startups, this may involve a push towards launching a specific feature or reaching a certain milestone. For new founders, this is an opportunity to take the plunge and begin work on a project that excites you.\n\n At the start of the sprint, you’ll register your four-week goal. As the sprint progresses, you’ll be able to track your progress, get feedback from YC group partners and team members, and have weekly meetings with other sprint participants to provide accountability. The sprint culminates with the YC application deadline.\n\n Getting feedback from YC \n\n One consistent request we get from Startup School participants and YC applicants alike is more feedback from the YC team. For the upcoming sprint, we’re committing to provide more founder feedback than ever before. Each week, we’ll issue a public challenge to sprint participants and give personalized feedback to those who participate. We’ll also have weekly calls with YC partners and experts that will answer participant questions.\n\n Finally, in a first for YC, we’ll provide actionable feedback on 1,0001 YC S2021 applications submitted by sprint participants. Historically, we haven’t systematically provided personalized feedback on applications that don’t make it to the interview stage because of resource constraints. In the spirit of doing things that don’t scale, however, we’re going to get it done!\n\n Want a sprint buddy?\n\n If like many aspiring founders you haven’t gotten started because you haven’t found the right person to work with yet, we’d like to help! As part of Startup School, we recently launched a (still in beta) co-founder matching service. We expect most successful co-founder relationships will take months or years to build a strong foundation, but working on a Build Sprint project together is a great way to stress test a new relationship. If this sounds interesting to you, sign up for Startup School and create a co-founder matching profile now.\n\n Let’s go \n\n Build Sprint signups are open now. Looking forward to seeing you there!\n\n If possible, we’d like to provide an actionable piece of feedback to everyone who completes the Build Sprint and submits a YC application. But we’re not sure how long that will take, so we’re only committing to provide feedback on 1,000 applications for now to be safe. ↩",
    },
    {
      title: "How to Start a Biotech Company on a Budget",
      dateday: "20/1/2021, Wednesday",
      author: "Reshma Khilnani",
      category: "startups",
      id: 2,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id animi recusandae libero, dolores quidem aperiam accusamus similique nam distinctio, earum consequuntur. Distinctio ex facere esse quas porro eius alias quasi, modi rerum, sit minus laborum corporis optio expedita suscipit dolore officiis accusantium voluptas! Velit, expedita perspiciatis! Natus dolores repellat sint quisquam minima nobis ab sed harum aliquam autem, recusandae optio necessitatibus a, ducimus quasi nesciunt. Repellat est hic nam minus ab officia, ratione omnis assumenda eum nemo perspiciatis maxime magni laboriosam officiis aperiam sunt quas impedit, quia rem similique consequatur reiciendis fuga. Quia exercitationem eveniet fuga suscipit dignissimos error sapiente",
    },
    {
      title: "The Pre-Product Startup and the FDA",
      dateday: "3/3/2021, Wednesday",
      author: "Reshma Khilnani, Jared Seehafer",
      category: "startups",
      id: 3,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id animi recusandae libero, dolores quidem aperiam accusamus similique nam distinctio, earum consequuntur. Distinctio ex facere esse quas porro eius alias quasi, modi rerum, sit minus laborum corporis optio expedita suscipit dolore officiis accusantium voluptas! Velit, expedita perspiciatis! Natus dolores repellat sint quisquam minima nobis ab sed harum aliquam autem, recusandae optio necessitatibus a, ducimus quasi nesciunt. Repellat est hic nam minus ab officia, ratione omnis assumenda eum nemo perspiciatis maxime magni laboriosam officiis aperiam sunt quas impedit, quia rem similique consequatur reiciendis fuga. Quia exercitationem eveniet fuga suscipit dignissimos error sapiente",
    },
    {
      title: "Building for the future",
      dateday: "9/12/2020, Wednesday",
      author: "Samantha Marshall",
      category: "startups",
      id: 4,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id animi recusandae libero, dolores quidem aperiam accusamus similique nam distinctio, earum consequuntur. Distinctio ex facere esse quas porro eius alias quasi, modi rerum, sit minus laborum corporis optio expedita suscipit dolore officiis accusantium voluptas! Velit, expedita perspiciatis! Natus dolores repellat sint quisquam minima nobis ab sed harum aliquam autem, recusandae optio necessitatibus a, ducimus quasi nesciunt. Repellat est hic nam minus ab officia, ratione omnis assumenda eum nemo perspiciatis maxime magni laboriosam officiis aperiam sunt quas impedit, quia rem similique consequatur reiciendis fuga. Quia exercitationem eveniet fuga suscipit dignissimos error sapiente",
    },
    {
      title: "Reframing the Narrative on Entrepreneurship",
      dateday: "26/04/2016, Tuesday",
      author: "Gary Vaynerchuk",
      category: "entrepreneurship",
      id: 5,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id animi recusandae libero, dolores quidem aperiam accusamus similique nam distinctio, earum consequuntur. Distinctio ex facere esse quas porro eius alias quasi, modi rerum, sit minus laborum corporis optio expedita suscipit dolore officiis accusantium voluptas! Velit, expedita perspiciatis! Natus dolores repellat sint quisquam minima nobis ab sed harum aliquam autem, recusandae optio necessitatibus a, ducimus quasi nesciunt. Repellat est hic nam minus ab officia, ratione omnis assumenda eum nemo perspiciatis maxime magni laboriosam officiis aperiam sunt quas impedit, quia rem similique consequatur reiciendis fuga. Quia exercitationem eveniet fuga suscipit dignissimos error sapiente",
    },
    {
      title:
        "Netflix’s Co-Founder Has 5 Pieces of Advice For Aspiring Entrepreneurs",
      dateday: "11/08/2020, Friday",
      author: "Omar Itani",
      category: "entrepreneurship",
      id: 6,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id animi recusandae libero, dolores quidem aperiam accusamus similique nam distinctio, earum consequuntur. Distinctio ex facere esse quas porro eius alias quasi, modi rerum, sit minus laborum corporis optio expedita suscipit dolore officiis accusantium voluptas! Velit, expedita perspiciatis! Natus dolores repellat sint quisquam minima nobis ab sed harum aliquam autem, recusandae optio necessitatibus a, ducimus quasi nesciunt. Repellat est hic nam minus ab officia, ratione omnis assumenda eum nemo perspiciatis maxime magni laboriosam officiis aperiam sunt quas impedit, quia rem similique consequatur reiciendis fuga. Quia exercitationem eveniet fuga suscipit dignissimos error sapiente",
    },
    {
      title: "Good and Bad Reasons to Become an Entrepreneur",
      dateday: "14/07/2013, Wednesday",
      author: "Dustin Moskovitz",
      category: "entrepreneurship",
      id: 7,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id animi recusandae libero, dolores quidem aperiam accusamus similique nam distinctio, earum consequuntur. Distinctio ex facere esse quas porro eius alias quasi, modi rerum, sit minus laborum corporis optio expedita suscipit dolore officiis accusantium voluptas! Velit, expedita perspiciatis! Natus dolores repellat sint quisquam minima nobis ab sed harum aliquam autem, recusandae optio necessitatibus a, ducimus quasi nesciunt. Repellat est hic nam minus ab officia, ratione omnis assumenda eum nemo perspiciatis maxime magni laboriosam officiis aperiam sunt quas impedit, quia rem similique consequatur reiciendis fuga. Quia exercitationem eveniet fuga suscipit dignissimos error sapiente",
    },
    {
      title: "Don’t become an entrepreneur",
      dateday: "27/03/2023, Monday",
      author: "Aytekin Tank",
      category: "entrepreneurship",
      id: 8,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id animi recusandae libero, dolores quidem aperiam accusamus similique nam distinctio, earum consequuntur. Distinctio ex facere esse quas porro eius alias quasi, modi rerum, sit minus laborum corporis optio expedita suscipit dolore officiis accusantium voluptas! Velit, expedita perspiciatis! Natus dolores repellat sint quisquam minima nobis ab sed harum aliquam autem, recusandae optio necessitatibus a, ducimus quasi nesciunt. Repellat est hic nam minus ab officia, ratione omnis assumenda eum nemo perspiciatis maxime magni laboriosam officiis aperiam sunt quas impedit, quia rem similique consequatur reiciendis fuga. Quia exercitationem eveniet fuga suscipit dignissimos error sapiente",
    },
  ];

  const startup_articles = articles.filter((article) => {
    return article.category == "startups";
  });

  const entrepreneurship_articles = articles.filter((article) => {
    return article.category == "entrepreneurship";
  });

  return (
    <Router>
      <div className="app">
        <Navbar />
        {/* <Sidebar /> */}

        <Routes>
          <Route path="/" element={<Home articles={articles} />} />
          <Route
            path="/startups"
            element={<Home articles={startup_articles} />}
          />
          <Route
            path="/entrepreneurship"
            element={<Home articles={entrepreneurship_articles} />}
          />
          <Route
            path="/blog/:id"
            element={<Blogdetails articles={articles} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
