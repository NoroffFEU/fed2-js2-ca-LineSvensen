export async function getKey() {

    // const username = localStorage.getItem('name');
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
        return accessToken
    } else {
        throw new Error('AccessToken or username not found');
    }
}