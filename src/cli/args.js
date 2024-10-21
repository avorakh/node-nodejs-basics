const argNamePrefix = /^--/;
const empty_str = '';

const parseArgs = () => {
    let args = process.argv.slice(2);

    let argValues = [];

    for (let i = 0; i < args.length; i += 2) {
        let argName = args[i].replace(argNamePrefix, empty_str);
        let argValue = args[i + 1];

        argValues.push(`${argName} is ${argValue}`);
    }

    console.log(argValues.join(', '));
};

parseArgs();