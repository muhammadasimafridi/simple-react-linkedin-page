import Header from "./components/Header.jsx";
import Post from "./components/Post.jsx";
import Search from "./components/Search.jsx"

import img1 from "./assets/img-1.jpg";
import img2 from "./assets/img-2.jpg";
import img3 from "./assets/img-3.jpg";
import img4 from "./assets/img-4.jpg";
import img5 from "./assets/img-5.jpg";
import img6 from "./assets/img-6.jpg";
import img7 from "./assets/img-7.jpg";
import img8 from "./assets/img-8.jpg";
import img9 from "./assets/img-9.jpg";
import img10 from "./assets/img-10.jpg";
import "./App.css"

import pic1 from "./assets/post-1-img.jpeg"
import pic2 from "./assets/post-2-img.jpeg"
import pic3 from "./assets/post-3-img.jpeg"
import pic4 from "./assets/post-4-img.jpeg"
import pic5 from "./assets/post-5-img.jpeg"
import pic6 from "./assets/post-6-img.jpeg"
import pic7 from "./assets/post-7-img.jpeg"
import pic8 from "./assets/post-8-img.jpeg"
import pic9 from "./assets/post-9-img.jpeg"
import pic10 from "./assets/post-10-img.jpeg"
import Footer from "./components/Footer.jsx";

function App() {
  return <>
    <Header />
      <div className="mainContainer">
        <Search />
        <div className="allPosts">
          <Post image={img1} name="Mehwish" bio="Front-End Developer | HTML | CSS | BootStrap | JavaScript | Git & GitHub" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus rem quisquam ea, at voluptas nemo!" pic={pic1} />
          <Post image={img7} name="Mehran" bio="CEO & Founder @ CodeCraft | Senior Software Engineer" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ad vel veritatis laboriosam, laudantium rerum voluptates autem perspiciatis fuga illo optio facilis soluta sit repellendus expedita id perferendis nam accusamus? Itaque, quae aperiam ullam corrupti reprehenderit sequi, quasi ipsum voluptatem porro beatae nihil delectus, amet exercitationem. Unde ea earum itaque laborum molestias, ab expedita rem ullam harum aliquid maxime aperiam tenetur error consectetur similique. Ea ullam debitis exercitationem illum voluptatum reiciendis illo vitae nostrum pariatur." />
          <Post image={img2} name="Aftab Alam" bio="Java Developer | Student at University of Peshawar | Learning AI" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus rem quisquam ea, at voluptas nemo!" pic={pic2} />
          <Post image={img3} name="Ameen Khan" bio="Grahpic Designer | learning UI & UX Design | LinkedIn Revamp" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus rem quisquam ea, at voluptas nemo!" pic={pic3} />
          <Post image={img4} name="Ayesha" bio="UI & UX Designer | Graphic Designing | UI & UX Designing" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus rem quisquam ea, at voluptas nemo!" pic={pic4} />
          <Post image={img5} name="Ahmad Ali" bio="LinkedIn Brand | Optimizing LinkedIn Professional | LinkedIn Revamp" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus rem quisquam ea, at voluptas nemo!" pic={pic5} />
          <Post image={img6} name="Zara Meeran" bio="E-Commerece Developer | WordPress Developer | HTML | CSS | JavaScript" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus rem quisquam ea, at voluptas nemo!" pic={pic6} />
          <Post image={img7} name="Kamal Khan" bio="App Developer | Java | PHP | Phyton | JavaScript" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus rem quisquam ea, at voluptas nemo!" pic={pic7} />
          <Post image={img8} name="Amjad" bio="I turn Your Linkedin into a brand Designing Professionally | LinkedIn Design" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus rem quisquam ea, at voluptas nemo!" pic={pic8} />
          <Post image={img9} name="Fatma Ali" bio="Phyton Developer | Data Science Learner | Student at Abasyn University" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus rem quisquam ea, at voluptas nemo!" pic={pic9} />
          <Post image={img10} name="Meerab" bio="AI enthusiats | Deep Learning | Phyton Developer | C++" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus rem quisquam ea, at voluptas nemo!" pic={pic10} />
        </div>
      </div>
    <Footer />
  </>
}

export default App;