import ReactDOM from "https://cdn.skypack.dev/react-dom";

const Header = () =>
  <div>
    <span>Element 1</span>
    <span>Element 2</span>
  </div>

const Body = () => (
  <>
    <div>Div 1</div>
    <div>Div 2</div>
  </>
)


const Page = () => (
  <>
    <Header />
    <Body />
  </>
)


ReactDOM.render(<Page />,
               document.getElementById('root'));