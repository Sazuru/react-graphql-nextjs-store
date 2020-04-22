import ResetPage from '../components/ResetPage';

const Sell = (props) => (
  <div>
    <ResetPage resetToken={props.query.resetToken} />
  </div>
);

export default Sell;
