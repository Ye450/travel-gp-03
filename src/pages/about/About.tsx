import Title1 from "../../components/about/content1";
import Title2 from "../../components/about/content2";

export default function About() {
  return (
    <div id="about">
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
    </div>
  )
}


