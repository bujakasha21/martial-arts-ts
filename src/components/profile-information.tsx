import Image from "next/image";
import user from "../assets/user.png";

const ProfileInformation = () => {
  return (
    <main className="w-full bg-red-200">
      <div className="bg-red-300 flex flex-row items-center justify-around mx-[20%] py-10">
        <div className="flex flex-row items-center justify-start">
          <Image src={user} alt="profile-photo" width={150} />
          <div className="flex flex-col ml-10">
            <h3>Marko Markovic</h3>
            <p>@markomarkovic99</p>
          </div>
        </div>
        <div>
          <button type="submit" className="border-2 rounded-lg px-10 py-3">
            Edit Profile
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProfileInformation;
