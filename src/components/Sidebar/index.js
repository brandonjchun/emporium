import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/rashad'>Isaiah Rashad</SidebarLink>
        <SidebarLink to='/blake'>James Blake</SidebarLink>
        <SidebarLink to='/jiwoo'>Jiwoo</SidebarLink>
        <SidebarLink to='/rivertiber'>River Tiber</SidebarLink>
        <SidebarLink to='/sir'>SiR</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Eggs are Yummy~</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
