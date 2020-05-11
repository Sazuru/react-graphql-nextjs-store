import PleaseSignIn from '../components/SignInRequire';
import Permissions from '../components/Permissions';

const PermissionsPage = (props) => (
  <div>
    <PleaseSignIn>
      <Permissions />
    </PleaseSignIn>
  </div>
);

export default PermissionsPage;
