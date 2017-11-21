import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { AppBar, Drawer, IconButton, List, ListItem } from 'material-ui'
import { Divider, Avatar } from 'material-ui'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'

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
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
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
              <ListItem primaryText="Sign out" onClick={signOut} />
            </List>
          </Drawer>
        )}
        <div style={{ padding: 40 }}>{children}</div>
      </Children>
    )
  }
}

const ConnectedLayout = connect(state => ({ ...state.layout }), actions)(Layout)

export default withRouter(ConnectedLayout)
