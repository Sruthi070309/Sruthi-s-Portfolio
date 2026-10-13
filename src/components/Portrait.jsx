import Avatar from "./Avatar.jsx";

// Shows the illustrated portrait. To use a photo instead, replace <Avatar /> with
// <img src={import.meta.env.BASE_URL + "profile.jpg"} alt="Portrait" /> and add public/profile.jpg
export default function Portrait({ className = "" }) {
  return (
    <div className={"portrait " + className} role="img" aria-label="Illustration of a woman developer">
      <Avatar />
    </div>
  );
}
