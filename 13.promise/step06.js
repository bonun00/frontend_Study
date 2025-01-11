

async function asyncFunc1() {
    const user = await getRequestWithPromise(`${url}/posts/1`);
    const userInfo = await getRequestWithPromise(`${url}/users/${user.userId}`);
    console.log(userInfo);
}