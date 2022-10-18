import profile from "../assets/profile-img.png";

function MainInfo() {
  return (
    <center>
      <h1>Ali Murtaza</h1>
      <h3>Full Stack Blockchain Developer</h3>
      <h6>Handle(all social media): @alymurtazamemon</h6>
      <Button
        title="Email"
        backgroundColor="#FFFFFF"
        color="#374151"
        border="1px solid #D1D5DB"
      />
      <Button
        title="LinkedIn"
        backgroundColor="#5093E2"
        color="#FFFFFF"
        border="1px solid #5093E2"
      />
    </center>
  );
}

function Button(props) {
  return (
    <button
      className="btn"
      style={{
        border: props.border,
        color: props.color,
        background: props.backgroundColor,
      }}
    >
      {props.title}
    </button>
  );
}

function Details() {
  return (
    <section>
      <h2>About</h2>
      <p>
        I am a Software Engineer and currectly working as a blockchain
        developer. I am learning frontend skills from Scrimba so that I can
        create beautiful user interfaces for my blockchain applications.
      </p>
      <h2>Interests</h2>
      <p>
        Beside programming, I love to read books, play snooker, running {">"}{" "}
        gym and love to travel and do photography.
      </p>
    </section>
  );
}

function Main() {
  return (
    <main>
      <img src={profile} className="profile-image"></img>
      <MainInfo />
      <Details />
    </main>
  );
}

export default Main;
