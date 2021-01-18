interface Response {
    token: string;
    user: { 
        name: string;
        email: string;
    }
}

export function signIn(): Promise<Response> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: '213kl23nklj1n3kj12n3kj1n23kj1n23kn1k2j32nkj',
                user: {
                    name: 'Eu mesmo',
                    email: 'eu@email.com',
                },
            });
        }, 2000);
    });
};