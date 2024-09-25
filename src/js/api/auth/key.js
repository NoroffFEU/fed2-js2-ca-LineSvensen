export async function getKey(name) {

    const accessToken = localStorage.getItem('accessToken');
    const username = localStorage.getItem('name');

    if (accessToken && username) {
        return { accessToken, name: username };
    } else {
        throw new Error('AccessToken or username not found');
    }
}