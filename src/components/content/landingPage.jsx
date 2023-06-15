import land from "../../assets/land.png";
import landStyle from "./landingPage.module.scss";

export default function LandingPage() {
  return (
    <section className={landStyle.holdAllLand}>
      <div className={landStyle.holdLand}>
        <div>
          <h1 className={landStyle.ayeniEmmanuel}>Ismail Odubowale</h1>
          <h1 className={landStyle.ayeniEmmanuel}>
            CINEMATOGRAPHER | VIDEO EDITOR
          </h1>
          <p className={landStyle.ayeniEmmanuelp}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
            volutpat feugiat placerat lobortis. Natoque rutrum semper sed
            suspendisse nunc lectus.
          </p>
          <button className={landStyle.hireMe}>Hire me</button>
        </div>
        <div>
          <img src={land} alt="land" className={landStyle.landImage} />
        </div>
      </div>
    </section>
  );
}
