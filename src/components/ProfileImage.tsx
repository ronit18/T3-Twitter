import Image from "next/image";
import React from "react";
interface ProfileImageProps {
  src: string | null;
  className: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src, className }) => {
  return (
    <div className={`relative h-12 w-12 overflow-hidden ${className}`}>
      {src == null ? null : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50" />
          <Image alt="ProfileImage" src={src} quality={100} fill />
        </div>
      )}
    </div>
  );
};

export default ProfileImage;
