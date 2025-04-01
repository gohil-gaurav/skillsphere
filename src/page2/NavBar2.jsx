import React from 'react' 
import MyIcon from '../assets/user.svg';

const NavBar2 = () => {
  return (
    <>
    <nav className='flex justify-between p-3 w-full text-2xl shadow-md'>
      <div className="menu flex gap-10 ml-20" >
      <div>☰</div>
      <div className="skillsphere">
        SkillSphere
      </div>
      </div>
      <div className="user flex justify-between gap-10 mr-40" >
        <div className="name">
          Hii Tajagn!
        </div>
        <div className="userf ">
        <img src={MyIcon} alt="" width={40}/>
        </div>
      </div>
    </nav>
    

    
    </>
  )
}

export default NavBar2

