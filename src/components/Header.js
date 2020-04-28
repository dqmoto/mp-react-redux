import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth'
// import {logo} from '/images/logo.svg'

export const Header = ({startLogout, isAdmin}) => (
    <header className="header">
      <div className="content-container">
          <div className="header__content">
      
        <Link className="header__title" to="/dashboard">
        <h1>
         <div className='logo-holder'>
             <img className='logo__image' src='/images/logo.svg'/> 
             <div><span className='ml-2 header-title header--bold'>moto</span><span className='header-title header--thin'>preserve</span></div>
        </div>
           
           
        </h1>
        
        </Link>
        
        {/* <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink> */}
        <nav className="nav-holder">
        {isAdmin ? <NavLink className="button button--link" activeClassName="selected" to={'/admin'}>admin</NavLink> : null}
        <NavLink className="button button--link" activeClassName="selected" to={'/videos'}>videos</NavLink>
        <NavLink className="button button--link" activeClassName="selected" to={'/settings'}>settings</NavLink>
        <button className="button button--link" onClick={startLogout}>logout</button>
        </nav>
        </div>
        </div>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: ()=> dispatch(startLogout())
} )

const mapStateToProps =(state)=>{
    return {
        isAdmin: state.admin.isAdmin
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);