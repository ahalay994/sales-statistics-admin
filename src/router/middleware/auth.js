export default function auth({ next, auth }) {
    if (!auth.loggedIn) {
        return next({
            name: 'login'
        });
    }
    return next();
}
