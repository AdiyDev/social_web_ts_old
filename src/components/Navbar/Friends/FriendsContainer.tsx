import Friends from './Friends'
import { connect } from 'react-redux'
import { AppStateType } from '../../../redux/redux-store'
import { friendType } from '../../../redux/navbar-reducer'

type MapStatePropType = {
  navbar: Array<friendType>
}

const mapStateToProps = (state: AppStateType): MapStatePropType => {
  return {
    navbar: state.navbar.friends
  }
}

const FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer
