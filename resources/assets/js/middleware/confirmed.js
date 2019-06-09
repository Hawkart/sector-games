import store from '~/store'

export default (to, from, next) => {
    if (!store.getters['auth/user'].confirmed) {
        next({ name: 'settings.profile' })
    } else {
        next()
    }
}