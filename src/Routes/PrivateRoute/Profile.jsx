import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import author from "../../assets/logo1.jpg";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="mt-14 mb-24 flex lg:flex-row flex-col gap-10 items-center justify-center">
        <div>
          <h1 className="text-xl font-semibold pb-3">Profile Picture</h1>
          {user.photoURL ? (
            <div className="border-2 border-[#212121] rounded-lg w-60 h-60">
              <img
                className="w-60 h-60 p-2 rounded-lg"
                src={user.photoURL}
                alt=""
              />
            </div>
          ) : (
            <>
              <div className="border-2 border-[#212121] rounded-lg">
                <div>
                  <img className="w-60 p-2 rounded-lg" src={author} alt="" />
                </div>
              </div>
              <p>User has no photo</p>
            </>
          )}
        </div>
        <div>
          <div className="mt-3">
            <h1>
              <span className="text-lg font-semibold">Name: </span>
              <span className="text-base font-medium">
                {user.displayName ? user.displayName : "Unknown User"}
              </span>
            </h1>
            <h1>
              <span className="text-lg font-semibold">Email: </span>
              <span className="text-base font-medium">{user.email}</span>
            </h1>
          </div>
          <div>
            <h1 className="bg-[#212121] text-[#FFF] pl-4 py-1 rounded text-xl font-semibold mt-5">
              User Meta data
            </h1>
            <div className="pl-4 pt-3 font-medium">
              <p className="pb-1 border-b-[1px] border-b-[#212121]">
                Created At: {user.metadata && user.metadata["createdAt"]}
              </p>
              <p className="pb-1 border-b-[1px] border-b-[#212121]">
                creation Time: {user.metadata && user.metadata["creationTime"]}
              </p>
              <p className="pb-1 border-b-[1px] border-b-[#212121]">
                last Login At: {user.metadata && user.metadata["lastLoginAt"]}
              </p>
              <p className="pb-1 border-b-[1px] border-b-[#212121]">
                last Sign In Time:{" "}
                {user.metadata && user.metadata["lastSignInTime"]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
