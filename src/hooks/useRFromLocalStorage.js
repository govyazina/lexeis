import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {signInAC} from "../store/actions/mainActions";

const getUser = () => {
    const item = window.localStorage.getItem('lexis.user')
    try {
        return item ? JSON.parse(item) : {}

    } catch {
        return {}
    }
}
export const useRFromLocalStorage = () => {
    const dispatch = useDispatch()
    const {user} = useSelector(store => store.mainStore)
    useEffect(() => {
        if (!user.id) {
            const savedUser = getUser()
            if (savedUser.id) {
                dispatch(signInAC(savedUser))
            }
        }
        else {
            window.localStorage.setItem('lexis.user', JSON.stringify(user))
        }
    }, [user])
    return user
}