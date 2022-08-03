export default function guest({next, auth}) {
    if (auth.loggedIn) {
        return next({
            name: 'admin.dashboard'
        });
    }

    return next();
}
