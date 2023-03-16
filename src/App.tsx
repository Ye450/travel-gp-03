import React,{useState} from "react";
import "./App.css";
import Form from "./components/loginform";
import Logo from "./components/logo/logo";
import Mvisual from "./components/visual/visual";
import BlogTitle from "./components/blog/blog_title";
import BlogItem from "./components/blog/blog_item";
import Footer from "./components/footer";
import Input from "./components/userinput";
import Email from "./components/email";
import Message from "./components/msg";
import Title1 from "./components/about/content1";
import Title2 from "./components/about/content2";
import BlogItemDetail from "./components/blog/blog_item_detail";
import ListMsg, { item } from "./components/listmsg";


// import { Route, Routes, NavLink, Outlet } from "react-router-dom";
import Menu from "./components/list/menu";
// const router= createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="login" element={<Form/>}/>
//   )
// )


  /* <Routes>
<Route path="login" element={<Form />} />
</Routes> */

function App() {
  const [lists, setLists] = useState<Array<item>>([
    { name: "john", email: "ea@gmail", msg: "dfe" }

  ]);

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const sendLists = () => {
    if (username === "" && email === "" && msg === "") {
      alert("type your msg!");
    }

    else {
      console.log(...lists);

      setLists([...lists, { name: username, email: email, msg: msg }])

    }

  };
  return (
    <div className="wrap">
      <div className="bg">
        <header>
          <div className="l-wrap-outer">
            <div className="l-wrap-inner">
              <nav>
                <Logo />
                <Menu />
              </nav>
            </div>
          </div>
        </header>
        <div className="p-mainvisual">
          <div className="l-wrap-outer">
            <div className="l-wrap-inner">
              <Mvisual />
            </div>
          </div>
        </div>
      </div>
      <section id="blog">
        <div className="l-wrap-outer">
          <div className="l-wrap-inner">
            <div className="blog">
              <BlogTitle titleName={"TRAVEL TIPS & GUIDES"} />

              <div className="blog_wrap">
                <BlogItem
                  itemImage={
                    "https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-kai-pilger-547494.jpg"
                  }
                  itemTitle={
                    "7 Europe Travel Essentials You Can’t Travel Without"
                  }
                  itemText={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem"
                  }
                  itemLink={"READ MORE..."}
                />

                <BlogItem
                  itemImage={
                    "https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-oleksandr-pidvalnyi-1008155.jpg"
                  }
                  itemTitle={"10 Tips for Solo Female Travel"}
                  itemText={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem"
                  }
                  itemLink={"READ MORE..."}
                />

                <BlogItem
                  itemImage={
                    "https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-lara-jameson-8828439-1536x1024.jpg"
                  }
                  itemTitle={"Budget Travel Tips in 2022 That You Must Know"}
                  itemText={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem"
                  }
                  itemLink={"READ MORE..."}
                />

                <BlogItem
                  itemImage={
                    "https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-ethan-brooke-2128042-scaled.jpg"
                  }
                  itemTitle={"Seoul South Korea Travel Itinerary"}
                  itemText={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem"
                  }
                  itemLink={"READ MORE..."}
                />

                <BlogItem
                  itemImage={
                    "https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-frederik-sorensen-2404843-scaled.jpg"
                  }
                  itemTitle={"24 Hours in New York City (Things You MUST Do)"}
                  itemText={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem"
                  }
                  itemLink={"READ MORE..."}
                />

                <BlogItem
                  itemImage={
                    "https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-jimmy-teoh-1010657-768x512.jpg"
                  }
                  itemTitle={"3-Day Weekend in Athens Greece"}
                  itemText={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem"
                  }
                  itemLink={"READ MORE..."}
                />

                <BlogItem
                  itemImage={
                    "https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-allphoto-bangkok-13612696-768x513.jpg"
                  }
                  itemTitle={"Grindelwald Switzerland Travel Guide"}
                  itemText={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem"
                  }
                  itemLink={"READ MORE..."}
                />

                <BlogItem
                  itemImage={
                    "https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-chelsea-cook-2929906-600x450.jpg"
                  }
                  itemTitle={"Machu Picchu Travel Guide"}
                  itemText={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem"
                  }
                  itemLink={"READ MORE..."}
                />

                <BlogItem
                  itemImage={
                    "https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-pixabay-259447-600x338.jpg"
                  }
                  itemTitle={"Cape Town South Africa Travel Guide"}
                  itemText={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem"
                  }
                  itemLink={"READ MORE..."}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="blog-detail">
        <div className="l-wrap-outer">
          <div className="l-wrap-inner">
            <BlogItemDetail
            itemDetailImage={"https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-kai-pilger-547494.jpg"} 
            itemDetailTitle={"7 Europe Travel Essentials You Can’t Travel Without"}
            itemDetailText={"Ut ornare lectus sit amet. Nibh tortor id aliquet lectus. Netus et malesuada fames ac turpis egestas integer eget. Sit amet mauris commodo quis imperdiet massa. Facilisis magna etiam tempor orci eu. Mauris a diam maecenas sed enim ut sem. Sem fringilla ut morbi tincidunt. Nulla malesuada pellentesque elit eget gravida cum. Lacus luctus accumsan tortor posuere. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Fames ac turpis egestas integer eget aliquet nibh praesent. Dui faucibus in ornare quam viverra. Lacus vestibulum sed arcu non odio euismod. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris.Ultrices in iaculis nunc sed augue lacus viverra vitae. Amet commodo nulla facilisi nullam vehicula ipsum a. Eu turpis egestas pretium aenean pharetra magna. Nisl purus in mollis nunc. Purus sit amet volutpat consequat. Convallis convallis tellus id interdum velit laoreet id. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Vitae turpis massa sed elementum tempus egestas sed. Lorem ipsum dolor sit amet consectetur. Pellentesque adipiscing commodo elit at imperdiet dui. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Sed odio morbi quis commodo odio aenean sed adipiscing. Pulvinar sapien et ligula ullamcorper malesuada. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Arcu odio ut sem nulla pharetra diam."}/>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="l-wrap-outer">
          <div className="l-wrap-inner">
            <div className="content">
              <div className="content-title">
                <h3>SEND ME A MESSAGE</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod incididunt ut labore
                </p>
                <hr />
              </div>
              <div className="contact-form">
                <Input
                  label={"Name"}
                  value={username}
                  onChange={(e: {
                    target: { value: React.SetStateAction<string> };
                  }) => {
                    setUsername(e.target.value);
                  }}
                  placeholder={"Enter Your Name"}
                />
                <Email
                  label={"Email"}
                  placeholder={"Enter Your Email"}
                  value={email}
                  onChange={(e: {
                    target: { value: React.SetStateAction<string> };
                  }) => {
                    setEmail(e.target.value);
                  }}
                />
                <Message
                  label={"Message"}
                  placeholder={"Enter Your Message"}
                  value={msg}
                  onChange={(e: {
                    target: { value: React.SetStateAction<string> };
                  }) => {
                    setMsg(e.target.value);
                  }}
                />

                <button onClick={sendLists} className="send-btn">
                  Send
                </button>
              </div>
              <div className="msgLists">
                {lists.map((item, index) => {
                  return <ListMsg key={index} item={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="l-wrap-outer">
          <div className="l-wrap-inner">
            <div className="about-container">
              <h2>MY STORY</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt utlabore
              </p>
              <Title1
                title={"CALLED IT QUITS"}
                text={
                  "In spring of 2019, I handed in my letter of resignation to my boss to travel the world.My friends and family couldn’t believe my plan. Sometimes, I couldn’t either.My first stop was Venice, Italty."
                }
              />

              <Title2
                title={"CALLED IT QUITS"}
                text={
                  "At the time, backpacking through Europe was a blast – but it was also just the beginning.I started posting about my experiences around the world on my blog, to help educate and inspire others totravel more."
                }
              />

              <Title1
                title={"LOOKING AHEAD"}
                text={
                  "Now, I blog full time from all around the world. I love experiencing new places, new food, music, and more.But my favorite part is educating and inspring. I hope you find Austin’s Atlas helpful as your plan your next adventure."
                }
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section id="login">
        <Form/>
      </section> */}
      <Footer />
    </div>
  );
}

export default App;
