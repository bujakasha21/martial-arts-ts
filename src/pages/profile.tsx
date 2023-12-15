import ProfileContent from "@/components/profile-content";
import ProfileInformation from "../components/profile-information";

const ProfilePage = () => {
  return (
    <>
      <h1 className="text-red-900 w-full h-[100px]">Logo</h1>
      <ProfileInformation />
      <ProfileContent />
    </>
  );
};

export default ProfilePage;
