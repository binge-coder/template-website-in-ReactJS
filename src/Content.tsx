import Lorem from "./components/Lorem"
const Content = () => {
  

  return (
    <div className="prose max-w-none">
      <h1>👋 HI I am <a href="#num1">...</a> </h1>
      <Lorem />
      <p id="num1"><a href="#num2">Who am I? (click this you punk)</a></p>
      <Lorem />
      <Lorem />
      <Lorem />
      <Lorem />
      <Lorem />
      <Lorem />
      <p id="num2"><a href="https://www.instagram.com/p/C0-OwkOtfsZ/" target="_blank">I have no clue (click for easter egg or something) </a></p>
      <Lorem />
      <Lorem />

      <blockquote>This is a blockquote. "We should not utter quotes from other people because other people are as foolish as us" - anon</blockquote>
      <h2>Where I am from</h2>
      <ul>
        <li>Milky way</li>
        <li>Earth </li>
      </ul>

    </div>
  )
}

export default Content