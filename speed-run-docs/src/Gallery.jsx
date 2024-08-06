export function Profile() {
  return (
    <img
      src="https://caltech-prod.s3.amazonaws.com/main/images/feynman01-NEWS-WEB.width-450_3YN6pEE.jpg"
      alt="Richard Feynman"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
