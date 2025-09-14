const parseEnv = () => {
    const envVariables = Object.entries(process.env);
    const mitsoVariables = envVariables
        .filter(([key]) => key.startsWith('MITSO_'))
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');
    console.log(mitsoVariables);
};

await parseEnv();
