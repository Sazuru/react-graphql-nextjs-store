import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from './User';
import Signin from './Signin';

const SignInRequire = (props) => (
  <Query query={CURRENT_USER_QUERY} pollInterval={1000}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (!data.me) {
        return (
          <div>
            <p>Please sign in before continuing</p>
            <Signin />
          </div>
        );
      }
      return props.children;
    }}
  </Query>
);

export default SignInRequire;
