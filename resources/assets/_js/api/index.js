import axios from 'axios'

/**
 * Fetch the current user.
 *
 * @return {Object|undefined}
 */
async function fetchUser () {
    try {
        const { data } = await axios.get('/api/users/me')   //?_with=game,socialAccount
        return data
    } catch (e) {}
}

export default {
    fetchUser
}