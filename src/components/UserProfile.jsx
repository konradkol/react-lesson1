import { ProfilePicture } from "./ProfilePicture";
import { ProfileDetails } from "./ProfileDetails";


export const UserProfile = ({src, name, email}) => {
  return (
    <div className="userProfile">
      <ProfilePicture src={src} />
      <ProfileDetails name={name} email={email} />
    </div>
  );
};
