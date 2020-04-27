import CreateItem from '../components/CreateItem';
import SignInRequire from '../components/SignInRequire';

const Sell = (props) => (
  <SignInRequire>
    <CreateItem />
  </SignInRequire>
);

export default Sell;
