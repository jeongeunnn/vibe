import Button from "../components/Buttons";
import { useSelector } from 'react-redux';

function Header(props){
  let gnb = useSelector((state)=>{ return state.gnb })
  console.log(gnb);

  return (
    <header id="header" className="header">
      <h1 className="logo_wrap">
        <Button className="link_logo" link="/" blind="VIBE 로고" />
      </h1>
      <div className="menu_wrap">
        <div className="profile_area">
        <Button className="link_login" link="#" content="로그인" />
        </div>
        <div className="membership_area">
          <p>로그인하고 할인 멤버십 확인하기</p>
          <Button className="link_subscribe" link="/membership/vibe?utm_source=vibeweb&utm_medium=gnb_membershipsubscription&utm_campaign=membership_click_tracking" blind="멤버십 구독"/>
        </div>
        <div className="search_area">
          
        </div>
      </div>
      <div className="floating_wrap">
        <Button className="link_desktopapp" link="/desktopapp" blind="데스크톱앱 설치"/>
      </div>
    </header>
  )
}

export default Header;