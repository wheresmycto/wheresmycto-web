import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { AppBar, Drawer, IconButton, List, ListItem } from 'material-ui'
import { Divider, Avatar, Paper, BottomNavigation } from 'material-ui'
import { BottomNavigationItem } from 'material-ui'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import QuestionsIcon from 'material-ui/svg-icons/action/question-answer'
import SessionsIcon from 'material-ui/svg-icons/social/school'
import FriendsIcon from 'material-ui/svg-icons/social/group-add'

import Children from '../Children'
import * as actions from './actions'

class Layout extends Component {
  render() {
    const { children, auth, drawerOpen, openDrawer, closeDrawer } = this.props
    const { currentUser, signOut } = auth

    return (
      <Children>
        <AppBar
          title={
            <Link
              to="/dashboard"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              Where&#39;s my CTO?
            </Link>
          }
          showMenuIconButton={false}
          iconElementRight={
            <IconButton onClick={openDrawer}>
              <MenuIcon />
            </IconButton>
          }
        />
        {currentUser && (
          <Drawer
            openSecondary
            docked={false}
            open={drawerOpen}
            onRequestChange={open => (open ? openDrawer() : closeDrawer())}
          >
            <List>
              <ListItem
                disabled
                primaryText={currentUser.name}
                leftAvatar={<Avatar src={currentUser.picture} />}
              />
              <Divider />
              <ListItem
                leftIcon={<div />}
                primaryText="Sign out"
                onClick={signOut}
              />
            </List>
          </Drawer>
        )}
        <div style={{ padding: 40 }}>{children}</div>
        <Paper
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            padding: 20,
          }}
        >
          <BottomNavigation selectedIndex={0}>
            <BottomNavigationItem label="Questions" icon={<QuestionsIcon />} />
            <BottomNavigationItem
              label="1:1 Sessions"
              icon={<SessionsIcon />}
            />
            <BottomNavigationItem
              label="Invite friends"
              icon={<FriendsIcon />}
            />
          </BottomNavigation>
        </Paper>
      </Children>
    )
  }
}

const ConnectedLayout = connect(state => ({ ...state.layout }), actions)(Layout)

export default withRouter(ConnectedLayout)
