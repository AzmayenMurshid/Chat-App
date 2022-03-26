import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import COokies from 'universal-cookie';
import HospitalIcon from '../assets/hospital.png';
import LogoutIcon from '../assets/logout.png'


const SideBar = () => (
    <div className='channel-list__sidebar'>
        <div className='channel-list__sidebar__icon1'>
            <div className='icon1__inner'>
                <img src={HospitalIcon} alt="Icon" width='30' />
            </div>
        </div>
        <div className='channel-list__sidebar__icon2'>
            <div className='icon1__inner'>
                <img src={LogoutIcon} alt="Log out" width='30' />
            </div>
        </div>
    </div>
)

const CompanyHeader = () => (
    <div className='channel-list__header'>
        <p className='channel-list__header__text'>Text Field</p>
    </div>
        
)

const ChannelListContainer = () => {
  return (
    <>
        <SideBar />
        <div className='channel-list-__list__wrapper'>
            <CompanyHeader />
        </div>
    </>
  )
}

export default ChannelListContainer