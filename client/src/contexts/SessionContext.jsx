import React, { createContext, useContext, useEffect, useState } from 'react'

export const SessionContext = createContext()

export const SessionProvider = ({ children }) => {
  const [state, setState] = useState({
    auth: false,
    user: null,
    loading: false
  })

  useEffect(() => {
    const auth = window.localStorage.getItem('auth')
    const user = window.localStorage.getItem('user')
    
    if(auth && user){
        setState(prev => ({
            auth: auth,
            user: JSON.parse(user),
            loading: false
        }))
    }
  }, [])

  const login = (user) => {
    window.localStorage.setItem('auth', true);
    window.localStorage.setItem('user', JSON.stringify(user));

    setState({
      ...state,
      auth: true,
      user: user,
      loading: false
    })
  }

  const logout = () => {
    window.localStorage.removeItem('auth')
    window.localStorage.removeItem('user')
    setState({
      ...state,
      auth: false,
      user: null,
      loading: false
    })
  }

  const setLoading = (loading) => {
    setState({...state, loading: loading})
  }

  const setUser = (data) => {
    window.localStorage.setItem('user', JSON.stringify(data));
    setState({...state, user: data})
  }

  const functions = {
    login,
    logout,
    setLoading,
    setUser
  }

  return (
    <SessionContext.Provider value={[state, functions]}>
      {children}
    </SessionContext.Provider>
  )
}

/**
 * Hook to get and update session state
 */
export const useSession = () => {
  const sessionManager = useContext(SessionContext)
  return sessionManager || [{}, () => {}]
}

// const [{auth, user, loading}, {login, logout, setLoading, setUser}] = useSession()

