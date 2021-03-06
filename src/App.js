import Logo from './components/Logo';
import twoCats from './images/two-cats.jpg';

function App() {
  return (
    <div className="flex flex-wrap">
      <Logo />
      <button className="justify-self-end text-lightgrey">Join now</button>
      <button className="border-4 rounded-md">Sign in</button>
      <h2>Welcome to your lickable community</h2>
      <input type="text" placeholder="Email or phone number" />
      <input type="text" placeholder="Password"/>
      <button>Sign in</button>
      <h3>Find animals who wanna lick</h3>
      <h5>SUGGESTED SEARCHES</h5>
      <img className="w-2/4 h-1/5 rounded" src={twoCats} alt="Two cats licking from http://catsintrees.wordpress.com/" />
    </div>
  );
}

export default App;
