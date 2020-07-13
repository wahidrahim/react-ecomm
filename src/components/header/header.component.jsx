import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { getCurrentUser } from '../../redux/user/user.selectors';
import { getCartHidden } from '../../redux/cart/cart.selectors';

import {
  HeaderContainer,
  LogoLink,
  Options,
  OptionLink,
} from './header.styles';
import { signOutStart } from '@redux/user/user.actions';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoLink to="/">
      <Logo className="logo" />
    </LogoLink>
    <Options>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink className="option" to="/contact">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink className="option" to="/sign-in">
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </Options>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: getCurrentUser,
  hidden: getCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
