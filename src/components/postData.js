// export const BaseURL = 'http://109.237.24.219:1111/';
export const BaseURL = 'http://localhost:1111/';
// export const Token = '##kbabawale.com##';

export const UserDetails = JSON.parse(sessionStorage.getItem('user_details'));

export const getUser = (userid, api_key) => {

    fetch(BaseURL + 'user?id=' + userid, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'API_KEY': api_key
        }
    }).then(res => res.json()
        .then((data) => {

            if (!sessionStorage.getItem('auth_kb_')) {
                sessionStorage.setItem('auth_kb_', true);
            }

            delete data.user[0].password;

            // if (!sessionStorage.getItem('user_details')) {
            sessionStorage.setItem('user_details', JSON.stringify(data.user[0]));
            // }
            if (!sessionStorage.getItem('Xs')) {
                sessionStorage.setItem('Xs', api_key);
            }
        })
    );

}

export const removeUser = () => {

    sessionStorage.removeItem('auth_kb_');
    sessionStorage.removeItem('user_details');
    sessionStorage.removeItem('Xs');

}