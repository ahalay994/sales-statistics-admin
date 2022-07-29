export default function isAdmin({ next, auth }) {
    if (auth.user) {
        return next({
            name: 'admin.dashboard'
        });
    }

    return next();
}
