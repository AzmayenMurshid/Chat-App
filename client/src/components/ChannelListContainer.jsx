import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';

import Cookies from 'universal-cookie';
import HospitalIcon from '../assets/hospital.png'; /*TODO: Change Icon */
import LogoutIcon from '../assets/logout.png'

const cookies  = new Cookies();

const SideBar = ({ logout }) => (
    <div className='channel-list__sidebar'>
        <div className='channel-list__sidebar__icon1'>
            <div className='icon1__inner'>
                <img src={HospitalIcon} alt="Icon" width='30' />
            </div>
        </div>
        <div className='channel-list__sidebar__icon2'>
            <div className='icon1__inner' onClick={ logout }>
                <img src={LogoutIcon} alt="Log out" width='30' />
            </div>
        </div>
    </div>
)

const CompanyHeader = () => (
    <div className='channel-list__header'>
        <p className='channel-list__header__text'>Texter</p>
    </div>
)

const ChannelListContainer = ({isCreating, setIsCreating, setCreateType, setIsEditing}) => {
     const logout = () => {
        cookies.remove("token");
        cookies.remove('username');
        cookies.remove('fullName');
        cookies.remove('userId');
        cookies.remove('phoneNumber');
        cookies.remove('avatarURL');
        cookies.remove('hashedPassword');

        window.location.reload();
    }
  return (
    <>
        <SideBar logout={logout}/>
        <div className='channel-list__list__wrapper'>
            <CompanyHeader />
            <ChannelSearch />
            <ChannelList 
                filters={{}}
                channelRenderFilterFn={() => {}}
                List={(listProps) => (
                    <TeamChannelList 
                        { ... listProps}
                        type='team'
                        isCreating={isCreating}
                        setIsCreating={setIsCreating}
                        setCreateType={setCreateType} 
                        setIsEditing={setIsEditing}
                    />
                )}
                Preview={(PreviewProps) => (
                    <TeamChannelPreview 
                        { ... PreviewProps}
                        type='team'
                        isCreating={isCreating}
                        setIsCreating={setIsCreating}
                        setCreateType={setCreateType} 
                        setIsEditing={setIsEditing}
                    />
                )}
            />
            <ChannelList 
                filters={{}}
                channelRenderFilterFn={() => {}}
                List={(listProps) => (
                    <TeamChannelList 
                        { ... listProps}
                        type='messaging'
                    />
                )}
                Preview={(PreviewProps) => (
                    <TeamChannelPreview 
                        { ... PreviewProps}
                        type='messaging'
                    />
                )}
            />
        </div>
    </>
  )
}

export default ChannelListContainer