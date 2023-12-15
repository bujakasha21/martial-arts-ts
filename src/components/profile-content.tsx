const ProfileContent = () => {
  return (
    <main className="w-full bg-red-200">
      <div className="bg-red-400 flex flex-col items-center justify-around mx-[20%] mt-10 py-10 ">
        {/* Options: Shared, Reacted, Saved */}
        <div className="bg-blue-300 flex flex-row items-center w-full">
          <ul className="bg-blue-500 flex flex-row items-center justify-evenly w-full mx-20 border-b-2 border-red-900 pb-5 uppercase">
            <li>
              <a href="#">Shared Facts</a>
            </li>
            <li>
              <a href="#">Reacted To</a>
            </li>
            <li>
              <a href="#">Saved</a>
            </li>
          </ul>
        </div>
        {/* Facts */}
        <div className="bg-red-800 flex flex-col items-center justify-start rounded-lg w-[85%] mt-10 h-[50vw] py-6 gap-5">
          <div className=" bg-gray-500 w-[90%] py-4 rounded-xl border border-white">
            <p className="mx-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              unde quisquam in suscipit. Pariatur laborum quod consectetur? Id
              unde similique eveniet harum, porro fuga, quo aliquid aliquam
              quidem quia beatae.
            </p>
          </div>
          <div className=" bg-gray-500 w-[90%] py-4 rounded-xl border border-white">
            <p className="mx-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              unde quisquam in suscipit. Pariatur laborum quod consectetur? Id
              unde similique eveniet harum, porro fuga, quo aliquid aliquam
              quidem quia beatae.
            </p>
          </div>
          <div className=" bg-gray-500 w-[90%] py-4 rounded-xl border border-white">
            <p className="mx-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              unde quisquam in suscipit. Pariatur laborum quod consectetur? Id
              unde similique eveniet harum, porro fuga, quo aliquid aliquam
              quidem quia beatae.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileContent;
