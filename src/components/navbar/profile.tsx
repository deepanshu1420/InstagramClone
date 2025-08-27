import profilePic from '../../assets/screenshots/profile.jpg'

const Profile = () => {
  return (
    <div className="rounded-full overflow-hidden w-6 h-6 cursor-pointer">
      <img
        className="w-full"
        src={profilePic}
        alt="Deepanshu Sharma"
      />
    </div>
  )
}

export default Profile
