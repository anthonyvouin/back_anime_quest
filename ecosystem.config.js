module.exports = {
    apps: [
        {
            name: "back-anime-quest",
            script: "./dist/index.js",
            env: {
                API_KEY: process.env.API_KEY,
                DATABASE: process.env.DATABASE
            },
            env_production: {
                NODE_ENV: "production",
            },
        },
    ],
};