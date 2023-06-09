const whitelist = [
    'https://www.yoursite.com',
    'http://127.0.0.1:5500',
    'http://localhost:3500',
    'http://localhost:5173',
    'http://192.168.43.73:5173',
    'http://192.168.43.73:5173/signup',
    'https://fleadisc.netlify.app',
    'https://fleadisc.netlify.app/disc',
    'https://fleadisc.netlify.app/user',
    'https://fleadisc.netlify.app/chat',
    'https://fleadisc.netlify.app/delivery',
    'https://fleadisc.com'
];

export const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}
