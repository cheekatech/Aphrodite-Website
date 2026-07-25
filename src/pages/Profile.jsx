import { useRef } from "react";
import { useAuth } from "../components/AuthContext";
import "./Profile.css";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Profile() {


  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const { user, updateProfile } = useAuth();
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      updateProfile({ profileImage: reader.result });
    };
    reader.readAsDataURL(file);
  };

  if (!user) {
    return <h3>You need to be logged in to view this page.</h3>;
  }

  return (
    <div id="profile" className="profilePage">
      <div className="profileBody">
        <div className="profileImageSection">
        <div
          className="profileImageWrapper"
          onClick={() => fileInputRef.current.click()}
        >
          {user.profileImage ? (
            <img src={user.profileImage} alt="Profile" />
          ) : (
            <div className="profilePlaceholder">Add Photo</div>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        <p className="uploadHint">User Photo</p>
      </div>

      <div className="profileDetails">
        <h2>{user.name}</h2>

        <div className="detailRow">
          <span className="detailLabel">Email</span>
          <span>{user.email}</span>
        </div>
        <div className="detailRow">
          <span className="detailLabel">Address</span>
          <span>{user.address}</span>
        </div>
        <div className="detailRow">
          <span className="detailLabel">City</span>
          <span>{user.city}</span>
        </div>
        <div className="detailRow">
          <span className="detailLabel">State</span>
          <span>{user.state}</span>
        </div>
        <div className="detailRow">
          <span className="detailLabel">Country</span>
          <span>{user.country}</span>
        </div>
        <div className="detailRow">
          <span className="detailLabel">ZIP Code</span>
          <span>{user.zip}</span>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Profile;