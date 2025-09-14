const parseArgs = () => {
    const args = process.argv.slice(2);
    let currentProp = '';

    for (let i = 0; i < args.length; i++) {
        if (args[i].startsWith('--')) {
            currentProp = args[i].substring(2);
        } else {
            console.log(`${currentProp} is ${args[i]}`);
        }
    }
};

parseArgs();