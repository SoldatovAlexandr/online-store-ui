export function isAdmin(user) {
    if (!user.roles) {
        return false;
    }
    for (let i = 0; i < user.roles.length; i++) {
        if (user.roles[i].name === 'ROLE_ADMIN') {
            return true;
        }
    }
    return false;
}